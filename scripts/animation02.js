//애니메이션-2.js
// 1. 서브메뉴 초기 숨기기
// 2. 메인메뉴를 클릭(터치)하면 서브메뉴 보이기
// 변수
const mainMenu = document.querySelector('.gnb>ul>li:nth-child(2)')
const subMenu = document.querySelector('.gnb .sub')
console.log (mainMenu,subMenu);

// 1.서브메뉴 초기 숨기기
subMenu.style.display = 'none';

// 2. 메인메뉴를 클릭(터치)하면
mainMenu.addEventListener('click',subShow)
function subShow(){
    subMenu.style.display = 'flex';
}
