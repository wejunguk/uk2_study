// 공통부분
import React from "react";
import PropType from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head cahrSet="utf-8">
        <title>NodeBird</title>
      </Head>
      <Component />;
    </>
  );
};

NodeBird.propTypes = {
  Component: PropType.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
