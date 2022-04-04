<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
   <%
    request.setCharacterEncoding("UTF-8");
%>
<%@ page import="java.io.PrintWriter" %>
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
if(session.getAttribute("id") != null) {
  id = (String) session.getAttribute("id");
}
%>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="main.jsp">JSP 게시판 웹 사이트</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarScroll" aria-controls="navbarScroll"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll"
          style="max-height: 100px;">
          <li class="nav-item "><a class="nav-link" href="main.jsp">메인</a>
          </li>
          <li class="nav-item active"><a class="nav-link" href="bbs.jsp">게시판</a>
          </li>
        </ul>
        <%
        if (id == null) {
          %>
          <ul class="navbar-nav form-inline my-2 my-lg-0">
          <li class="nav-item dropdown "><a
            class="nav-link dropdown-toggle" href="#"
            id="navbarScrollingDropdown" role="button" data-toggle="dropdown"
            aria-expanded="false"> 접속하기 </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="login.jsp">로그인</a></li>
              <li><a class="dropdown-item" href="join.jsp">회원가입</a></li>
            </ul></li>
        </ul>
          <%
        } else {
          %>
          <ul class="navbar-nav form-inline my-2 my-lg-0">
          <li class="nav-item dropdown "><a
            class="nav-link dropdown-toggle" href="#"
            id="navbarScrollingDropdown" role="button" data-toggle="dropdown"
            aria-expanded="false"> 마이페이지 </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="logoutAction.jsp">로그아웃</a></li>
            </ul></li>
        </ul>
          <%
        }
          %>
      </div>
    </nav>
    <!-- //navbar -->
    
    <div style="width:800px; margin:0 auto; padding:50px 0;">
      <h6 style=" padding-bottom:5px; font-weight:bold;">글쓰기</h6>
      <form action="writeAction.jsp" method="post">
	      <table class="table" style="text-align:center;">
	        <caption>게시판 글쓰기</caption>
	        <colgroup>
	         <col width="15%">
	         <col width="*">
	        </colgroup>
	        <tbody>
	          <tr>
	           <th>제목</th>
	            <td>
	              <input type="text" placeholder="제목" name="title" style="width:550px;">
	            </td>
            </tr>
            <tr>
              <th style="border-bottom: 1px solid #dee2e6;">내용</th>
	            <td style="border-bottom: 1px solid #dee2e6;">
	              <textarea placeholder="내용" name="content"
	              maxlength="2048" style="width:550px; height:350px;"></textarea>
	            </td>
            </tr>
	        </tbody>
	      </table>
		    <input type="submit" class="btn btn-primary" value="등록">
		    <a href="bbs.jsp" class="btn btn-primary">목록</a>
      </form>
    </div>
  </div>
  <!-- //container -->
  <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
  <script src="js/bootstrap.js"></script>
</body>
</html>