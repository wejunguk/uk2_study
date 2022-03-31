package user;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserDAO {

  private Connection conn;
  private PreparedStatement pstmt;
  private ResultSet rs;

  public UserDAO() {
    try {
      String dbURL = "jdbc:mysql://localhost:3306/BBS";
      String dbID = "root";
      String dbPassword = "1111";
      Class.forName("com.mysql.cj.jdbc.Driver");
      conn = DriverManager.getConnection(dbURL, dbID, dbPassword);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  public int login(String id, String password) {
    String SQL = "select password from user where id = ?";
    try {
      pstmt = conn.prepareStatement(SQL);
      pstmt.setString(1, id);
      rs = pstmt.executeQuery();
      if (rs.next()) {
        if (rs.getString(1).equals(password)) {
          return 1; // 로그인 성공
        } else {
          return 0; // 비밀번호 불일치
        }
      }
      return -1; // 아이디 없음
    } catch (Exception e) {
      e.printStackTrace();
    }
    return -2; // DB오류
  }
}
