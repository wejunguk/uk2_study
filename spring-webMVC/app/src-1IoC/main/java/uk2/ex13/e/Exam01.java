// AOP(Aspect-Oriented Programming) - 애노테이션으로 AOP 설정하기
package uk2.ex13.e;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import uk2.SpringUtils;

public class Exam01 {

  public static void main(String[] args) {
    ClassPathXmlApplicationContext iocContainer = new ClassPathXmlApplicationContext(//
        "uk2/ex13/e/application-context.xml");

    SpringUtils.printBeanList(iocContainer);

    try {
      Caller caller = iocContainer.getBean(Caller.class);
      caller.test();
    } catch (Exception e) {
      System.err.println("오류 발생!");
    }
  }

}


