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

String selectSite = request.getParameter("download");
session.setAttribute("site", selectSite);

switch (Integer.parseInt(selectSite)) {
  case 1 :
    response.sendRedirect("");
    break;
  case 2 :
    response.sendRedirect("");
    break;
  case 3 :
    response.sendRedirect("");
    break;
    default :
      response.sendRedirect("");
      break;
}
%>
</body>
</html>