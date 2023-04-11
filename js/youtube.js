//유튜브 IFrame Player API 
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api"; /* 유튜브 제어하는 JS */
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {/* 유튜브 제어 JS가 호출하는 함수로, 이 함수명을 그대로 사용해야한다  */
  new YT.Player('player', {/* html의 'player'라는 id라는 요소를 찾는다 */
    // height: '360', 영상의 크기
    // width: '640',
    videoId: 'An6LvWQuj_8', /* 최초재생할 유튜브영상 ID */
    playerVars:{
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8' /* 연속재생할 영상ID */
    },
    events: {
       onReady: function(event){
         event.target.mute() //준비된 영상을 음소거 
       }
     }
  });
}