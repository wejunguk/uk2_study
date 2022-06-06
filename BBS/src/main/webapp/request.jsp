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
	<form action="request2.jsp" method="post">
	<input type="text" name="strID"><br/>
	<input type="password" name="strPwd" autocomplete="off"><br/>
	<input type="submit" value="로그인">
	<input type="reset" value="취소">
	</form>
</body>
</html>