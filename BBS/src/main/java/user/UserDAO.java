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
      String dbURL = "jdbc:mysql://localhost:3306/BBS?useUnicode=true&characterEncoding=UTF-8";
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

  public int join(User user) {

    String SQL = "INSERT INTO USER VALUES (?,?,?,?,?)";

    try {
      pstmt = conn.prepareStatement(SQL);

      pstmt.setString(1, user.getId());
      pstmt.setString(2, user.getPassword());
      pstmt.setString(3, user.getName());
      pstmt.setString(4, user.getGender());
      pstmt.setString(5, user.getEmail());

      return pstmt.executeUpdate();

    } catch (Exception e) {
      e.printStackTrace();
    }
    return -1; // DB 오류
  }

}
