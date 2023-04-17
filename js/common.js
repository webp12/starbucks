//document, searchEl : 요소
const searchEl = document.querySelector('.search');

//const searchInputEl = document.querySelector('.search input');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    //Logic
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    //Logic
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder' ,'통합검색');  //HTML(INPUT)의 속성(placeholder)을 지정
});

searchInputEl.addEventListener('blur', function(){
    //Logic
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder' ,'');  //HTML(INPUT)의 속성(placeholder)을 제거
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear; /* 값을 알아내거나 지정이 가능*/