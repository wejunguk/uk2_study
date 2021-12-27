# uk2_study_ 개념과 궁금한 것들!

## 톰캣과 아파치
 - Tomcat : tomcat 다운시 여러폴더들과 파일이 들어있는 하나의 폴더가 생성됨
            스프링 코딩 -> war 파일 빌드하면 .class/jsp/img/css/js 으로 압축된다
            특정 폴더에 war파일 넣고 실행하면 스프링서비스가 톰캣을 사용해서 돌게 됨!

- 아파치 : 클라이언트의 요청을 정적으로 처리하는 웹

## web서버 와 was서버
 * 서버 => 컴퓨터
 html,css,java,DB등의 정보를 디렉토리에 저장 -> 서버에 저장-> 주소접속하면 소스 볼 수 있음
 - web : 정적인 자료를 처리 / 그 안의 파일들이 바뀌지 않는 화면 ex) 편의점에 진열된 물건
        클라이언트 요청시, 서버에 저장된 정적인 파일들을 모두 보냄 -> 리소스 많이 차지한다
        -> 이 점을 보완하기 위해 동적 웹으로 파일을 처리
        ex) 아파치, Nginx 등
 - was(web application server) : 동적인 자료를 처리 / 항상 같은 글이 뜨지 않는 사이트, 게시판 웹 ex) 주문에 맞춰서 요리해주는 식당 음식
         ex) 톰캣 등

 * 클라이언트 요청 -> 웹서버에서 정적date처리 --전달--> 웹컨테이너(jsp,servlet구동환경제공)에서 동적date처리
   결과값 받아 클라이언트 전송 <--전달---  동적인 데이터 가공해 정적인 데이터 만들어줌(웹컨테이너가)  

 * 사용자 요청을 http웹서버로 받고 내부 프로그램은 was로 처리할까? 굳이? 왜?
   1) 손님들에게 서버의 정보를 감추기 위해서, 파일이 어느 폴더에 있는지, 서비스가 몇번 포트로 돌고 있는지 감춤 => 리버스 프록시
    ex) 요리를 만드는 곳이 아닌, 정적 리소스들의 방위치가 아닌 응접실에서 손님들에게 음식을 제공   
   2) 톰캣이 여러개 돌고 있을 때 발런스 맞춰줌, 다른 war들도 마찬가지 => 로드밸런싱
    ex) 손님이 너무 몰려있을 때 손님들을 분산해서 배치해줌

 * 서버 한대 -> 하나의 사이트 돌릴 때 여러개 톰캣을 두는 이유?
   1) 새기능 추가, 동적부분 업데이트 필요 시 끊김없이 서비스를 사용자에게 제공해주기 위해서 => 지속성
   2) 성능측면
   3) 한번 꺼내온 것을 가까운 곳에 모아두고 다음에 꺼낼때 빠르게 꺼내오기 위해 => 캐싱

## forward proxy 와 reverse proxy
 - forward proxy : 클라이언트 요청 ---> forward proxy ----> 인터넷 ---> 내부서버
   : 클라이언트가 인터넷에 직접 연결하는게 아니라 프록시서버가 요청을 받아 결과를 클라이언트에게 전달
    프록시 서버는 캐시를 이용해 자주 사용하는 데이터를 요청하지 않고 캐시에서 가지고 올 수 있으므로 성능향상에 좋음
 - reverse proxy : 클라이언트 요청 ---> 인터넷 ----> reverse poroxy ----> 내부서버
   : 클라이언트가 인터넷에 데이터 요청하면 리버스프록시가 이 요청을 받아 내부 서버에서 데이터를 받은 후
   클라이언트에게 전달
   내부서버(was)에 직접적으로 접근하면 DB접근 가능 -> 중간에 리버스 프록시두고 통신
   내부 서버에 대한 설정으로 로드밸런싱이나 서버 확장 등에 유리

## 트랜잭션
 - 하나의 작업을 수행하기 위해서 모든 데이터베이스 연산을 모아둔 것
   데이터베이스 변환시기는 하나의 논리적기능을 수행하기 위한 작업단위
   장애 발생 시 모든 작업을 원상태로 돌린다!
 - 트랜잭션 연산이 모두 완료되어야만, 실제 데이터베이스에 반영된다.
 - commit : 모두 완료되면 한번에 DB에 반영
 - rollback :  트랜잭션 수행 실패선언 -> rollback연산실행 -> 트랜잭션 수행 전으로 되돌아감
 - savepoint : 모든 연산 취소하지 않고 특정부분으로 되돌리고 싶을때 사용

## MVC패턴
 - 프로젝트를 구성할 때 구성요소를 세가지로 구분
   사용자가 보는 페이지, 데이터처리, 이 2가지를 연결하는 컨트롤러
   각각 맡은 역활에 집중할 수 있고 유지보수가 쉽다.
 - 모델 : 데이터 관련된 것 들, DB 형식, 저장, 수정 등의 코드들 여기서 이뤄짐
 - 뷰 : 눈에 보이는 html,css코드들이 있음
        이 소스들을 사용자들이 시작적으로 볼 수 있게 해주는 코드들 작성
 - 컨트롤러 : model DB와 view연결
              사용자가 구현된 DB를 읽고 쓰고 지울 수 있게 제어하는 부분

## 프레임워크 와 라이브러리
 - 프레임워크 : 개별적인 것들이 연결되어서 기초골격이 갖춰진 것
                프레임워크를 기본틀로 삼아 그위에 덧붙이면된다.
 - 라이브러리 : 개별적인 기능들을 남이 짜놓은 코드

## MVC model1 VS model2
 - model1 : 클라이언트가 요청하면 jsp가 받아 비즈니스로직, 화면구현 모든 요청을 처리
            빠르고 쉽게 개발할 수 있지만 jsp파일이 거대해진다. 유지보수에 어렵다.
 - model2 : 클라이언트가 요청하면 servelt에서 비즈니스로직 구현
            jsp에서 화면구현을 합니다. view와 컨트롤러가 분리되어있습니다.
            구조가 쉽고 유지보수가 쉽습니다. 설계는 어렵습니다.

## JSP와 Servlet
 - jsp : html에 자바코드를 추가해 동적웹페이지를 만들어줌
         view 페이지 나타날 때 많이 사용
 - servelet : 자바 코드 안에 html 코드 들어감 controller많이 사용
 - jsp와 servlet의 차이점
    : 기능적인 차이는 없고 역활차이만 있음
      servlet은 controller에서 많이 사용되고 jsp는 view페이지에 많이 사용
      servlet이 불편해서 jsp가 나오게 되었다.

## Ajax란
 - 자바스크립트를 이용해 서버에 데이터를 비동기방식으로 요청하는 것
   전체페이지중에서 특정영역의 데이터를 바꾸고 싶을때, 데이터 일부분만 불러오는 기법

## 비동기방식
 - 작업을 할 때 멈추지않고 요청한 업무를 진행하는 방식
   요청과 결과가 동시에 일어나지 않는 방식, 결과까지 시간이 걸리지만
   그 시간동안 다른 작업을 할 수 있다.

## Ajax 돌아가는 원리
 - 사용자에 의해 이벤트가 발생하면 자바스크립트가 작동하고
   자바스크립트에서 XMLHTTPRequest객체를 이용해 서버로 요청을 보낸다.

## 제이쿼리란?
 - 자바스크립트문법을 간소화해서 나온 문법

## 자바스크립트란?
 - 웹 서버로 통신되는게 아니라 웹 브라우저에서 바로 수행되는 언어
 - 브라우저를 프로그래밍적으로 제어한다. 

## get방식과 post방식 put방식
 - get방식 : 클라이언트가 서버로 보내는 요청
             정보를 가져와 조회할때 사용, URL에 데이터 노출됨
 - post방식 : 데이터를 서버로 제출할때 사용 
              body에 정보 담아 전송, URL에 데이터 노출 안돼서 캐싱 불가능
 - put방식 : 정보를 변경할 때 사용

## node.js란?
 - 탈웹브라우저 : 자바스크립트를 웹 브라우저에서뿐만 아니라 서버에서도 사용할 수 있도록 만든 프로그램
   원래 자바스크립트를 웹에서만 사용 했는데 서버에서도 사용할 수 있게 만들어준 프로그램으로
   node.js가 나오면서 자바스크립트 한가지 언어로 전체 웹페이지를 만들수 있게 되었다.
   이벤트기반 비동기 방식

## REST API란?
 - REST 기반으로 만들어진 API

## REST?
 - http url을 통해 리소스 명시하고 http method(get,post,put,delete)를 통해
   해당 리소스에 대한 crud를 적용하는 것

## 디비 쿼리 순서도
 - from- where- select -order by
 from : 전체 테이블의 결과 가지고 옴
 where : form절에서 읽어온 테이블에서
            조건에 맞는 결과만 가지고 옴
 select : 그 중에서 어떤 열을 출력해줄지 선택
 order by : 행을 정렬해주는 쿼리

## 서브쿼리란?
 - 쿼리안에 들어있는 또다른 쿼리

## inner join
 - 보통 join이라고 통칭
   두 테이블을 결합하여 나타날때 사용

## 오버로딩 
 - 기존에 없는 새로운 메소드를 추가하는 것.
   같은 클래스내에 적용합니다. 메소드명만 동일하면 된다.

## 오버라이딩
 - 부모 클래스로부터 상속받은 메소드를 자식클래스에서 재정의하는 것
   메소드명, 변수, 리턴 값이 모두 같아야 한다.

## 자바란?
 - 프로그래밍 언어로 객체지향언어이고 
   JVM이 있기때문에 운영체제에 따라 수정을 하지 않아도 된다. 보안이 좋다.

## JVM 
 - 자바 프로그램을 실행시키는 가상 운영체제
 - 자바 파일을 컴파일 하면 자바 클래스 파일은 바이트 코드를 사용하는데
   바이트 코드를 컴퓨터에서 바로 사용할 수 없어서 jvm을 사용

## JDK
 - 컴파일 프로그램으로 바이트 코드 생성

## 객체지향이란?
 - 객체들간의 상호작용을 통해 설계하고 개발하는 것

## 객체지향 특징
 - 상위 클래스의 모든걸 하위클래스가 이어 받는다.
   데이터와 코드를 외부가 알 수 없고
   데이터의 구조와 기능을 하나의 캡슐형태로 만든다.
   한 객체가 여러형태로 재구성 될 수 있다.
   객체의 공통적인 기능과 속성을 추출해 정의할 수 있다.

## 객체지향 장점
 - 코드 재사용 높음, 개발 빠르게 할 수 있음, 유지보수 용이

## 객체지향 단점 
 - 설계시간 오래 걸림, 속도 느림