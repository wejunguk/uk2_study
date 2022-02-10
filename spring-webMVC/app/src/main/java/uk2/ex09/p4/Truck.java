package uk2.ex09.p4;

import org.springframework.stereotype.Component;
import uk2.ex09.Car;
import uk2.ex09.Engine;

@Component
public class Truck extends Car {

  public Truck(Engine engine) {
    super(engine);
  }
}
