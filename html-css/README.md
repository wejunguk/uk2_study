# 브라우저 CSS스타일 초기화 cdn 주소
- reset.css cdn 검색 JSDELIVR사이트 방문
- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">

# HTML 핵심 요소 정리
- <lable><input type="checkbox" />Apple</lable>
- <lable><input type="radio" name="fruits" />Apple</lable>
- <lable><input type="radio" name="fruits" />Banana</lable>

# HTML 전역속성
- title : 요소의 정보나 설명을 지정, body안에 모두 사용 가능
- data-이름="데이터" : 요소에 데이터를 지정
- style, class, id

# 선택자 복합
- ABC + XYZ : 선택자 ABC의 다음 형제 요소 XYZ중 하나를 선택
  - .orange + li : .orange의 다음 li하나 선택
- ABC ~ XYZ : 선택자 ABC의 다음 형제 요소 XYZ중 모두를 선택
  - .orange ~ li : .orange의 다음 li 모두 선택

# 선택자 가상 클래스
- ABC:hover : 선택자 ABC요소에 마우스커서가 올라가 있는 동안 선택
- ABC:active : 선택자 ABC요소에 마우스를 클릭하고 있는 동안 선택
- ABC:focus : 선택자 ABC요소가 포커스되면 선택
  - 포커스가 가능한 요소에서만 작동(데이터가 들어가는 영역)
    - 단, 포커스가 가능하지 않은 요소에 속성추가하면 사용 가능(tabindex="-1")
- ABC:first-child, ABC:last-child, ABC:nth-child(n)
- ABC:not(XYZ) : 선택자 XYZ가 아닌 ABC요소 선택

# 가상 요소 선택자
- before, after 인라인 요소, 문자 외 삽입시 inline-block로 삽입
- ABC::before : 선택자 ABC요소의 내부 앞에 content 삽입
  - .box::before{content:"추가"}
- ABC::after : 선택자 ABC요소의 내부 뒤에 content 삽입
  - .box::afger{content:"뒤에!"}

# 속성 선택자
  - [ABC] : 속성 ABC을 포함한 요소 선택
    - [disabled] : 비활성화된 속성만 변경

# css 속성
  - box-sizing : 요소의 크기 계산 기준 지정, content-box(기본속성), border-box
  - overflow : 요소의 크기 이상의 내용이 넘칠때 보여짐을 제어
    - visible(기본) : 넘친 내용 그대로 보여줌
    - hidden : 넘친 내용 잘라냄
    - scroll : 넘친 내용 스크롤바 생성
    - auto : 넘친 내용 있는 경우에만 스크롤바 생성
  - text-indent : 들여쓰기
  - position의 absolute, fixed는 display block 속성을 가짐

# Selector 상태 속성
  - hover: 마우스 커서가 엘리먼트에 올라왔을 때
  - active: 엘리먼트가 클릭 됐을 때, a
  - focus: 엘리먼트가 커서를 가지고 있을 때, input
  - checked: input태그가 체크 되었을 때, radio, checkbox
  - first-child, last-child: 첫번째 마지막 엘리먼트 

# 요소 쌓임순서 **
  1) 요소에 position 속성의 값이 있는 경우(static제외)
  2) 1번 조건이 같은 경우, z-index이 높을 수록
  3) 1번 2번 같을 경우, html의 다음 구조일수록 위에 쌓임

# visibility 속성
  - 엘리먼트 화면 출력 여부
  - visible | hidden
    - visibility:visible; : 엘리먼트 화면에 보여줌
    - visibility:hidden; : 엘리먼트 화면에 안보임, 화면영역은 차지함

# display 속성
  - none | block | inline | flex

# Flex 컨테이너
  - flex container에 여러개 flex item 존재
  - display: flex;
    flex-direction: row | column | row-reverse | column-reverse
    align-item: stretch | flex-start | center | flex-end | baseline
    justify-content: flex-start | center | flex-end | space-between | space-around
  - flex-direction: 플렉스 아이템 배치 방향 row:가로 column:세로
    - flex-direction이 row인 경우: main axis:가로축 cross axis:세로축
    - flex-direction이 columnw인 경우: main axis:세로축 cross axis:가로축
  - align-item: 컨테이너 내에서 아이템을 어떻게 정렬할지
    - stretch: 기본값, 아이템 늘려서 컨테이너 가득 채움
    - flex-start: cross axis의 시작지점으로 아이템 정렬
    - center: cross axis의 중앙으로 아이템 정렬
    - flex-end: cross axis의 끝지점으로 아이템 정렬
    - baseline: 아이템을 baseline로 정렬
  - justify-content: 컨테이너 내에서 아이템을 어떻게 나란히 맞출것인지
    - flex-start: main axis의 시작 지점으로 아이템 맞춤
    - center: main axis의 중앙으로 아이템 맞춤
    - flex-end: main axis의 끝 지점으로 아이템 맞춤
    - space-between: main axis를 기준으로 첫 아이템은 시작지점에 맞추고 마지막 아이템은 끝 지점에 맞추며 중간에 있는 아이템들 사이의 간격이 일정
    - space-around: main axis를 기준으로 각 아이템 주변 간격을 동일하게 맞춤


  - flex를 사용하면 요소들을 수평정렬 할 수 있다.
  - display:flex의 값이 들어있는 부분이 Flex Container
  - Flex Container(부모) : block요소
    - display, flex-flow, flex-direction, flex-wrap, justify-content,align-content, align-items
      - flex-direction : 주 축을 설정
        - row(기본) : 수평(좌->우), row-reverse : 수평(우->좌)
      - flex-wrap : Flex item 묶음(줄 바꿈) 여부
        - nowrap(기본) : 줄바꿈 없음
        - wrap : 줄 바꿈 있음
      - justify-content : 수평의 정렬 방법
        - flex-start(기본) : 왼쪽 정렬
        - flex-end : 끝점 정렬(오른쪽 정렬)
        - center : 가운데 정렬
      - align-content : 수직의 여러줄 정렬 방법
        - stretch(기본) : 시작점으로 정렬
        - flex-start : 시작점으로 정렬
        - flex-end : 끝점으로 정렬
        - center : 가운데 정렬
      - align-items : 교차 축의 한줄 정렬 방법
        - stretch(기본) : Flex item을 교차 축으로 늘림
        - flex-start : Flex item을 각 줄의 시작점으로 정렬
        - flex-end : Flex item을 각 줄의 끝점으로 정렬
        - center : Flex item을 각 줄의 가운데 정렬
  - Flex Item(자식)
    - order, flex, flex-grow, flex-shrink, flex-basis, align-self
      - order : Flex Item 순서
        - 0(기본) : 순서없음
        - 숫자 : 숫자가 작을수록 먼저
      - flex-grow : 증가 너비 비율
        - 0(기본) : 증가비율 없음
        - 숫자 : 증가 비율
      - flex-shrink : 감소 너비 비율
        - 1(기본) : Flex Container 너비에 따라 감소비율 적용
        - 숫자 : 감소 비율
      - flex-basis : 공간 배분 전 기본 너비
        - auto(기본) : 내용 너비
        - 단위 
* 1) display:flex 선언
  2) justify-content 수평정렬 선언
  3) align-items 수직정렬 선언
* 기본 너비 없이 비율을 1::2로 선언
  - flex-grow:1; flex-basis:0;
  - flex-grow:2; flex-basis:0;

# 전환
- transition: 속성명 지속시간(필수) 타이밍함수 대기시간;
  - transition-property : 전환 효과 사용할 속성 이름 지정
    - all(기본)
    - 속성명
  - transition-timing-function : 전환 효과의 타이밍 함수를 지정
    - ease, linear, ease-in, ease-out, ease-in-out
  - easing functions : https://easings.net/ko
  - mdn : https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function
  - tweenmax easing : easing사용하는 참고 사이트 https://greensock.com/docs/v2/Easing
  - transition-delay : 전환효과 대기시간 지정

# 변환 (transform)
  - 2D 변환 함수
    - translate(x,y) : 이동(x축,y축)
    - translateX(x) : 이동(x축)
    - translateY(y) : 이동(y축)
    - scale(x,y) : 크기(x축,y축)
    - rotate(degree) : 회전(각도)
    - skewX(x) : 기울임(x축)
    - skewY(y) : 기울임(y축) 
  - 3D 변환 함수
    - perspective(n) : 원근법(거리)
    - rotateX(x) : 회원(x축)
    - rotateY(y) : 회전(y축)
  - backface-visibility : 3D 변환으로 회전된 요소의 뒷면 숨김 여부
    - visible(기본) : 뒷면 보임
    - hidden : 뒷면 숨김
* 원근거리 만들기
  1) 자식에 모든 조건을 부여함
    - transform: perspective(300px) rorateY(45deg);
  2) 부모에 원근속성을 부여하고 자식에 각도를 부여함
    - 부모: perspective(300px);
    - 자식 : transform: rotateY(45deg);

# 파비콘(Favicon)
- 웹페이지를 나타내는 아이콘
- 루트경로에 favicon.ico 파일을 위치하면 자동 로딩 사용됨
- favicon.png 파일을 사용하려면 link로 작성
  - <link rel="icon" href="./favicon.png" />
- .ico 파일 제작
  - .ico : 64x64 or 32x32
  - .png : 500px x 500px
  - https://iconifier.net/

# 오픈 그래프(The Open Graph protocal)
- 웹페이지가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보를 지정
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
  - og:type: 페이지의 유형(E.g, website, video.movie)
  - og:site_name: 속한 사이트의 이름
  - og:title: 페이지의 이름(제목)
  - og:description: 페이지의 간단한 설명
  - og:image: 페이지의 대표 이미지 주소(URL)
  - og:url: 페이지 주소(URL)

# 트위터 카드(Twitter Cards)
- 웹페이지가 트위터로 공유될 때 우선적으로 활용되는 정보 지정
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://starbucks.co.kr" />

  - twitter:card: 페이지(카드)의 유형(E.g. summary, player)
  - twitter:site: 속한 사이트의 이름
  - twitter:title: 페이지의 이름(제목)
  - twitter:description: 페이지의 간단한 설명
  - twitter:image: 페이지의 대표 이미지 주소(URL)
  - twitter:url: 페이지 주소(URL)

# Google Material Icons
구글에서 제공하는 머터리얼 아이콘을 무료로 사용할 수 있습니다.
Getting started for web
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

다음과 같이 사용할 수 있습니다.
<div class="material-icons">upload</div>

# GSAP & ScrollToPlugin
- GSAP은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리
- ScrollToPlugin은 스크롤 애니메이션을 지원하는 GSAP 플러그인
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>

.to() 사용법 GSAP Easing

gsap.to(요소, 시간, 옵션)
// 또는
TweenMax.to(요소, 시간, 옵션)

gsap.to(window, .7, {
  scrollTo: 0
});

# Swiper API
  new Swiper(요소, 옵션);

  new Swiper('.swiper-container', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
  });
  - direction: 이미지 정렬 방향
  - loop: 반복여부 true
  - autoplay: 자동 변환 true, 시간 설정 가능 
  - slidePerView: 한번에 보여줄 슬라이드 개수
  - spaceBetween: 슬라이드 사이 여백
  - centeredSlides: 1번 슬라이드 가운데 보이기 ture
  - pagination
    - el: : 페이지 번호 요소 선택자
    - clickable: 사용자의 페이지 번호 선택 가능 여부
  - navigation

  # youtube API
    - 유튜브 영상이 출력될 위치에 요소를 지정
    <!-- in HEAD -->
    <script defer src="./js/youtube.js"></script>

    <!-- in BODY -->
    <div id="player"></div>