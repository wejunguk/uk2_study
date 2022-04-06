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
			
			if (id == null) {
			  PrintWriter script = response.getWriter();
		        script.println("<script>");
		        script.println("alert('로그인 후 사용하세요.');");
		        script.println("location.href = 'login.jsp");
		        script.println("</script>");
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
		  if (!id.equals(bbs.getId())) {
		    PrintWriter script = response.getWriter();
		       script.println("<script>");
		       script.println("alert('사용 권한이 없습니다.');");
		       script.println("location.href = 'bbs.jsp");
		       script.println("</script>");
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
        <ul class="navbar-nav form-inline my-2 my-lg-0">
          <li class="nav-item dropdown "><a
            class="nav-link dropdown-toggle" href="#"
            id="navbarScrollingDropdown" role="button" data-toggle="dropdown"
            aria-expanded="false"> 마이페이지 </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="logoutAction.jsp">로그아웃</a></li>
            </ul></li>
        </ul>
      </div>
    </nav>
    <!-- //navbar -->
    
    <div style="width:800px; margin:0 auto; padding:50px 0;">
      <h6 style=" padding-bottom:5px; font-weight:bold;">글 수정</h6>
      <form action="updateAction.jsp?bbsID=<%= bbsID %>" method="post">
	      <table class="table" style="text-align:center;">
	        <caption>게시판 글 수정</caption>
	        <colgroup>
	         <col width="15%">
	         <col width="*">
	        </colgroup>
	        <tbody>
            <tr>
             <th>글번호</th>
              <td>
                <%= bbs.getBbsID() %>
              </td>
            </tr>
	          <tr>
	           <th>제목</th>
	            <td>
	              <input type="text" placeholder="제목" name="title" style="width:550px;"
	              value="<%= bbs.getTitle() %>">
	            </td>
            </tr>
            <tr>
              <th style="border-bottom: 1px solid #dee2e6;">내용</th>
	            <td style="border-bottom: 1px solid #dee2e6;">
	              <textarea placeholder="내용" name="content"
	              maxlength="2048" style="width:550px; height:350px;"><%= bbs.getContent() %></textarea>
	            </td>
            </tr>
	        </tbody>
	      </table>
		    <input type="submit" class="btn btn-primary" value="수정">
		    <a href="bbs.jsp" class="btn btn-primary">취소</a>
      </form>
    </div>
  </div>
  <!-- //container -->
  <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
  <script src="js/bootstrap.js"></script>
</body>
</html>