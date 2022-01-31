package mini.pms.handler;

import mini.pms.dao.BoardDao;
import mini.pms.domain.Board;
import mini.util.Prompt;

public class BoardAddHandler implements Command {

  BoardDao boardDao;

  public BoardAddHandler(BoardDao boardDao) {
    this.boardDao = boardDao;
  }

  @Override
  public void execute(CommandRequest request) throws Exception {
    System.out.println("[새 게시글]");

    Board board = new Board();

    board.setTitle(Prompt.inputString("제목? "));
    board.setContent(Prompt.inputString("내용? "));
    board.setWriter(AuthLoginHandler.getLoginUser());

    boardDao.insert(board);

    System.out.println("게시글을 저장했습니다.");
  }
}







