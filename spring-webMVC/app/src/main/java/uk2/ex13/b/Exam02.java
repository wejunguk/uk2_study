// AOP(Aspect-Oriented Programming) - AOP 필터 적용 후
package uk2.ex13.b;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import uk2.SpringUtils;

public class Exam02 {

  public static void main(String[] args) {
    ClassPathXmlApplicationContext iocContainer = new ClassPathXmlApplicationContext(//
        "com/eomcs/spring/ioc/ex13/b/application-context-02.xml");

    SpringUtils.printBeanList(iocContainer);

    X x = iocContainer.getBean(X.class);
    x.m1();
    System.out.println();

    x.m2();
    System.out.println();

    x.m3();

  }

}


