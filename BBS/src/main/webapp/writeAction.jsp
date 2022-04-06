<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
  <%
    request.setCharacterEncoding("UTF-8");
%>
  <%@ page import="bbs.BbsDAO" %>
  <%@ page import="java.io.PrintWriter" %>
  <jsp:useBean id="bbs" class="bbs.BbsDTO" scope="page" />
  <jsp:setProperty name="bbs" property="title" />
  <jsp:setProperty name="bbs" property="content" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/commom.css">
<title>JSP 게시판 웹 사이트</title>
</head>
<body>
  <%
  String id = null;
  
  if (session.getAttribute("id") != null) {
    id = (String) session.getAttribute("id");
  }

  if (id == null) {
    PrintWriter script = response.getWriter();
    script.println("<script>");
    script.println("alert('로그인 후 사용할 수 있습니다.');");
    script.println("location.href = 'login.jsp");
    script.println("</script>");
    
  } else {
    
    if (bbs.getTitle() == null || bbs.getContent() == null) {
        PrintWriter script = response.getWriter();
        script.println("<script>");
        script.println("alert('입력이 안 된 사항이 있습니다.')");
        script.println("history.back()");
        script.println("</script>");

      } else {
        BbsDAO bbsDAO = new BbsDAO(); //인스턴스생성

        int result = bbsDAO.write(id, bbs.getTitle(), bbs.getContent());        
        
        if (result == -1){ // 아이디가 기본키기. 중복되면 오류.
          PrintWriter script = response.getWriter();
          script.println("<script>");
          script.println("alert('글쓰기에 실패했습니다.')");
          script.println("history.back()");
          script.println("</script>");
        }
        else {
          PrintWriter script = response.getWriter();
          script.println("<script>");
          script.println("location.href = 'bbs.jsp'");
          script.println("</script>");
        }

      }
    
  }

      %>
</body>
</html>