import Player from '@vimeo/player'; 
import { throttle } from 'lodash';

const player = new Player('vimeo-player');
player.on('timeupdate', throttle(() => { 
    const currentTime = Math.floor(player.currentTime()); 
    localStorage.setItem('videoplayer-current-time', currentTime); 
}, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time'); 
if (currentTime) { 
    player.setCurrentTime(currentTime); 
}