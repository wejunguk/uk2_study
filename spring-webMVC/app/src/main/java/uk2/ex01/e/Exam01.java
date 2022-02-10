// IoC 컨테이너에 객체를 보관하기
package uk2.ex01.e;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import uk2.SpringUtils;

public class Exam01 {
  public static void main(String[] args) {
    ApplicationContext iocContainer = new ClassPathXmlApplicationContext(//
        "uk2/ex01/e/application-context.xml");

    // 현재 IoC 컨테이너에 들어 있는 객체를 출력해 보자.
    SpringUtils.printBeanList(iocContainer);

    System.out.println("실행 완료!");
  }
}


