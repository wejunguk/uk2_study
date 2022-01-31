package mini.pms.handler;

import mini.menu.Menu;

public class AuthLogoutHandler implements Command {
  @Override
  public void execute(CommandRequest request) {
    System.out.println("[로그아웃]");

    AuthLoginHandler.loginUser = null;
    AuthLoginHandler.userAccessLevel = Menu.ACCESS_LOGOUT;
    System.out.println("로그아웃 하였습니다.");
  }
}







