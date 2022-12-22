import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { SettingOutlined } from "@ant-design/icons";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followings">
          팔로워
          <br />0
        </div>,
        <SettingOutlined key="setting" style={{ lineHeight: 3 }} />,
      ]}
    >
      <Card.Meta avatar={<Avatar>no</Avatar>} title="uk" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
