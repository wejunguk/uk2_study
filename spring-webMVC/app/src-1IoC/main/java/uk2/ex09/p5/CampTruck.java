package uk2.ex09.p5;

import org.springframework.stereotype.Component;
import uk2.ex09.Car;
import uk2.ex09.Engine;

@Component
public class CampTruck extends Car {

  public CampTruck(Engine engine) {
    super(engine);
  }
}
