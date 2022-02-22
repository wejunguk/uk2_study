// 팩토리 메서드 호출 - FactoryBean 구현체
package uk2.ex06.e;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import uk2.ex06.Car;

public class Exam01 {

  public static void main(String[] args) {
    ApplicationContext iocContainer = new ClassPathXmlApplicationContext(//
        "uk2/ex06/e/application-context.xml");

    // 이 예제는 Factory 클래스의 이름을
    // CarFactory에서 CarFactoryBean으로 바꾼 것이다.
    Car obj1 = (Car) iocContainer.getBean("c1");
    System.out.println(obj1);

    // 다음과 같이 타입으로 객체를 찾을 때
    // FactoryBean의 getObjectType()이 호출된다.
    Car obj2 = (Car) iocContainer.getBean("Car.class");
    System.out.println(obj2);

    // 공장에서 객체를 한번 만들때 보관해서 그걸 계속 사용한다.
    System.out.println(obj1 == obj2); // true
  }

}

