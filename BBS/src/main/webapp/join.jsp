<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
	<%
    request.setCharacterEncoding("UTF-8");
%>
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
  <div class="container">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">JSP 게시판 웹 사이트</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll"
				aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
		
			<div class="collapse navbar-collapse" id="navbarScroll">
				<ul class="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style="max-height: 100px;">
					<li class="nav-item"><a class="nav-link" href="main.jsp">메인</a>
					</li>
					<li class="nav-item"><a class="nav-link" href="bbs.jsp">게시판</a>
					</li>
				</ul>
				<ul class="navbar-nav form-inline my-2 my-lg-0">
					<li class="nav-item dropdown "><a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown"
							role="button" data-toggle="dropdown" aria-expanded="false"> 접속하기 </a>
						<ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
							<li><a class="dropdown-item" href="login.jsp">로그인</a></li>
							<li><a class="dropdown-item active" href="join.jsp">회원가입</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
		<div style="width:500px; margin:0 auto;">
			<div class="jumbtron" style="padding-top: 50px;">
				<form action='joinAction.jsp' method='post'>
					<h3 style="text-align:center; padding-bottom:20px;">회원가입</h3>
					<div class="form-group row">
				    <label for="inputID" class="col-sm-3 col-form-label">아이디</label>
				    <div class="col-sm-9">
				      <input type="text" class="form-control" id="inputID" name="id" maxlength="20" placeholder="아이디">
				    </div>
				  </div>
				  <div class="form-group row">
            <label for="inputPassword" class="col-sm-3 col-form-label">비밀번호</label>
            <div class="col-sm-9">
              <input type="password" class="form-control" id="inputPassword" name="password" maxlength="20" placeholder="비밀번호">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputName" class="col-sm-3 col-form-label">이름</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputName" name="name" maxlength="20" placeholder="이름">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputGender" class="col-sm-3 col-form-label">성별</label>
            <div class="btn-group col-sm-9" id="inputGender" data-toggle="buttons">
              <label class="btn btn-outline-secondary" style="margin-bottom:0px;">
	              <input type="radio" name="gender" autocomplete="off"  value="남자" checked>남자
              </label>
              <label class="btn btn-outline-secondary" style="margin-bottom:0px;">
                <input type="radio" name="gender" autocomplete="off"  value="여자">여자
              </label>
            </div>
          </div>
          <div class="form-group row" style="padding-bottom:10px;">
            <label for="inputEmail" class="col-sm-3 col-form-label">이메일</label>
            <div class="col-sm-9">
              <input type="email" class="form-control" id="inputEmail" name="email" maxlength="20" placeholder="이메일">
            </div>
          </div>
					<input type="submit" class="btn btn-success form-control" value="회원가입">
				</form>
			</div>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script src="js/bootstrap.js"></script>
</body>
</html>