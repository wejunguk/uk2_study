package mini.pms.handler;

import java.util.Collection;
import mini.pms.dao.BoardDao;
import mini.pms.domain.Board;

public class BoardListHandler implements Command {

  BoardDao boardDao;

  public BoardListHandler(BoardDao boardDao) {
    this.boardDao = boardDao;
  }

  @Override
  public void execute(CommandRequest request) throws Exception {
    System.out.println("[게시글 목록]");

    Collection<Board> boardList = boardDao.findAll();

    for (Board board : boardList) {
      System.out.printf("%d, %s, %s, %s, %d\n", 
          board.getNo(), 
          board.getTitle(), 
          board.getWriter().getName(),
          board.getRegisteredDate(),
          board.getViewCount());
    }
  }
}







