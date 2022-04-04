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
  <jsp:setProperty name="user" property="name" />
  <jsp:setProperty name="user" property="gender" />
  <jsp:setProperty name="user" property="email" />
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

    if (user.getId() == null || user.getPassword() == null || user.getName() == null
      || user.getGender() == null || user.getEmail() == null){
        PrintWriter script = response.getWriter();
        script.println("<script>");
        script.println("alert('입력이 안 된 사항이 있습니다.')");
        script.println("history.back()");
        script.println("</script>");

      } else {
        UserDAO userDAO = new UserDAO(); //인스턴스생성

        int result = userDAO.join(user);        
        
        if (result == -1){ // 아이디가 기본키기. 중복되면 오류.
          PrintWriter script = response.getWriter();
          script.println("<script>");
          script.println("alert('이미 존재하는 아이디 입니다.')");
          script.println("history.back()");
          script.println("</script>");
        }
        else {
          session.setAttribute("id", user.getId());
          PrintWriter script = response.getWriter();
          script.println("<script>");
          script.println("location.href = 'main.jsp'");
          script.println("</script>");
        }

      }
      %>
</body>
</html>