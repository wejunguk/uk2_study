import React, { useCallback, useState } from "react";
import Link from "next/link";
import { Form, Input, Button } from "antd";

const LoginForm = () => {
  const [id, setId] = useState("");

  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Form>
      <div>
        <lable htmlFor="user-id">아이디</lable>
        <Input name="user-id" value={id} onChange={onChangeId} required></Input>
      </div>
      <div>
        <lable htmlFor="user-password">비밀번호</lable>
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          required
        ></Input>
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
