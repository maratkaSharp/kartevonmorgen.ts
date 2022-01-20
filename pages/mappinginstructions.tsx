import React, {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeHeaderCoMap from '../projects/co-map/components/HomeHeaderCoMap';

const MappingInstructions: FC = () => {
    return (
        <>
            <HomeHeaderCoMap />
            <div className="instructions">
                <div className="instructions__container">
                    <section>
                        <h1 className="co_map_largetext">
                            Инструкции по картированию
                        </h1>
                        <p className="co_map_mediumtext">
                            <Link href={'/maps/main'}>co-map.ru</Link> - это
                            платформа вроде Википедии, информацию на которой
                            могут редактировать и улучшать совместно все
                            пользователи во всем мире. Контент структурирован с
                            использованием ключевых слов (#хэштегов). То есть,
                            это вики-карта экологических и социальных проектов,
                            которая помогает неравнодушным людям найти нужный
                            проект поблизости, а проектам – найти свою
                            аудиторию.
                        </p>
                        <p className="co_map_mediumtext">
                            Наши региональные координаторы и местные{' '}
                            <b>амбассадоры</b> («послы») - это люди, которые
                            создают карту на своих территориях, они же зачастую
                            являются лидерами местных инициатив в области
                            устойчивого развития. Амбассадоры получают права
                            администратора карты, и только они могут удалять
                            (архивировать) точки с карты.{' '}
                        </p>
                        <p className="co_map_mediumtext">
                            Амбассадоры составляют карту своего города, а иногда
                            также публикуют карты, напечатанные на бумаге.
                        </p>
                        <div className="instructions__btn-block">
                            <button className="btn btn__purple">
                                <Link href={'/ambassadors'}>
                                    Стань абассадором прямо сейчас
                                </Link>
                            </button>
                            <button className="btn btn__gray">
                                <Link href={'/main'}>На карту</Link>
                            </button>
                        </div>
                    </section>
                    <section>
                        <h2 className="co_map_largetext">
                            Инструкции по составлению карт
                        </h2>
                        <p className="instructions__img-block co_map_mediumtext">
                            Любой пользователь карты может добавлять и
                            редактировать записи. Изменения сразу видны в
                            большинстве регионов и тем (в исключительных случаях
                            изменение должно быть одобрено амбассадором).
                            <ol className="co_map_mediumtext">
                                <Image
                                    src={
                                        '/projects/co-map/assets/img/co-map/instructions/map2.png'
                                    }
                                    width={400}
                                    height={350}
                                    objectFit="contain"
                                    className="instructions__img-map2"
                                />
                                <li>
                                    Найдите город, в котором вы хотите добавить
                                    проекты и события на{' '}
                                    <Link href={'/maps/main'}>co-map.ru</Link>
                                </li>
                                <li>
                                    Используйте функцию поиска, чтобы убедиться,
                                    что записи еще не существует.
                                </li>
                                <li>
                                    Нажмите на знак “+” справа внизу страницы.
                                </li>
                                <li>
                                    Заполните форму ввода максимально кратко и
                                    логично. При добавлении хэштегов подумайте,
                                    по каким ключевым словам вас будут искать.
                                    Есть три категории записей:
                                    <ul className="instructions__mark-list co_map_mediumtext">
                                        <li>Событие</li>
                                        <li>Организация</li>
                                        <li>Проект</li>
                                    </ul>
                                </li>
                                <li>
                                    Лучше всего отправить зарегистрированным
                                    проектам приветственное письмо сразу после
                                    сохранения. И подпишитесь на свой регион,
                                    чтобы быть в курсе изменений в ваших списках
                                    (подробности ниже).
                                </li>
                                <li>
                                    Во время следующей прогулки по городу вы
                                    можете зайти в организацию поздороваться и
                                    спросить, поддержат ли они финансовую печать
                                    бумажной карты.
                                </li>
                            </ol>
                            <p>
                                <h3>Добавить изображение</h3>В самом низу формы
                                для ввода данных можно добавить картинку,
                                которая будет отображаться перед описанием. Это
                                изображение уже должно быть в интернете, вы не
                                можете загружать изображения на co-map.ru
                                напрямую. Выбрать изображение на стороннем
                                сайте, вы можете, кликнув по нему правой кнопкой
                                мыши и нажав на «Копировать URL картинки».
                                Вставьте этот URL (заканчивающийся на .jpg,
                                .png) в соответствующую строку.
                            </p>
                            <p>
                                <h3>Ключевые слова</h3>
                                Здесь у вас есть неограниченное пространство для
                                хэштегов, которые ищут пользователи. Описание
                                лучше добавлять короткое, а хэштегов может быть
                                много.
                            </p>
                        </p>
                    </section>
                    <hr />
                    {/* <section>
                        <h2 className="co_map_largetext">Раздел подписки</h2>
                        <p className="co_map_mediumtext">
                            <b>Амбассадоры</b> (а также и все пользователи)
                            имеют возможность войти в систему на стартовой
                            странице и подписаться на раздел карты, чтобы
                            получать по электронной почте информацию об
                            изменениях, например, в своем городе.
                        </p>
                        <p className="co_map_mediumtext">
                            На стартовой странице{' '}
                            <Link href={'/maps/main'}>co-map.ru</Link> нажмите
                            на вход в систему в правом верхнем углу. Затем вы
                            можете зарегистрироваться и подписаться на выписку
                            карты. Шаги описаны на странице.
                        </p>
                    </section> */}
                    <section>
                        <h2 className="co_map_largetext">Для пользователей:</h2>
                        <div className="instructions__for-users">
                            <p className="co_map_mediumtext">
                                <div>
                                    <Image
                                        src={
                                            '/projects/co-map/assets/img/co-map/instructions/map3.png'
                                        }
                                        width={500}
                                        height={350}
                                        objectFit="contain"
                                        className="instructions__img-map2"
                                    />
                                </div>
                                Важно: только <b>амбассадоры</b> могут удалять
                                записи. Если вы хотите удалить что-то как
                                обычный пользователь, но не имеете необходимых
                                прав, то просто отредактируйте запись и
                                используйте одно из следующих ключевых слов:
                            </p>
                            <ol className="co_map_mediumtext">
                                <li>#удалить-ошибку</li>
                                <li>#удалить-дубликат</li>
                                <li>#удалить-спам</li>
                            </ol>
                            <p className="co_map_mediumtext">
                                Тогда амбассадор в вашем регионе это уладит.
                                Кроме того, вы можете воспользоваться кнопкой в
                                нижнем колонтитуле записи "Пожаловаться на
                                запись", чтобы отправить сообщение
                                непосредственно в редакцию.
                            </p>
                        </div>
                    </section>
                    <section>
                        <h2 className="co_map_largetext">Для амбассадоров:</h2>
                        <p className="co_map_mediumtext">
                            Пожалуйста, сначала подпишитесь на карту, а затем
                            попросите активировать ваш адрес электронной почты.
                        </p>
                        <p className="co_map_mediumtext">
                            Активированные амбассадоры могут получить доступ к
                            бэкэнду по ссылке в нижнем колонтитуле записи, где
                            они должны снова войти в систему.
                        </p>
                        <p className="co_map_mediumtext">
                            Справа от названия вы можете увидеть версии
                            редакции, а в разделе "Обзор" вы можете отклонить
                            действие.
                        </p>
                        <p className="co_map_mediumtext">
                            <b>Отклоните запись</b> в случае дубликатов или
                            спама.
                        </p>
                        <p className="co_map_mediumtext">
                            <b>Архивируйте запись</b>, если организации больше
                            не существует.
                        </p>
                        <p className="co_map_mediumtext">
                            <b>Подтвердите запись</b>, если вы можете
                            засвидетельствовать ее правильность. После этого
                            ваше имя пользователя будет привязано к записи.
                            Неподтвержденные записи будут выделены серым цветом.
                        </p>
                        <p className="co_map_mediumtext">
                            При архивировании, пожалуйста, напишите комментарий,
                            почему запись была заархивирована.{' '}
                        </p>
                        <p className="co_map_mediumtext">Например:</p>
                        <ul className="co_map_mediumtext">
                            <li>организация закрыта</li>
                            <li>дублирование</li>
                            <li>ошибка</li>
                            <li>спам</li>
                        </ul>
                        <p className="co_map_mediumtext">
                            Также с помощью этого бэкэнда можно удалять события.
                            Для этого сначала нажмите «События» вверху справа.
                        </p>
                        <p className="co_map_mediumtext">
                            Вот пояснительное видео на английском языке:
                        </p>
                        <div
                            style={{
                                position: 'relative',
                                paddingBottom: '56.25%',
                                height: '0',
                            }}
                        >
                            <iframe
                                src="https://www.loom.com/embed/c96fff4278894d8c84440202a6287295"
                                frameBorder="0"
                                allowFullScreen
                                style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </div>
                    </section>
                    <section>
                        <h2 className="co_map_largetext">
                            Часто задаваемые вопросы
                        </h2>
                        <p className="co_map_mediumtext">
                            Защита данных: все события и проекты, которые
                            публично рекламируют себя, могут быть нанесены на
                            карту без запроса. В отношении юридических лиц
                            защита данных не осуществляется. В случае с
                            физическими лицами, что часто случается с некоторыми
                            небольшими инициативами, все сложнее, так как здесь
                            действует Закон о защите персональных данных.
                            Поэтому с проектами, существующими «просто так» (без
                            создания юридического лица), следует связаться
                            лично, прежде чем публиковать персональные данные
                            (имя, адрес электронной почты, телефон), которые
                            невозможно найти в Google.
                        </p>
                        <p className="co_map_mediumtext">
                            Почему место, которое я ищу, не может быть найдено?
                            Поиск на главной странице требует точности. Важно
                            ввести именно то название, которое использует карта.
                            Например, если ввести «Петербург», поиск предложит
                            много вариантов в самых разных уголках России,
                            потому что правильное название города
                            «Санкт-Петербург». Если вас это раздражает, можно
                            создать учетную запись на сервисе osm.org и
                            отредактировать карту: просто добавьте к городу
                            "alt_name=XXX", т.е. альтернативное название, в
                            которое можно ввести то, что вы хотите. Через
                            несколько дней карта обновится, и поиск начнёт
                            учитывать изменение.
                        </p>
                        <p className="co_map_mediumtext">
                            Все дополнительные вопросы вы можете адресовать
                            команде, занимающейся технической поддержкой карты:
                            info@kartevonmorgen.org (команда использует в
                            коммуникации английский язык)
                        </p>
                    </section>
                    <section>
                        <h2 className="co_map_largetext">
                            Рассылка для новых участников карты
                        </h2>
                        <p className="co_map_mediumtext">
                            Если при добавлении проекта/события на карту вы
                            добавите адрес эл. почты, её владелец получит
                            сообщение. Как именно выглядит письмо в почте, вы
                            можете посмотреть здесь:{' '}
                            <Link href={'/templateletter'}>шаблон письма</Link>
                        </p>
                    </section>
                    <section>
                        <h2 className="co_map_largetext">
                            Региональные амбассадоры
                        </h2>
                        <p className="co_map_mediumtext">
                            Покажите свой регион с лучшей стороны! Станьте
                            региональным амбассадором co-map.ru и создайте карту
                            и комьюнити своего города. Вот как это сделать за 5
                            шагов.
                        </p>
                        <br />
                        <p className="co_map_mediumtext">
                            Под региональными амбассадорами мы подразумеваем
                            энтузиастов, которые активно пользуются картой
                            устойчивых практик, чтобы сделать заметными
                            интересные проекты в своём регионе, городе, селе,
                            деревне или другом населённом пункте. Они следят за
                            тем, кто активно работает с картой в их регионе.
                            Также они способствуют формированию устойчивого,
                            разнообразного сообщества и создают возможности для
                            обмена опытом между лидерами изменений, проводя
                            мероприятия и кампании.
                        </p>
                        <button className="btn btn__purple">
                            <Link href={'/ambassadors'}>
                                Стань абассадором прямо сейчас
                            </Link>
                        </button>
                    </section>
                    <section>
                        <h2 className="co_map_largetext">
                            Отраслевые партнёры
                        </h2>
                        <p className="co_map_mediumtext">
                            Люди, проекты и организации, которые фокусируются на
                            определённых темах (в контексте карты — на
                            определённых ключевых словах), называются
                            отраслевыми партнёрами. Здесь значение имеет не
                            столько принадлежность к конкретному региону,
                            сколько уровень экспертизы в конкретной теме —
                            например, в экологии или образовании.
                        </p>
                        <p className="co_map_mediumtext">
                            Текущие отраслевые партнёры
                        </p>
                        {/* <p className="co_map_mediumtext">
                            <Link href={'#'}>Здесь</Link> мы собрали информацию
                            обо всех отраслевых партнёрах, чьи сети уже нанесены
                            на карту или для которых уже существуют пилотные
                            проекты.
                        </p> */}
                        <p className="co_map_mediumtext">
                            Чтобы стать отраслевым партнёром, свяжитесь с
                            Андреем Андрусовым, заместителем директора Центра
                            СОЛь: +79175791620.
                        </p>
                        <p className="co_map_mediumtext">
                            Вы также можете разместить на своём сайте карту
                            участников вашей сети и мероприятия.
                            {/* Как это
                            сделать, объясняется <Link href={'#'}>Здесь</Link> */}
                        </p>
                    </section>
                    <br />
                    <section>
                        <h2 className="co_map_largetext">
                            НОВАЯ СТРАНИЦА НА САЙТЕ О ПОЗИТИВНЫХ ФАКТОРАХ
                        </h2>
                        <p className="co_map_mediumtext">
                            <Link href={'/maps/main'}>co-map.ru</Link> создает
                            прозрачность: организации могут быть оценены всеми
                            пользователями на основе положительных факторов их
                            ориентации на общественное благосостояние и Цели
                            Устойчивого Развития. Чем полнее ориентация на
                            общественное благосостояние и ЦУР, тем больший
                            значок отображается на карте.
                        </p>
                        <h3 className="co_map_subtitle">Система рейтингов</h3>
                        <p className="co_map_mediumtext">
                            При добавлении на карту организации, проекта или
                            события, предоставляется шесть отраслевых
                            направлений на выбор:
                        </p>
                        <Image
                            src={
                                '/projects/co-map/assets/img/co-map/instructions/rating.png'
                            }
                            width={500}
                            height={250}
                            className="instructions__img-map2"
                            objectFit="contain"
                            layout="responsive"
                        />
                        <p className="co_map_mediumtext">
                            Что касается характеристик, то пользователи и
                            амбассадоры, а также сами проекты и организаци имеют
                            возможность объективно и представить и описать свои
                            усилия, направленные на устойчивое развитие.
                        </p>
                        <p className="co_map_mediumtext">
                            Вы можете добавить только одну характеристику в одну
                            оценку.
                        </p>
                        <p className="co_map_mediumtext">
                            Шесть характеристик отсортированы по трем
                            направлениям устойчивого развития:
                        </p>
                        <div className="instructions__char">
                            <Image
                                src={
                                    '/projects/co-map/assets/img/co-map/instructions/char1.png'
                                }
                                width={500}
                                height={310}
                                className="instructions__char-img"
                                objectFit="contain"
                            />
                            <Image
                                src={
                                    '/projects/co-map/assets/img/co-map/instructions/char2.png'
                                }
                                width={500}
                                height={305}
                                className="instructions__char-img"
                                objectFit="contain"
                            />
                            <Image
                                src={
                                    '/projects/co-map/assets/img/co-map/instructions/char3.png'
                                }
                                width={500}
                                height={301}
                                className="instructions__char-img"
                                objectFit="contain"
                            />
                        </div>
                        <p className="co_map_mediumtext">
                            Эти 6 характеристик имеют значение для устойчивого
                            развития. К каждой организации, проекту или событию
                            может быть добавлено любое количество различных
                            характеристик, которые обсуждаются и оцениваются
                            всеми пользователями.{' '}
                        </p>
                        <p className="instructions__char-img">
                            Чем выше доля положительно оцененных характеристик
                            (положительных факторов), тем больше значок на карте
                            и тем выше он появляется в списке результатов
                            поиска. Это означает, что пользователи интуитивно
                            всегда выбирают наиболее экологичный вариант.
                        </p>
                        <div className="instructions__eco">
                            <Image
                                src={
                                    '/projects/co-map/assets/img/co-map/instructions/eco.png'
                                }
                                width={350}
                                height={500}
                                objectFit="contain"
                            />
                        </div>
                    </section>
                    <section>
                        <h3 className="co_map_subtitle">Шкала оценки</h3>
                        <p className="co_map_mediumtext">
                            По каждой характеристике проекту можно дать одну из
                            четырех оценок, исходя из того, насколько он
                            соответствует идеям устойчивого развития.
                        </p>
                        <p className="co_map_mediumtext">
                            Эти оценки представлены в следующем формате:
                        </p>
                        <p className="co_map_mediumtext">
                            От лучшего - "из далёкого будущего” (Нет ничего
                            лучше этого!)
                        </p>
                        <ul className="co_map_mediumtext">
                            <li>“из будущего” (новаторский)</li>
                            <li>“из настоящего” (не особенно устойчивый)</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="co_map_subtitle">Процедуры оценки</h3>
                        <p className="co_map_mediumtext">
                            Итого вся процедура оценки состоит из пяти шагов:
                        </p>
                        <ol className="co_map_mediumtext">
                            <li>
                                <b>Выбрать отраслевое направление:</b> Выбрать
                                одно или несколько отраслевых направлений.
                            </li>
                            <li>
                                <b>Выбрать положительную характеристику:</b>{' '}
                                Выберите одну из 6 характеристик, к которым
                                следует отнести данный аспект.
                            </li>
                            <li>
                                <b>Кратко описать характеристику:</b> В 140
                                символах создайте своего рода "заголовок",
                                который ясно дает понять, что здесь такого
                                замечательног
                            </li>
                            <li>
                                <b>Введите комментарий:</b> Напишите комментарии
                                (неограниченное количество) и укажите источник
                                (в лучшем случае, ссылкой, которая затем будет
                                показана непосредственно в виде превью). На этот
                                комментарий могут ответить другие пользователи.
                            </li>
                            <li>
                                <b>Поставить оценку по шкале:</b> Нажмите на
                                кнопку между "из далекого будущего" и "из
                                прошлого".
                            </li>
                        </ol>
                    </section>
                </div>
                <br />
            </div>
        </>
    );
};

export default MappingInstructions;