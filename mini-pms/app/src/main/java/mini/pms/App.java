package mini.pms;

import mini.pms.handler.MemberHandler;
import mini.pms.handler.ProjectHandler;
import mini.pms.handler.TaskHandler;
import mini.pms.util.Prompt;

public class App {

  public static void main(String[] args) {

    loop: while (true) {
      String command = Prompt.inputString("명령> ");

      switch (command) {
        case "/member/list":
          MemberHandler.list();
          break;
        case "/member/add":
          MemberHandler.add();
          break;
        case "/project/add":
          ProjectHandler.add();
          break;
        case "/project/list":
          ProjectHandler.list();
          break;
        case "/task/add":
          TaskHandler.add();
          break;
        case "/task/list":
          TaskHandler.list();
          break;
        case "exit":
        case "quit":
          System.out.println("안녕!");
          break loop;
        default:
          System.out.println("실행할 수 없는 명령입니다.");
      }
    }
    Prompt.close();
  }
}
