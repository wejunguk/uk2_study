// 프로퍼티에 객체 주입하기
package uk2.ex04.c;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Exam01 {

  public static void main(String[] args) {
    ApplicationContext iocContainer = new ClassPathXmlApplicationContext(//
        "uk2/ex04/c/application-context.xml");

    System.out.println(iocContainer.getBean("c1"));
    System.out.println(iocContainer.getBean("c2"));

    System.out.println(iocContainer.getBean("e1"));
    System.out.println(iocContainer.getBean("e2"));
  }

}


