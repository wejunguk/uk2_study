// 생성자의 파라미터 값을 지정하는 방법 II
package uk2.ex03.b;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Exam01 {

  public static void main(String[] args) {
    ApplicationContext iocContainer = new ClassPathXmlApplicationContext(//
        "uk2/ex03/b/application-context.xml");

    // SpringUtils.printBeanNames(iocContainer);
  }

}


