import React, { useState, useEffect } from "react";

function UserStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChage(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    function handleStatusChage(status) {
      setIsOnline(status.isOnline);
    }
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChage);
    return () => {
      ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChage);
    };
  });

  if (isOnline === null) {
    return '대기 중..';
  }
  return isOnline ? '온라인' : 오프라인;
}

// 온라인 연락처 초록색 표시
function UserListItem(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChage(status) {
      setIsOnline(status.isOnline);
    }
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChage);
    return () => {
      ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChage);
    };
  });

  return (
    <li style={{ color: isOnline ? 'green' : 'black'}}>{props.user.name}</li>
  )
}

// Custom Hook 추출
function useUserStatus(userId) {
  const [isOnline, setIsOnline] = useStatus(null);

  useEffect(() => {
    function handleStatusChage(status) {
      setIsOnline(status.isOnline);
    }

    serverAPI.subscribeUserStatus(userId, handleStatusChage);
    return () => {
      serverAPI.unsubscribeUserStatus(userId, handleStatusChage);
    };
  });

  return isOnline;
}

function UserStatus(props) {
  const isOnline = useUserStatus(props.user.id);

  if (isOnline === null) {
    return '대기중...';
  }
  return isOnline ? '온라인' : '오프라인';
}

function UserListItem(props) {
  const isOnline = useUserStatus(props.user.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black'}}>{props.user.name}</li>
  );
}