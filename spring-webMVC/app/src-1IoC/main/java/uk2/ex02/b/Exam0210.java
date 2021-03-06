// 객체 생성 - bean의 별명을 알아내기
package uk2.ex02.b;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import uk2.SpringUtils;

public class Exam0210 {

  public static void main(String[] args) {
    ApplicationContext iocContainer = new ClassPathXmlApplicationContext(//
        "uk2/ex02/b/application-context.xml");

    // 빈의 id와 클래스명을 출력하기
    SpringUtils.printBeanList(iocContainer);

    String[] aliases = iocContainer.getAliases("c5");
    System.out.println("[별명]");
    for (String alias : aliases) {
      System.out.println(alias);
    }
  }

}


