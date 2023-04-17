/* 스크롤할 때 배지 Hidden/Show 시작 */
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

//window : 브라우져의 탭(창, 화면)
//_.throttle(함수, 시간) : from lodash js library (scroll 이벤트를 처리할 때 사용됨)
//                        300: 0.3sec의미 0.3초단위로 부하를 줘서 함수가 많이 발생하는 것을 방지하기위함
//gsap : animation js library 
window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY); 
    if( window.scrollY > 500 ){
        //배지 요소 숨기기
        //badgeEl.style.display = 'none';
        //gsap.to(요소, 지속시간:초단위, 옵션:객체형태)
        gsap.to(badgeEl, .6, { /* 애니메이션 */
            opacity : 0, /* 눈에서만 안 보이지 클릭이 가능한 상태임 */
            display : 'none' /* 눈에 안보이게 되면 클릭도 안 되도록 처리 'none'은 javascript이므로 Single quotation처리함 */
        });

        //버튼 보이기
        //gsap은 적용할 요소를 직접 사용해도 되고
        //css선택자를 사용해도 된다
        //gsap.to('#to-top', .2, {
        gsap.to(toTopEl, .2, {            
            // y:   /* y축으로 얼만큼 이동할 것인가*/
            x: 0
        })
    } else {
        //배지 요소 보이기
        //badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block'
        });
        
        //버튼 숨기기
        //gsap은 적용할 요소를 직접 사용해도 되고
        //css선택자를 사용해도 된다
        // gsap.to('#to-top', .2, {
        gsap.to(toTopEl, .2, {            
            // y:   /* y축으로 얼만큼 이동할 것인가*/
            x: 100
        })
    }
}), 300);
// _.throttle(함수, 시간)
/* 스크롤할 때 배지 Hidden/Show 종료 */

/* 화살표를 클릭했을 때 위로 이동  */
toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0 /* 화면의 위치를 0px로 위치 , ScrollToPlugin을 이용함 */
    });  //window 우리가 보고 있는 화면을 의미, 즉 브라우져
});
 

/* Visual 부분에 있는 이미지를 순서대로 나타나는 애니메이션 설정 시작*/
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
    //gsap.to(요소, 지속시간:초단위, 옵션:객체형태)
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, /* 요소 별로 0.7, 1.4, 2.1, 2.7 초 뒤에 실행된다 */
        opacity: 1
    });
});
/* Visual 부분에 있는 이미지를 순서대로 나타나는 애니메이션 설정 종료 */


/* 공지사항 swiper 애니메이션 
 * Swiper(선택자, 옵션)
 */
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
});

/* 프로모션 swiper 애니메이션 
 * Swiper(선택자, 옵션)
 */
new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal',  기본값 : horizontal
    slidesPerView : 3,  //한번에 보여줄 슬라이드 갯수
    spaceBetween: 10,   //슬라이드 사이 여백
    centeredSlides: true,  //1번 슬라이드가 가운데 보이기
    loop: true,
    // autoplay: {
    //     delay: 5000 // 5초에 한 번씩 슬라이드가 동작됨
    // },
    pagination: {
        el: '.promotion .swiper-pagination', /* 페이지번호 요소 선택자*/
        clickable: true //사용자의 페이지 번호 요소 제어가능 여부
    },
    navigation:{
        prevEl: '.promotion .swiper-prev', /* 이전 슬라이드 보는 버튼 */
        nextEl: '.promotion .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        //숨김 처리! 
        //hide class를 추가 후에 추가된 class는 cs에서 제어한다
        promotionEl.classList.add('hide');
    }
    else{
        //보임 처리!
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){ /* size  위아래로 움직이는 범위 */
    //gsap.to(); 요소, 지속시간(sec), 옵션
    //gsap easing 사이트 참고하면 다이나믹한 애니메이션 처리가 가능함
    //type을 easeInOut으로 선택하면 더 다이나믹한 애니메이션 확인가능
    gsap.to(
        selector, //선택자
        random(1.5, 2.5),  //애니메이션 동작 시간
        { //옵션
        y: size,       /*위에서 아래로 내려오는 움직임의 범위(px) */
        repeat: -1 ,   /*무한반복*/
        yoyo: true,    /* 한번 재생된 애니메이션을 다시 뒤로 재생시킴 */
        ease: Power1.easeInOut,
        delay: random(0, delay) /* 몇 초 뒤에 애니메이션 실행 */
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);
