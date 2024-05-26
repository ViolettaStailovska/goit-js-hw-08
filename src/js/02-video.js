import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const CURRENT_TIME = "videoplayer-current-time";
const throttle = require('lodash.throttle');


// Функция для обновления текущего времени воспроизведения в localStorage
const onActivePlayer = event => localStorage.setItem(CURRENT_TIME, event.seconds);

// Добавление обработчика события timeupdate
player.on('timeupdate', throttle(onActivePlayer, 1000));

// Установка текущего времени воспроизведения при загрузке страницы
player.setCurrentTime(localStorage.getItem(CURRENT_TIME));

