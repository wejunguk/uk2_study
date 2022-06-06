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
	<form action="request5.jsp" method="get">
  <select name="download">
    <option value="1" selected>jdk</option>
    <option value="2">java</option>
    <option value="3">tomcat</option>
    <option value="4">ultra</option>
  </select>
  <input type="submit" value="이동">
  </form>
</body>
</html>