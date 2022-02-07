<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<h1>회원 목록</h1>
<a href='form' class="btn btn-outline-primary btn-sm">회원 추가</a><br>
<table class="table table-hover">
<thead>
  <tr>
    <th>번호</th>
    <th>이름</th>
    <th>이메일</th>
    <th>전화</th>
    <th>등록일</th>
  </tr>
</thead>
<tbody>

<c:forEach items="${memberList}" var="member">
<tr data-no='${member.no}'>
    <td>${member.no}</td>
    <td><a href='detail?no=${member.no}'>${member.name}</a></td>
    <%-- <td>${member.name}</td> --%>
    <td>${member.email}</td> 
    <td>${member.tel}</td> 
    <td>${member.registeredDate}</td>
</tr>
</c:forEach>

</tbody>
</table>

<script>

	document.querySelectorAll("tbody a").forEach((aTag) => {
	 aTag.onclick = () => {
		 return false;
	 }
	});
	
	var trList = document.querySelectorAll("tbody tr");
	
	trList.forEach(function(trTag) {
		trTag.onclick = (e) => {
			//console.log(e.currentTarget.querySelector("a").href);
			//e.currentTarget.querySelector("a").click();
			window.location.href=e.currentTarget.querySelector("a").href;
			//window.location.href = "detail?no=" + e.currentTarget.getAttribute("data-no");
		}
	});
</script>