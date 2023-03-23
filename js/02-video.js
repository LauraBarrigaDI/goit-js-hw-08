import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
  player.setCurrentTime(storedTime);
}

player.on('timeupdate', throttle(() => {
  localStorage.setItem('videoplayer-current-time', player.getCurrentTime());
}, 1000));
