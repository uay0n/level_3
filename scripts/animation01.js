// animation.js
// item1에 마우스를 올리면 img태그 경로가 다른 이미지로 변경
// 변수
const item1 = document.querySelector('.item')
const item1Img = document.querySelector('.item img')
const item1Sale =  document.querySelector('.sale')
const item1SaleImg = document.querySelector('.sale img')

// 변수테스트
console.log(item1, item1Img);
console.log(item1Sale, item1SaleImg);

// 이벤트
item1.addEventListener('mouseover',item1ImgSrs);
item1.addEventListener('mouseout',item1ImgRe);
item1Sale.addEventListener('mouseover',item1SaleImgSrc);
item1Sale.addEventListener('mouseout',item1SaleImgRe);

// 함수
function item1ImgSrs() {
    item1Img.src  = 'https://prs.ohousecdn.com/apne2/any/uploads/productions/v1-515091305074816.png?w=640&h=640&c=c';
}
function item1ImgRe() {
    item1Img.src  = 'https://prs.ohousecdn.com/apne2/any/uploads/commerce/store/deal/v1-484698853605376.png?w=640&h=640&c=c';
}
function item1SaleImgSrc() {
    item1SaleImg.src  = 'https://prs.ohousecdn.com/apne2/any/uploads/productions/images/v1-490781980803072.png?w=640&h=640&c=c';
}
function item1SaleImgRe() {
    item1SaleImg.src  = 'https://prs.ohousecdn.com/apne2/any/uploads/productions/v1-490780418003072.jpg?w=640&h=640&c=c';
}
