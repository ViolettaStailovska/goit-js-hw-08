# parcel-project-template

## Общая информация и подсказки

### Важно помнить

1. Под каждую задачу создавать новую ветку.
2. После merge, слитая ветка удаляется.
3. Не работать в старых ветках! Если нужно что-то доделать, доделываете в новой
   ветке.
4. Коммитить и пушить на гитхаб каждый небольшой этап работы.
5. Не удалять чужие файлы или чужой код. Все изменения, которые вы делаете в
   своей ветке, при мердже попадут в основую. В том числе и удаление
   файлов/кода.

### Наименования секций по порядку

header hero benefits problems about-us syllabus our-team warranty reviews form
footer

### Точки перелома медиа запросов

Mobile { min-width: 319px; max-width: 726px; }

Tablet { min-width: 727px; max-width: 1354px; }

Desktop { min-width: 1355px; }

## Developing

### Prerequisites

На компьютере должен быть установлен [Node.js](https://nodejs.org/en/).

Для корректной работы SASS-компилятора и других инструментов, необходимо один
раз глобально поставить дополнительные пакеты, выполнив в терминале следующие
команды. Пользователям MacOS ничего делать не нужно.

Пользователям **Windows**, в режиме администратора.
[Как запусттить Powershell](https://youtu.be/p2tFnxcymwk) в режиме
администратора.

```shell
npm install --global --production windows-build-tools
```

Вот как выглядит процесс успешной установки для пользователей **Windows**.

![Установка windows-build-tools](https://user-images.githubusercontent.com/1426799/45007904-bde9f280-afb4-11e8-8a35-c77dffaffa2a.gif)

Пользователям **Linux**.

```shell
sudo apt-get install gcc g++ make
```

### Setting up Dev

Один раз на проект установить все зависимости.

```shell
npm install
```

И запустить режим разработки.

```shell
npm run dev
```

Во вкладке браузера перейти по адресу
[http://localhost:1234](http://localhost:1234).

### Building

Для того чтобы создать оптимизированные файлы для хостинга, необходимо выполнить
следующую команду. В корне проекта появится папка `build` со всеми
оптимизированными ресурсами.

```shell
npm run build
```

### Deploying / Publishing

Сборка может автоматически деплоить билд на GitHub Pages удаленного (remote)
репозитория. Для этого необходимо в файле `package.json` отредактировать поле
`homepage`, заменив имя пользователя и репозитория на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

Также необходимо отредактировать скрипт "predeploy".

```json
"predeploy": "npm run build -- --public-url /имя_репозитория/"
```

После чего в терминале выполнить следующую команду.

```shell
npm run deploy
```

Если нет ошибок в коде и свойство `homepage` указано верно, запустится сборка
проекта в продакшен, после чего содержимое папки `build` будет помещено в ветку
`gh-pages` на удаленном (remote) репозитории. Через какое-то время живую
страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`.

## Configuration

- Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться в
  `src/sass/main.scss`
- Изображения добавляйте в папку `src/images`, заранее оптимизировав их. Сборщик
  просто копирует используемые изображения чтобы не нагружать вашу систему
  оптимизацией десятков картинок, так как на слабых компьютерах это повесит
  систему.
