import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  // 더미 데이터
  const followerList = [
    {
      nickname: "이순신",
    },
    {
      nickname: "홍길동",
    },
    {
      nickname: "유관순",
    },
  ];
  const followingList = [
    {
      nickname: "이순신2",
    },
    {
      nickname: "홍길동2",
    },
    {
      nickname: "유관순2",
    },
  ];

  return (
    <>
      <Head>
        <title>nodeBird | 내 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
