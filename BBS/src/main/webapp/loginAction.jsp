<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
    <%
    request.setCharacterEncoding("UTF-8");
%>
  <%@ page import="user.UserDAO" %>
  <%@ page import="java.io.PrintWriter" %>
  <jsp:useBean id="user" class="user.User" scope="page" />
  <jsp:setProperty name="user" property="id" />
  <jsp:setProperty name="user" property="password" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/bootstrap.css">
<title>JSP 게시판 웹 사이트</title>
</head>
<body>
  <%
  String id = null;
  
  if (session.getAttribute("id") != null) {
    id = (String) session.getAttribute("id");
  }
  
  if (id != null) {
    PrintWriter script = response.getWriter();
    script.println("<script>");
    script.println("alert('이미 로그인이 되어있습니다.');");
    script.println("location.href = 'main.jsp");
    script.println("</script>");
  }
  
  UserDAO userDAO = new UserDAO();
  
  int result = userDAO.login(user.getId(), user.getPassword());
  if (result == 1) {
    session.setAttribute("id", user.getId());
    PrintWriter script = response.getWriter();
    script.println("<script>");
    script.println("location.href = 'main.jsp'");
    script.println("</script>");
    
  } else if (result == 0) {
    PrintWriter script = response.getWriter();
    script.println("<script>");
    script.println("alert('비밀번호가 틀립니다.');");
    script.println("history.back()");
    script.println("</script>");
    
  } else if (result == -1) {
    PrintWriter script = response.getWriter();
    script.println("<script>");
    script.println("alert('존재하지 않는 아이디입니다.');");
    script.println("history.back()");
    script.println("</script>");
    
  } else if (result == -2) {
    PrintWriter script = response.getWriter();
    script.println("<script>");
    script.println("alert('데이터베이스 오류가 발생했습니다.');");
    script.println("history.back()");
    script.println("</script>");
    
  }
  %>
</body>
</html>