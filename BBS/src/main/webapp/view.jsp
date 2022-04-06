<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
   <%
   request.setCharacterEncoding("UTF-8");
   %>
<%@ page import="java.io.PrintWriter" %>
<%@ page import="bbs.BbsDTO" %>
<%@ page import="bbs.BbsDAO" %>
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
			
			int bbsID = 0;
			if (request.getParameter("bbsID") != null) {
			  bbsID = Integer.parseInt(request.getParameter("bbsID"));
			}
			if (bbsID == 0) {
			  PrintWriter script = response.getWriter();
			  script.println("<script>");
			  script.println("alert('유효하지 않은 글입니다.');");
			  script.println("location.href = 'bbs.jsp");
			  script.println("</script>");
			}
			BbsDTO bbs = new BbsDAO().getBbs(bbsID);
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
      <h6 style=" padding-bottom:5px; font-weight:bold;">글보기</h6>
	      <table class="table" style="text-align:center; border:1px solid #dee2e6;">
	        <caption>게시판 글보기</caption>
	        <colgroup>
	         <col width="15%">
	         <col width="*">
	        </colgroup>
	        <tbody>
            <tr>
              <th style="width:20%;">글 번호</th>
              <td style="text-align:left;"><%= bbs.getBbsID() %></td>
            </tr>
            <tr>
              <th style="width:20%;">제목</th>
	            <td style="text-align:left;"><%= bbs.getTitle().replaceAll(" ", "&nbsp;").replaceAll("<","&lt;").replaceAll(">","&lt;").replaceAll("\n", "<br>") %></td>
            </tr>
            <tr>
              <th style="width:20%;">작성자</th>
              <td style="text-align:left;"><%= bbs.getId() %></td>
            </tr>
            <tr>
              <th style="width:20%;">작성일</th>
              <td style="text-align:left;">
                <%= bbs.getBbsDate().substring(0, 11) + bbs.getBbsDate().substring(11, 13) + "시"
                  + bbs.getBbsDate().substring(14, 16) + "분" %>
              </td>
            </tr>
            <tr style="; border-bottom: 1px solid #dee2e6;">
              <th style="width:20%; height:250px">내용</th>
              <td style="height:250px; text-align:left;"><%= bbs.getContent().replaceAll(" ", "&nbsp;").replaceAll("<","&lt;").replaceAll(">","&lt;").replaceAll("\n", "<br>") %></td>
            </tr>
	        </tbody>
	      </table>
		    <a href="bbs.jsp" class="btn btn-primary">목록</a>
		    <%
		    if (id != null && id.equals(bbs.getId())) {
		    %>
		      <a href="update.jsp?bbsID=<%= bbsID %>" class="btn btn-primary">수정</a>
		      <a href="deleteAction.jsp?bbsID=<%= bbsID %>" class="btn btn-primary" onclick="return confirm('정말로 삭제하시겠습니까?')">삭제</a>
		    <%
		      }
		    %>
    </div>
  </div>
  <!-- //container -->
  <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
  <script src="js/bootstrap.js"></script>
</body>
</html>