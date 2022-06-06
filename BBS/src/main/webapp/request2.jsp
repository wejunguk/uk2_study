<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8" trimDirectiveWhitespaces="true"
%>
<%
   request.setCharacterEncoding("UTF-8");
  %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.io.PrintWriter" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>동적 웹 사이트</title>
</head>
<body>
	<%
	String id = request.getParameter("strID");

	String seID = session.getId();
	int time = session.getMaxInactiveInterval();
	 %>
	 
	 <%=id %>님 환영합니다.<br/>
	 세션 ID : <%=seID %><br/>
	 세션 시간 : <%=time %>


</body>
</html>