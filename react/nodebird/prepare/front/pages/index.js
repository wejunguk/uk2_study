import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Home = () => {
  // 사용자 로그인 여부
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  // = const mainPOsts = userSelector((state) => state.post.mainPosts);
  return (
    <>
      <AppLayout>
        {isLoggedIn && <PostForm />}
        {mainPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </AppLayout>
    </>
  );
};

export default Home;
