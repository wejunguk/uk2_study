import React from "react";
import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../../components/NicknameEditForm";
import FollowList from "../../components/FollowList";
import ContentLayout from "../../components/ContentLayout";

const Profile = () => {
  // 더미 데이터
  const followerList = [
    { nickname: "이순신" },
    { nickname: "홍길동" },
    { nickname: "유관순" },
  ];
  const followingList = [
    { nickname: "이순신" },
    { nickname: "홍길동" },
    { nickname: "유관순" },
  ];

  return (
    <>
      <Head>
        <title>내 프로필</title>
      </Head>
      <AppLayout />
      <ContentLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </ContentLayout>
    </>
  );
};

export default Profile;
