/* var.js */
// 한줄 주석
// 변수와 함수
// 변수키워드 변수명 대입연산자 대입값;
// 함수생성키워드 함수명(){실행결과;}
let user_name = '홍길동';
let user_pw = '1234';
function func1(){ //생성과 준비
    console.log(user_name);
    console.log(user_pw);
}//함수 준비 끝 위치
func1() // 즉시실행 > 이벤트 실행 시에는 하단에 적지 않아도 됨
//목표) 원하는 영화명(토이스토리)을 검색하고 버튼을 누르면 영화명, 개봉일이 콘솔에 출력
// 데이터==변수
const movie_name = '토이스토리5';
const movie_date = '26.07.07';
// 반복 실행==함수
function movie1(){
    console.log(movie_name);
    console.log(movie_date);
}
// 목표) 노트북 검색하기 버튼을 클릭하면 삼성 노트북, 15인치 정보가 콘솔에 출력하기
// 변수, 함수명 참고 ) 노트북 모델명, 노트북 크기, 노트북 검색
const notebook_model = '삼성노트북';
const notebook_info = '15인치';
function notebook1(){
    console.log(notebook_model);
    console.log(notebook_info);
}
// 목표) 여행검색하기 클릭 시 여행지/가격/특산물 정보 콘솔 출력
const area_name = '속초';
let tv_price = '120,000원';
let specialty = '아바이순대';
function travel_info(){
    console.log(area_name)
    console.log(tv_price)
    console.log(specialty)
}