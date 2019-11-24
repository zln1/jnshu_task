$(function(){
    var audio = $('#audioTag').get(0);
    //播放暂停控制
    $('#playPause').click(function(){

        //监听音频播放时间并更新进度条
        // audio.addEventListener('timeupdate',updateProgress,false);
        //监听播放完成事件
        audio.addEventListener('ended',audioEnded,false);
        //改变暂停/播放icon
        if(audio.paused){
            audio.play();
            $('.icon-btn').removeClass('icon-play').addClass('icon-pause')
        } else{
            audio.pause();
            $('.icon-btn').removeClass('icon-pause').addClass('icon-play')
        }
    })


})

//播放完成
function audioEnded() {
    var audio =document.getElementsByTagName('audio')[0];
    $('.played-time').html(transTime(audio.currentTime));
    audio.currentTime=0;
    audio.pause();
    $('.play-pause>span').removeClass('icon-pause').addClass('icon-play');
}