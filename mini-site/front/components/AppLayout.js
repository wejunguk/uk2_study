import React from "react";
import Link from "next/link";
import { Menu, Input } from "antd";
import styled from "styled-components";
import ContentLayout from "./ContentLayout";

const AppLayout = () => {
  const SearchInput = styled(Input.Search)`
    vertical-align: middle;
  `;

  const Inner = styled.div`
    width: 1100px;
    height: 100px;
    margin: 0 auto;
    position: relative;
  `;

  return (
    <>
      <Inner>
        <Menu mode="horizontal">
          <Menu.Item key="main">
            <Link href="/">
              <a style={{ fontWeight: 700, fontUnderline: 0, fontSize: 17 }}>
                뮤지컬커뮤니티[뮤.커]
              </a>
            </Link>
          </Menu.Item>
          <Menu.SubMenu key="SubMenu" title="나의 정보">
            <Menu.Item key="main">
              <Link href="/about/profile">
                <a>회원정보 수정</a>
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          {/* <Menu.Item key="login">
          <Link href="/login">
            <a>로그인</a>
          </Link>
        </Menu.Item> */}
          <Menu.Item key="signup">
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/search">
            <SearchInput enterButton />
          </Menu.Item>
        </Menu>
      </Inner>
      <ContentLayout />
    </>
  );
};

// AppLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default AppLayout;
