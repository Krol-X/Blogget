# My Blogget App (reddit client)

[TOC]

## Scripts


- *npm start* – runs the app in the development mode, open [http://localhost:3000](http://localhost:3000)
- *npm test* – launches the test runner in the interactive watch mode
- *npm run build* – builds the app for production to the `build` folder
- *npm run eject* – ...

## TODO
- [x] Improve error capturing
- [x] Make base for context and hooks
- [x] Add Top posts reading

## Запуск проекта
1. Создайте файл "myconfig.js" с токеном к вашему аккаунту reddit
   (пример myconfig.template.js, токен можно получить здесь: https://www.reddit.com/prefs/apps)
2. Запустите в консоли `npm install` или `yarn install` для установки зависимостей
3. Затем введите `npm start` или `yarn start` чтобы запустить проект в режиме разработки

## Отличие от курса Methed
1. Работа с API и конфигурация в отдельной директории, а не хуках
2. Для сервисов, контекста и хуков используются фабрики
3. Добавлена обёртка для ошибок API сервера
