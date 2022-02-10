// AOP(Aspect-Oriented Programming) - Java Config로 AOP 설정
package uk2.ex13.f;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import uk2.SpringUtils;

public class Exam01 {

  public static void main(String[] args) {
    AnnotationConfigApplicationContext iocContainer =
        new AnnotationConfigApplicationContext(AppConfig.class);

    SpringUtils.printBeanList(iocContainer);

    try {
      Caller caller = iocContainer.getBean(Caller.class);
      caller.test();
    } catch (Exception e) {
      System.err.println("오류 발생!");
    }
  }

}


