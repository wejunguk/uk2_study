// 프로퍼티 에디터 - String ==> java.sql.Date ; 변환기 없이 처리하기
package uk2.ex07.b;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Exam01 {

  public static void main(String[] args) {
    ApplicationContext iocContainer = new ClassPathXmlApplicationContext(//
        "uk2/ex07/b/application-context.xml");

    System.out.println(iocContainer.getBean("c1"));
  }

}


