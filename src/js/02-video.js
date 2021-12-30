const throttle = require("lodash.throttle");

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('play', function() {
    console.log('played the video!');
});

const saveLocalTime = function locTime(e) {

localStorage.setItem('videoplayer-current-time', e.seconds);
    console.log(e.seconds)

    
};
player.on('timeupdate', throttle(saveLocalTime, 2000))

let curTime = localStorage.getItem('videoplayer-current-time');
startValueTime();
player.setCurrentTime(curTime).then(function (event) {
    localStorage.setItem('videoplayer-current-time', curTime);
});

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
});

function startValueTime() {
    localStorage.setItem('videoplayer-current-time', 0);
}


