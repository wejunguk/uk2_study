<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
	<div class="container">
		<nav class="navbar navbar-expand-lg navbar-light">
			<a class="navbar-brand nav-a mr-md-auto px-3"href="${contextPath}/app/home">작업관리시스템</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="nav navbar-nav me-auto mb-lg-0 px-5">
					<li class="nav-item px-3">
				    <a class="nav-link active" aria-current="page" href="${contextPath}/app/board/list">게시글</a>
				  </li>
					<li class="nav-item px-3">
				    <a class="nav-link" href="${contextPath}/app/member/list">회원</a>
					</li>
					<li class="nav-item px-3">
				    <a class="nav-link"href="${contextPath}/app/project/list">프로젝트</a>
					</li>
					<li class="nav-item px-3">
				    <a class="nav-link"href="${contextPath}/app/task/list">작업</a>
					</li>
				</ul>
				<!-- //nav -->
				<%-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="검색어" aria-label="Search">
        <button class="btn btn-outline-secondary btn-sm" type="submit">Search</button>
      </form>--%>
				<ul class="nav navbar-nav navbar-right" style="margin-left: 20rem;">
					<c:if test="${empty sessionScope.loginUser}">
						<li class="nav-item px-2"><a
							href="${contextPath}/app/auth/loginForm"
							class="btn btn-outline-secondary nav-link btn-sm">로그인</a></li>
					</c:if>
					
					<c:if test="${not empty sessionScope.loginUser}">
				    <c:if test="${empty sessionScope.loginUser.photo }">
				      <li class="nav-item px-2">
                <div class="avatar avatar-xl">
                  <img src="${contextPath}/images/no_profile.png" alt="프로필사진" class="rounded-circle">
                </div>
              </li>
				    </c:if>
				    <c:if test="${not empty sessionScope.loginUser.photo}">
				      <li class="nav-item px-2">
                <div class="avatar avatar-xl">
                  <img src="${contextPath}/upload/member/${sessionScope.loginUser.photo}_100x100.jpg"
                    class="rounded-circle" alt="프로필사진">
                </div>
              </li>
				    </c:if>
							
						<li class="nav-item px-2">
						  <a href="${contextPath}/app/auth/logout" class="btn btn-light btn-sm"
							style="display: block; padding: 0.5rem 1rem;">로그아웃</a>
						</li>
					</c:if>
				</ul>
			</div>
		</nav>
	</div>
	<!-- //container -->
</header>