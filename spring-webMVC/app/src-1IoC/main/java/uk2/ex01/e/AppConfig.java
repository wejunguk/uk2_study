package uk2.ex01.e;

import org.springframework.context.annotation.Bean;
import uk2.ex01.Car;

// 클래스 선언부에 애노테이션으로 스프링 설정에 관한 정보를 지정할 수 있다.
public class AppConfig {

  // 객체 생성
  @Bean 
  public Car c1() {
    return new Car();
  }
}
