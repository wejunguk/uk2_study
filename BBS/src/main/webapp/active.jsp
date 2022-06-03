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
	  int intNum1 = 11;
	  int intNum2 = 5;
	  
	  out.println("Num1 = " + intNum1 + " Num2 = " + intNum2 + "<br><br>");
	  out.println("Num1 + Num2 = " + (intNum1 + intNum2) + "<br>");
	  out.println("Num1 - Num2 = " + (intNum1 - intNum2) + "<br>");
	  out.println("Num1 * Num2 = " + (intNum1 * intNum2) + "<br>");
	  out.println("Num1 / Num2 = " + (intNum1 / intNum2) + "<br>");
	  
	%>
</body>
</html>