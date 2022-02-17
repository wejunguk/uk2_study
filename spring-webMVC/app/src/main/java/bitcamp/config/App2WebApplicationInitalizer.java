package bitcamp.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

// 서블릿컨테이너
// ====> ServletContainerInitializer.onStartup() 호출 -> SpringServletContainerInitializer 이 클래스 호출
// SpringServletContainerInitializer =====> MyWebApplicationInitalizer.onStratup() 호출 -> MyWebApplicationInitalizer 이 클래스 호출
public class App2WebApplicationInitalizer extends AbstractAnnotationConfigDispatcherServletInitializer {

  // AbstractDispatcherServletInitializer 클래스에서
  // 이미 DispatcherServlet 객체를 생성하여 등록했다.
  // 따라서 이 클래스를 상속 받는 서브 클래스에서 해야 할 일은
  // 1) ContextLoaderListener 가 사용할 IoC 컨테이너를 설정한다.
  //    => creatRootApplicationContext() 메서드 오버라이딩
  // 2) DispatcherServlet이 사용할 IoC 컨테이너를 설정한다.
  //    => creatServletApplicationContext() 메서드 오버라이딩
  //3) DispatcherServlet에 적용할 URL 매핑을 설정한다.
  //   => getServletMappings() 메서드 오버라이딩
  //

  // 다음 메서드들은 수퍼 클래스에서 상속 받은 onStratup()에서 호출한다.
  // 즉 onStartup()은 Dispatcher을 준비할 때 다음 메서드의 리턴 값을 참조한다.

  // 다음 메서도도 수퍼클래스에서 이미 오버라이딩 했기때문에 설정할 필요가 없다.
  //  @Override
  //  protected WebApplicationContext createRootApplicationContext() {
  //    // ContextLoaderListener가 사용할 IoC 컨테이너를 설정하고 싶지 않다며 그냥 null을 리턴한다.
  //    return null;
  //  }

  @Override
  protected Class<?>[] getRootConfigClasses() {
    // ContextLoaderListener의 IoC 컨테이너가 사용할 JavaConfig 클래스 리턴.
    return null;
  }

  // 다음 메서드는 수퍼클래스에서 이미 설정했다.
  // 따라서 서브 클래스에서 오버라이딩 할 필요가 없다.
  //  @Override
  //  protected WebApplicationContext createServletApplicationContext() {
  //    // DispatcherServlet에서 사용할 IoC 컨테이너를 리턴한다.
  //    AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
  //    context.register(AppConfig.class);
  //    return context;
  //  }

  // 대신 AnnotationConfigWebApplicationContext가 사용할 Java Config 클래스만 알려줘라
  @Override
  protected Class<?>[] getServletConfigClasses() {
    return new Class<?>[] {App2Config.class};
  }

  @Override
  protected String[] getServletMappings() {
    // DispactherServlet에 대해 URL 매핑 정보를 리턴한다.
    return new String[] {"/app2/*"};
  }

  @Override
  protected String getServletName() {
    // DispatcherServlet의 이름을 리턴한다.
    return "app2";
  }
}
