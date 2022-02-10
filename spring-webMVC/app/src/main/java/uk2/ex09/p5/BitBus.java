package uk2.ex09.p5;

import org.springframework.stereotype.Component;
import uk2.ex09.Car;
import uk2.ex09.Engine;

@Component
public class BitBus extends Car {
  public BitBus(Engine engine) {
    super(engine);
  }
}
