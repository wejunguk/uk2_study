package mini.pms.handler;

import mini.pms.dao.MemberDao;
import mini.pms.domain.Member;
import mini.util.Prompt;

public class MemberAddHandler implements Command {

  MemberDao memberDao;

  public MemberAddHandler(MemberDao memberDao) {
    this.memberDao = memberDao;
  }

  @Override
  public void execute(CommandRequest request) throws Exception {
    System.out.println("[회원 등록]");

    Member member = new Member();

    member.setName(Prompt.inputString("이름? "));
    member.setEmail(Prompt.inputString("이메일? "));
    member.setPassword(Prompt.inputString("암호? "));
    member.setPhoto(Prompt.inputString("사진? "));
    member.setTel(Prompt.inputString("전화? "));

    memberDao.insert(member);

    System.out.println("회원을 등록했습니다.");
  }
}







