package mini.pms.handler;

import java.sql.Date;
import java.util.List;
import mini.pms.dao.ProjectDao;
import mini.pms.domain.Member;
import mini.pms.domain.Project;
import mini.util.Prompt;

public class ProjectUpdateHandler implements Command {

  ProjectDao projectDao;
  MemberPrompt memberPrompt;

  public ProjectUpdateHandler(ProjectDao projectDao, MemberPrompt memberPrompt) {
    this.projectDao = projectDao;
    this.memberPrompt = memberPrompt;
  }

  @Override
  public void execute(CommandRequest request) throws Exception {
    System.out.println("[프로젝트 변경]");
    int no = (int) request.getAttribute("no");

    Project project = projectDao.findByNo(no);

    if (project == null) {
      System.out.println("해당 번호의 게시글이 없습니다.");
      return;
    }

    if (project.getOwner().getNo() != AuthLoginHandler.getLoginUser().getNo()) {
      System.out.println("변경 권한이 없습니다.");
      return;
    }

    String title = Prompt.inputString(String.format("프로젝트명(%s)? ", project.getTitle()));
    String content = Prompt.inputString(String.format("내용(%s)? ", project.getContent()));
    Date startDate = Prompt.inputDate(String.format("시작일(%s)? ", project.getStartDate()));
    Date endDate = Prompt.inputDate(String.format("종료일(%s)? ", project.getEndDate()));
    List<Member> members = memberPrompt.promptMembers(String.format(
        "팀원(%s)?(완료: 빈 문자열) ", project.getMemberNames()));

    String input = Prompt.inputString("정말 변경하시겠습니까?(y/N) ");
    if (input.equalsIgnoreCase("n") || input.length() == 0) {
      System.out.println("프로젝트 변경을 취소하였습니다.");
      return;
    }

    project.setTitle(title);
    project.setContent(content);
    project.setStartDate(startDate);
    project.setEndDate(endDate);
    project.setMembers(members);
    projectDao.update(project);

    System.out.println("프로젝트를 변경하였습니다.");
  }
}





