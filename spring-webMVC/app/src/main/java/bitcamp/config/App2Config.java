package bitcamp.config;

import org.springframework.context.annotation.ComponentScan;

// uk2web밑에 admin패키지안에 있는 페이지컨트롤러만 만든다.
@ComponentScan("bitcamp.web.app2")
public class App2Config {

}