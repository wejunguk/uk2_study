import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Row, Col } from "antd";
import styled from "styled-components";

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";
import Content from "../components/Content";

const ContentLayout = () => {
  // 로그인 더미 데이터
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  const Inner = styled.div`
    width: 1100px;
    height: 100px;
    margin: 0 auto;
    position: relative;
  `;

  return (
    <>
      <Inner>
        <Row gutter={8}>
          <Col xs={24} md={6}>
            {isLoggedIn ? (
              <UserProfile setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <LoginForm setIsLoggedIn={setIsLoggedIn} />
            )}
          </Col>
          <Col xs={24} md={18}>
            <Content />
          </Col>
          {/* <Col xs={24} md={6}>
          <a
            href="https://github.com/wejunguk"
            target="_blank"
            rel="noreferrer noopener"
          >
            github by jugnukwe
          </a>
        </Col> */}
        </Row>
      </Inner>
    </>
  );
};

export default ContentLayout;
