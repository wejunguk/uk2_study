## 계정 생성
1) 관리자 모드로 접속
  sqlplus / as sysdba;
 
2) 일반 계정 생성 - scott2/1111
   create user 유저명(scott2) identified by 비밀번호(1111);

3) 권한부여
   grant connect,resource to 유저명(scott2);

4) 계정 접속
   sqlplus 유저명(scott2)/비밀번호(1111);

### scott계정 활성화하기
1) 관리자모드로 접속 후 경로 찾기 - 앞에 @를 붙인 뒤 실행  
  @C:\oraclexe\app\oracle\product\11.2.0\server\rdbms\admin\scott.sql 
 (설치파일 버전과 경로에 따라 위 경로위치는 달라진다.)
 파일을 찾은 후 show user로 접속된 사용자를 확인하자
 scott이 출력되면 이제 샘플데이터로 scott를 사용 할 수있다.

2) scott의 비밀번호 바꿔주기
굳이 tiger로 바꾸지 않아도 되지만, 보통 바꿔준다.
많은 예제들이 샘플스키마로 scott/tiger로 사용 중이다.

3) scott로 접속이 되나 확인하기
사용자이름과 비밀번호를 작성하고 테스트를 눌러서 상태가 성공으로 뜨면 끝!