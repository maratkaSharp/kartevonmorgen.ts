import fs from 'fs'
import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'
import parseCSV from 'csv-parse/lib/sync'
import {
  CategorySelectOption,
  CategorySelectOptions,
  GroupedCategorySelectOptions,
} from '../../../../../dtos/CategorySelectOption'
import { convertUnknownToBoolean, convertUnknownToInt } from '../../../../../utils/utils'


interface Response {
  data: GroupedCategorySelectOptions
  hasData: boolean
}

type Record = any
type Records = Record[]

// headline, records
type BucketOfSelectOptions = [string, CategorySelectOptions]
type BucketsOfSelectOptions = BucketOfSelectOptions[]


const convertCSVRecordToCategorySelectOption = (record: Record): CategorySelectOption => {
  return ({
    label: record.label,
    value: record.value,
    icon: record.icon,
    fontSize: convertUnknownToInt(record.fontSize),
    bold: convertUnknownToBoolean(record.bold),
    italic: convertUnknownToBoolean(record.italic),
    underline: convertUnknownToBoolean(record.underline),
  })
}


const groupRecordsByHeadlinesAndConvertToSelectOption = (records: Records): BucketsOfSelectOptions => {
  const bucketsOfRecords: BucketsOfSelectOptions = [
    ['', []],
  ]

  for (let i = 0; i < records.length; i++) {
    const record = records[i]
    const isHeadline = convertUnknownToBoolean(record.headline)

    if (isHeadline) {
      const options: CategorySelectOptions = []
      const headline: string = record.label
      i++

      for (; i !== records.length; i++) {
        const possibleSubRecord = records[i]
        const isPossibleSubRecordHeadline = convertUnknownToBoolean(possibleSubRecord.headline)
        if (isPossibleSubRecordHeadline) {
          // bucketsOfRecords.push([headline, options])
          i--
          break
        }

        options.push(convertCSVRecordToCategorySelectOption(possibleSubRecord))
      }

      bucketsOfRecords.push([headline, options])
      continue
    }

    bucketsOfRecords[0][1].push(convertCSVRecordToCategorySelectOption(record))
  }

  return bucketsOfRecords
}


export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: {
      group,
    },
    method,
  } = req

  // only GET is allowed
  if (method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${method} Not Allowed`)

    return
  }


  const response: Response = {
    data: [],
    hasData: false,
  }

  let fileContent: string = JSON.stringify([])
  try {
    fileContent = fs.readFileSync(
      path.resolve(`./public/dropdowns/${group}/categories.csv`),
      'utf8',
    )

    response.hasData = true

    const records = parseCSV(
      fileContent, {
        columns: true,
        skip_empty_lines: true,
      },
    )

    const filteredRecords: Records = records.filter(record => record.label !== '')
    const groupedCategorySelectOptions: BucketsOfSelectOptions = groupRecordsByHeadlinesAndConvertToSelectOption(filteredRecords)

    response.data = groupedCategorySelectOptions
    response.hasData = true

  } catch (e) {

  }

  res
    .status(200)
    .json(response)

}