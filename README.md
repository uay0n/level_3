a# 자바스크립트&제이쿼리
## 프로젝트 제작 시 항상 준비해야하는 파일, 폴더 순서
1. 프로젝트 폴더명 영문으로 의미있게 작성하기
2. `index.html`, `README.md` 생성
3. `styles`, `scripts`, `images` 폴더 생성
4. `styles/reset.css`, `styles/index.css` 생성
5. `scripts/index.js` 생성
## 자바스크립트
### 객체, 속성, 이벤트, 함수
* 객체 : 웹앱에서 사용하는 실제대상(버튼, 링크, 이미지 등) 보통 변수로 데이터(객체)를 저장해서 사용
* 이벤트 : 웹앱을 이용하는 사용자의 행동(클릭, 터치, 드래그 등)
    * `<button onclick="클릭 시 실행되는 함수">`
* 함수 : 2번 이상 반복되는 실행내용
    * 함수 생성과 호출을 각각 다르게 구분함
    * 함수 생성 : `function 함수명(){함수 호출 시 반복실행할내용;}` 생성만으론 절대 결과가 실행되지 않음 반드시 호출 별도로 진행해야함!
    * 함수 호출 : 위 함수생성 바깥쪽에 `함수명()` 작성, 이벤트와 함께 사용하기도 함. `onclick="함수명();"`
### 변수(데이터(객체)를 저장하는 저장소)
* 변수키워드 변수명 대입연산자 대입값
* `let users_name = '홍길동';`
<!-- user_name이란 변수를 생성해서/'홍길동'이란 데이터를 대입한다. -->
1. `var` 오래된 선언방식, 이름 중복 가능
2. `let` 이름 중복 불가능, 재사용(수정) 가능
3. `const` 이름 중복 불가능, 재사용(수정) 불가
### 객체, 속성, 함수 작성 문법
* 태그 예) `<a href="./index.html></a>"`
* 태그 예) `<video src="./cat.mp4" autoplay>`
* `객체.속성;`
    * 객체의 속성 읽기
    * `a.href:`
    * `video.src;`, `video.autoplay;`
    * `span.textContent;` //span태그 안 내용을 읽는다 <span>내용</span>
    * `input.value;` //value는 input 전용속성으로 다른 태그에 사용불가
* `객체.속성 = '값';`
    * 객체의 속성 값을 대입한다
    * 대입 시 기존값이 있으면? 기존값 자동제거되고 새로운값 대입
    * `a.href = './reset.css';`
    * `video.src = './dog.mp4';`
    * `video.autopaly = '0';`
    * `<span>0</span>` //span의 내용 0을 > 1로 변경
        `span.textContent = 1;` // 원래 내용을 제거하고 0을 1로 변경
        `span.textContent = span.textContent+1;` // 0+1=1
    * `<input type="text value="1">` //input의 내용 1-> 2로 변경
        `text.value = 2;` //원래 내용을 제거하고 2로 변경
        `text.value = input.value +2;` // 1+2=3
* `객체.함수();`
    * 객체를 실행한다
    * `객체.함수() = '값';` (x)
* `이벤트="함수();"`
    * 이벤트 동작 시 특정 함수를 실행한다.
    * `<태그 onclick="func1();">`
    * 위 작성 전 준비사항 : `function func1(){반복실행명령}` //함수생성
## DOM(document object model)
### JS에서 제어하고 싶은 HTML요소가 있을 경우 순서
1. 제어하고 싶은 html 수와 클래스,id 등 확인
2. 용도에 맞게 변수명 생성 'const 변수명'
3. 2번 변수에 대입연산자로 객체 대입하기
    * `document.querySelector('html대상');`
    * `const 변수명=document.querySelector('대상')`
4. 안전한 작업을 위해 콘솔로 변수 체크하기
    * `console.log (검사하고싶은변수명);`
    * 콘솔 결과 화면에서 `null` 또는 오류가 없는지 확인
    * `null`이 뜬다면 HTML script 작성위치로 가서 defer 속성추가
        * `<script src='경로' defer></scripr>`
## 실제 요소 크기와 관계없는 다양한 포인트 만드는 방법
### CSS의 가상선택자(실제 태그 없이 가상의 요소를 만든)
### after, before
* `선택자::after`
* `선택자::before`
* 가상선택자의 필수속성 : `content`, `display`, `width`, `height`, `position`
### 작성예시
`선택자::after {
    `content:''; display:block;`
    `width:가로크기px; height:세로크기px;`
    `position:absolute; left right top bottom 등의 위치좌표 추가작성`
}
* after, before가 적용된 부모 선택자에 'position:relative' 기준잡기
# form 태그
* 입력 양식을 전체적으로 감싸는 틀 > 데이터를 서버로 전송할 때 쓰임
    * form : 검색, 로그인, 회원가입 등의 특정 주체로 묶여있는 그룹
    * action : 그룹에 작성 또는 선택된 사용자 정보를 전달하는 서버 주소
    * methof : 데이터를 보내는 전송 방식 (get, post)
## form 태그와 action, method
* 입력받은 데이터를 처리할 url 주소/ 데이터를 서버로 전송하는 지정 속성
## input 태그와 type
* 입력창 / 타입은 비밀번호, 텍스트, 주소, 이메일 등 각 타입에 맞춰 입력창을 구분하는 것
## name 속성
* 서버에서 데이터를 인식할 때 쓰는 구분명
    * action으로 저장된 사이트서버 위치에 사용자가 입력한 데이터를 전송할 때 구분하는 데이터 명칭
    * 이름 tom, 아이디 tom 값만 보고 구분을 정화히 못하는 경우 name 필수
    * userName > tom, userId > tom `name="userName"`
    * 선택양식에서는 name 의미를 그룹명으로 사용, 위 작성 내용은 입력 양식 해당
## value 속성
* 입력창에 처음부터 내용이 채워져있는 속성값
    * 입력양식 : 처음부터 입력된 초기값(쇼핑몰의 수량 1)
    * 선택양식 : 위 name처럼 데이터 구분명칭
## id, class 속성
* id > 공용으로 쓰지 않는 그 태그를 나타내는 이름
* class > 공용으로 쓰이며 띄어쓰기로 본인 태그만의 이름 엑티브 같은 활성화도 나타냄