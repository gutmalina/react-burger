<h1 align="center"><a  href="#" target="_blank"><img src="./readme/stellar-burger_header.jpg" width="100%" alt="шапка"></a></h1>
<h2 align="center"># ***Бургерная на краю Вселенной***
<h1 align="center">собери и закажи фантастический и неповторимый бургер</>

## О проекте:

Это многопользовательское и многостраничное приложение интрнет-магазина, с возможностью собрать бургер из предлагаемых интгредиентов и сделать заказ. У пользователей есть возможность зарегистрироваться, авторизоваться, восстановить пароль, изменить свои данные в профиле, посмотреть историю своих заказов, а так же видеть все заказы, сделанные другими пользователями. Приложение сверстанно в Desctop версии (1280px - 1080px)

### ***Страницы и модальные окна***
* главная, со списком ингредиентов
* просмотр деталей ингредиента (цена, каллории, белки и т.д.)
* получение номера заказа
* лента всех заказов
* регистрация
* авторизация
* восстановление пароля
* новый пароль
* профиль пользователя
* история заказов пользователя
* просмотр деталей заказов (статус, ингредиенты, цена и т.д.)

### ***Функционал***
* На главной странице список всех ингредиентов
* Каждый ингредиент можно посмотреть подробнее, кликнув по нему
* Бургер собирается из ингридиентов с помощью перетаскивания
    - ингридиент-булка всегда занимает верхнее и нижнее положение, для замены достаточно перетащить новый ингридиент-булка
    - ингридидент-начинка всегда помещается между булок
    - ингридиент-начинку можно сортировать и удалить
    - при выборе ингридиента отражается количество выбранных штук
* Стоимость заказа пересчитывается в режиме реального времени
* Заказ может сделать только авторизованный пользователь
* API:
    - Данные всех ингредиентов подгружаются при монтировании компонента
    - Данные зарегистрированного пользователя подгружаются при монтировании компонента
    - Авторизованные пользователи могут изменять данные пользователя, оформлять и отправлять заказ
    - Неавторизованные пользователи могу видеть каталог ингредиентов, собирать бургер, регистрироваться, восстанавливать пароль
* Websocket:
    - подгружается список заказов всех пользователей с обновлением в режиме реального времени
    - для авторизованного пользователя подгружается список его заказов
    - просмотр деталей заказа (статус, номер, итоговая сумма, список ингредиентов)
* Ract: компоненты описаны в функциональном стиле, спользуются базовые и кастомные хуки
* Redux: в хранилище храняться данные всех ингредиентов, заказов, данные пользователя, а также состояние API запросов.
* Безопасность: токены хранятся в LocalStorage, cookies, пароль хранится в LocalStorage, при выходе из профиля - хранилище, cookies и LocalStorage очищаются
* TypeScript
* Тестирование:
    - reducers Redux покрыты тестами jest
    - cypress используется для тестирования конструктора бургера
* Организована файловая структура, используется нотация kebab-case, css подключиются и импортируются как модули
* Для перетаскивания элементов используется библиотека react-dnd
* Для навигации по типу ингридиентов используется библиотека react-intersection-observer

### ***Стэк:***
* CSS
* Flexbox
* Grid Layout
* HTML
* JavaScript
* TypeScript
* React
* Redux
* API
* WebSockets
* Jest, Cypress
* библиотекu:
    - UI-компонентов [Яндекс.Практикум.Реакт](https://github.com/yandex-praktikum/react-developer-burger-ui-components)
    - [react-dnd](https://www.npmjs.com/package/react-dnd)
    - [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)
    - [uuid](https://www.npmjs.com/package/uuid)


### Ссылки:
* :hamburger: [Ссылка на проект]()
* :pushpin: [Макет в Figma](https://www.figma.com/file/zFGN2O5xktHl9VmoOieq5E/React-_-Проектные-задачи_external_link?node-id=0%3A1&t=L1Qw4Ncywvdufa0e-0)
