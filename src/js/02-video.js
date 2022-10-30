import "lodash.throttle"
import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const KEY_STORAGE_TIME = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// console.log(player)
// console.log(iframe)

const onPlay = function(e) {
    localStorage.setItem(KEY_STORAGE_TIME, e.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(KEY_STORAGE_TIME)));