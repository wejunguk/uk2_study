package bbs;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class BbsDAO {
  private Connection conn;
  private ResultSet rs;

  public BbsDAO() {

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

  public String getDate() {
    String SQL = "select now()";
    try {
      PreparedStatement pstmt = conn.prepareStatement(SQL);
      rs = pstmt.executeQuery();
      if (rs.next()) {
        return rs.getString(1);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    return "";
  }

  public int getNext() {
    String SQL = "select bbsID from bbs order by bbsID desc;";
    try {
      PreparedStatement pstmt = conn.prepareStatement(SQL);
      rs = pstmt.executeQuery();
      if (rs.next()) {
        return rs.getInt(1) + 1;
      }
      return 1;
    } catch (Exception e) {
      e.printStackTrace();
    }
    return -1;
  }

  public int write(String id, String title, String content) {
    String SQL = "insert into bbs values (?, ?, ?, ?, ?, ?)";
    try {
      PreparedStatement pstmt = conn.prepareStatement(SQL);
      pstmt.setInt(1, getNext());
      pstmt.setString(2, title);
      pstmt.setString(3, id);
      pstmt.setString(4, getDate());
      pstmt.setString(5, content);
      pstmt.setInt(6, 1);
      return pstmt.executeUpdate();

    } catch (Exception e) {
      e.printStackTrace();
    }
    return -1;
  }

  public ArrayList<BbsDTO> getList(int pageNumber) {
    String SQL = "select * from bbs where available = 1 order by bbsID desc limit 10 offset ?";
    // String SQL = "select * from bbs where bbsID < ? and available = 1"
    //   + " order by bbsID desc limit 10";

    ArrayList<BbsDTO> list = new ArrayList<BbsDTO>();

    try {
      PreparedStatement pstmt = conn.prepareStatement(SQL);
      pstmt.setInt(1, (pageNumber - 1) * 10);
      rs = pstmt.executeQuery();
      while (rs.next()) {
        BbsDTO bbs = new BbsDTO();
        bbs.setBbsID(rs.getInt(1));
        bbs.setTitle(rs.getString(2));
        bbs.setId(rs.getString(3));
        bbs.setBbsDate(rs.getString(4));
        bbs.setContent(rs.getString(5));
        bbs.setAvailable(rs.getInt(6));
        list.add(bbs);

      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    return list;
  }

  public boolean nextPage(int pageNumber) {
    String SQL = "select * from bbs"
        + " where bbsID < ? and available = 1";

    try {
      PreparedStatement pstmt = conn.prepareStatement(SQL);
      pstmt.setInt(1, getNext() - (pageNumber - 1) * 10);
      rs = pstmt.executeQuery();
      if (rs.next()) {
        return true;
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    return false;
  }

  public BbsDTO getBbs(int bbsID) {
    String SQL = "select * from bbs where bbsID = ?";

    try {
      PreparedStatement pstmt = conn.prepareStatement(SQL);
      pstmt.setInt(1, bbsID);
      rs = pstmt.executeQuery();
      if (rs.next()) {
        BbsDTO bbs = new BbsDTO();
        bbs.setBbsID(rs.getInt(1));
        bbs.setTitle(rs.getString(2));
        bbs.setId(rs.getString(3));
        bbs.setBbsDate(rs.getString(4));
        bbs.setContent(rs.getString(5));
        bbs.setAvailable(rs.getInt(6));
        return bbs;
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    return null;
  }

  public int update(int bbsID, String title, String content) {
    String SQL = "update bbs set title = ?, content = ?"
        + " where bbsID = ?";
    try {
      PreparedStatement pstmt = conn.prepareStatement(SQL);
      pstmt.setString(1, title);
      pstmt.setString(2, content);
      pstmt.setInt(3, bbsID);
      return pstmt.executeUpdate();
    } catch (Exception e) {
      e.printStackTrace();
    }
    return -1;
  }

  public int delete(int bbsID) {
    String SQL = "update bbs set available = 0 where bbsID = ?";
    try {
      PreparedStatement pstmt = conn.prepareStatement(SQL);
      pstmt.setInt(1, bbsID);
      return pstmt.executeUpdate();
    } catch (Exception e) {
      e.printStackTrace();
    }
    return -1;
  }

}
