// 객체 생성 - bean의 이름을 지정하는 다양한 방법
package uk2.ex02.b;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import uk2.SpringUtils;

public class Exam01 {

  public static void main(String[] args) {
    ApplicationContext iocContainer = new ClassPathXmlApplicationContext(//
        "uk2/ex02/b/application-context.xml");

    // 빈의 id와 클래스명을 출력하기
    SpringUtils.printBeanList(iocContainer);
  }

}


