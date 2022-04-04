<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
   <%
    request.setCharacterEncoding("UTF-8");
%>
<%@ page import="bbs.BbsDAO" %>
<%@ page import="bbs.Bbs" %>
<%@ page import="java.util.ArrayList" %>
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
	if (session.getAttribute("id") != null) {
	  id = (String) session.getAttribute("id");
	}
	int pageNumber = 1; // 기본 1페이지
	if (request.getParameter("pageNumber") != null) {
	  pageNumber = Integer.parseInt(request.getParameter("pageNumber"));
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
    <div class="row" style="width:800px; margin:0 auto; padding:50px 0;">
      <table class="table table-bordered" style="text-align:center; border:1px solid #ddd;">
        <thead>
          <tr>
           <th style="background:#eee; text-align:center; height:20px;">번호</th>
           <th style="background:#eee; text-align:center; height:20px;">제목</th>
           <th style="background:#eee; text-align:center; height:20px;">작성자</th>
           <th style="background:#eee; text-align:center; height:20px;">작성일</th>
          </tr>
        </thead>
        <tbody>
          <%
	          BbsDAO bbsDAO = new BbsDAO();
	          ArrayList<Bbs> list = bbsDAO.getList(pageNumber);
	          for (int i = 0; i < list.size(); i++) {
          %>
	          <tr>
	            <td><%= list.get(i).getBbsID() %></td>
	            <td><a href="view.jsp?bbsID=<%=list.get(i).getBbsID()%>"><%= list.get(i).getTitle()%></a></td>
	            <td><%= list.get(i).getId() %></td>
	            <td><%= list.get(i).getBbsDate().substring(0, 11) + list.get(i).getBbsDate().substring(11, 13) + "시"
	                + list.get(i).getBbsDate().substring(14, 16) + "분" %></td>
	          </tr>
          <%
	          }
          %>
        </tbody>
      </table>
      <div class="my-2 my-lg-0">
        <a href="write.jsp" class="btn btn-primary" role="button" >글쓰기</a>
      </div>
      <div class="col-12 my-3">
        <ul class="pagination justify-content-center">
	        <%
	        if (pageNumber != 1) {
		      %>
          <li class="page-item">
            <a class="page-link" href="bbs.jsp?pageNumber=<%=pageNumber - 1%>" aria-disabled="true">이전</a>
          </li>
          <%
          } if (bbsDAO.nextPage(pageNumber + 1)) {
		      %>
          <li class="page-item">
            <a class="page-link" href="bbs.jsp?pageNumber=<%=pageNumber + 1%>" aria-disabled="true">다음</a>
          </li>
          <%
		        }
		      %>
        </ul>
      </div>
    </div>
  </div>
  <!-- //container -->
  <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
  <script src="js/bootstrap.js"></script>
</body>
</html>