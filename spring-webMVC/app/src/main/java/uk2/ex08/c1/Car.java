package uk2.ex08.c1;

import java.sql.Date;
import org.springframework.beans.factory.annotation.Autowired;

// 의존 객체 Engine 주입 - 셋터 메서드에 @Autowired로 표시하라!
public class Car {
  String model;
  String maker;
  int cc;
  boolean auto;
  Date createdDate;
  Engine engine;

  public Car() {
    System.out.println("Car()");
  }

  // IoC 컨테이너의 설정 파일(예:application-context.xml)에서 빈 생성 태그를 정의할 때 
  // 다음 메서드가 인스턴스를 초기화시키는 메서드임을 지정하라.
  //        <bean ... init-method="init">
  // 
  public void init() {
    System.out.println("Car.init()");
  }

  @Override
  public String toString() {
    return "Car [model=" + model + ", maker=" + maker + ", cc=" + cc + ", auto=" + auto
        + ", createdDate=" + createdDate + ", engine=" + engine + "]";
  }

  public Engine getEngine() {
    return engine;
  }

  @Autowired
  public void setEngine(Engine engine) {
    System.out.println("Car.setEngine()");
    this.engine = engine;
  }

  public boolean isAuto() {
    return auto;
  }

  public void setAuto(boolean auto) {
    System.out.println("Car.setAuto()");
    this.auto = auto;
  }

  public Date getCreatedDate() {
    return createdDate;
  }

  public void setCreatedDate(Date createdDate) {
    System.out.println("Car.setCreatedDate()");
    this.createdDate = createdDate;
  }

  public String getModel() {
    return model;
  }

  public void setModel(String model) {
    System.out.println("Car.setModel()");
    this.model = model;
  }

  public String getMaker() {
    return maker;
  }

  public void setMaker(String maker) {
    System.out.println("Car.setMaker()");
    this.maker = maker;
  }

  public int getCc() {
    return cc;
  }

  public void setCc(int cc) {
    System.out.println("Car.setCc()");
    this.cc = cc;
  }


}
