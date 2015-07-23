function resizingWindow() {
    //alert("hello");
    var frameheight = document.getElementById("scalew").clientHeight;
    var framewidth = document.getElementById("scaleh").clientWidth;
    document.getElementById("frame").style.height = frameheight;
    document.getElementById("frame").style.width = framewidth;
    document.getElementById("frame").style.marginTop = frameheight/-2;
    document.getElementById("frame").style.marginLeft = framewidth/-2;
};

function mute() {
    player.mute();
    document.getElementById("mutebutton").onclick = unMute;
    document.getElementById("mutebutton").src = 'images/sound-off.png';

}

function unMute() {
    player.unMute();
    document.getElementById("mutebutton").onclick = mute;
    document.getElementById("mutebutton").src = 'images/sound-on.png';
}

function pausePromo() {
    document.getElementById("videocover").onclick = playPromo;
    document.getElementById("videocover").style.opacity = "1";
    document.getElementById("pausebutton").onclick = playPromo;
    document.getElementById("pausebutton").src = 'images/play.png';
    player.pauseVideo();
}

function playPromo() {
    player.playVideo();
    document.getElementById("videocover").onclick = pausePromo;
    setTimeout(function(){
            document.getElementById("videocover").style.opacity = "0";
            document.getElementById("videohider").style.display = 'none';
            document.getElementById("pausebutton").onclick = pausePromo;
            document.getElementById("pausebutton").src = 'images/pause.png';
        },150
    );
}

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '720',
        width: '1280',
        videoId: 'syjwpslSZAo',//short = 14Gh0UlF4wc // Promo = syjwpslSZAo
        playerVars: {
        controls: 0,
        autohide: 1,
        autoplay: 1,
        showinfo: 0,
        rel: 0

    },
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    //event.target.pauseVideo();
}		

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(player.pauseVideo(), 10);
    done = true;
    }
    if (event.data == YT.PlayerState.ENDED){
        //player.playVideo();
        document.getElementById("videocover").style.opacity = "1";
        document.getElementById("videohider").style.display = "block";
    }
}
function stopVideo() {
    //player.stopVideo();
}