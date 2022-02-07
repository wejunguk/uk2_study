<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    trimDirectiveWhitespaces="true" %>
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>회원 추가</title>
  <!-- link -->
  <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
  
  <!-- script -->
  <script src="../node_modules/popper.js/dist/umd/popper.js"></script>
</head>
<body>
<div class="container">
<h1>회원 추가</h1>
<form action='add' method='post' enctype='multipart/form-data'>
<div class="mb-3 row">
  <label for='f-name' class="col-sm-2 col-form-label">이름</label>
  <div class="col-sm-6">
    <input id='f-name' type='text' name='name' class="form-control">
  </div>
</div>
<div class="mb-3 row">
  <label for='f-email' class="col-sm-2 col-form-label">이메일</label>
  <div class="col-sm-10">
    <input id='f-email' type='email' name='email' class="form-control">
  </div>
</div>
<div class="mb-3 row">
  <label for='f-password' class="col-sm-2 col-form-label">암호</label>
  <div class="col-sm-6">
    <input id='f-password' type='password' name='password' class="form-control">
  </div>
</div>
<div class="mb-3 row">
  <label for='f-photo' class="col-sm-2 col-form-label">사진</label> 
  <div class="col-sm-10">
    <input id='f-photo' type='file' name='photo' class="form-control">
  </div>
</div>
<div class="mb-3 row">
  <label for='f-tel' class="col-sm-2 col-form-label">전화</label> 
  <div class="col-sm-10">
    <input id='f-tel' type='tel' name='tel' class="form-control">
  </div>
</div>
<button class="btn btn-primary btn-sm">등록</button><br>
</form>
</div><!-- .container -->
</body>
</html>
