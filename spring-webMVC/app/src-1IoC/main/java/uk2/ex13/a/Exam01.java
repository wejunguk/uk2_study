// AOP(Aspect-Oriented Programming) - AOP 필터 적용 전
package uk2.ex13.a;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import uk2.SpringUtils;

public class Exam01 {

  public static void main(String[] args) {
    ClassPathXmlApplicationContext iocContainer = new ClassPathXmlApplicationContext(//
        "com/eomcs/spring/ioc/ex13/a/application-context.xml");

    SpringUtils.printBeanList(iocContainer);

    X x = iocContainer.getBean(X.class);
    x.m1();
  }

}


