# Многопользовательское приложение "Бургерная на краю Вселенной" - проектная работа на курсе React-разработчик Яндекс.Практикум

### ***Модуль 2 спринт 2***


### ***Функционал***
* Выполнена верстка:
    - главной страницы приложения, в Desctop версии (1280px - 1080px) 
    - Модальное окно "Ingredient" - открывается при клике на карточку ингридиента и показывает состав
    - Модальное окно "OrderDetail" - открывается при клике на кнопку "Оформить заказ"
    - Два независимых scroll-bar под ингредиенты и заказ
* Бургер собирается из ингридиентов с помощью перетаскивания
    - ингридиент-булка всегда занимает верхнее и нижнее положение, для замены достаточно перетащить новый ингридиент-булка
    - ингридидент-начинка всегда помещается между булок
    - ингридиент-начинку можно перетаскивать и удалить
    - при выборе ингридиента отражается количество выбранных штук
* Стоимость заказа пересчитывается в режиме реального времени
* API:
    - Данные ингредиентов подгружаются при монтировании компонента
    - Собранный заказ можно отправить и получить номер заказа
* Организована файловая структура, используется нотация kebab-case
* Компоненты описаны в функциональном стиле
* Используются:
    - хуки: useState, useEffect, useRef, useCellback, useMemo
    - фукнции и методы: createPortal, forwardRef
    - проверка propTypes
* Используется Redux:
    - создано хранилище
    - созданы actions, reducers
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
* библиотекu:
    - UI-компонентов [Яндекс.Практикум.Реакт](https://github.com/yandex-praktikum/react-developer-burger-ui-components)
    - [react-dnd](https://www.npmjs.com/package/react-dnd)
    - [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)
    - [uuid](https://www.npmjs.com/package/uuid)
 

### Ссылки:
* :pushpin: [Макет в Figma](https://www.figma.com/file/zFGN2O5xktHl9VmoOieq5E/React-_-Проектные-задачи_external_link?node-id=0%3A1&t=L1Qw4Ncywvdufa0e-0)
