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

  # 요소 쌓임순서 **
  1) 요소에 position 속성의 값이 있는 경우(static제외)
  2) 1번 조건이 같은 경우, z-index이 높을 수록
  3) 1번 2번 같을 경우, html의 다음 구조일수록 위에 쌓임

  # 플렉스 컨테이너
  - flex를 사용하면 요소들을 수평정렬 할 수 있다.
  - display:flex의 값이 들어있는 부분이 Flex Container
  - Flex Container(부모) : block요소
    - display, flex-flow, flex-direction, flex-wrap, justify-content,align-content, align-items
      - flex-direction : 주 축을 설정
        - row(기본) : 수평(좌->우), row-reverse : 수평(우->좌)
      - flex-wrap : Flex item 묶음(줄 바꿈) 여부
        - nowrap(기본) : 줄바꿈 없음
        - wrap : 줄 바꿈 있음
      - justify-content : 주축(수평)의 정렬 방법
        - flex-start(기본) : 왼쪽 정렬
        - flex-end : 끝점 정렬
        - center : 가운데 정렬
      - align-content : 교차(수직)의 여러줄 정렬 방법
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


