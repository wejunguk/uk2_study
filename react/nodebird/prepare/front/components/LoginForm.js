import React, { useCallback, useState } from "react";
import Link from "next/link";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import { loginAction } from "../reducers/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput("");
  // = const [id, setId] = useState("");
  // = const onChangeId = useCallback((e) => {
  // =   setId(e.target.value);
  // = }, []);

  const [password, setPassword] = useState("");

  const FormWrapper = styled(Form)`
    padding: 10px !important;
  `;
  // style useMemo사용 적용
  // const style = useMemo(() => ({ maringTop: 10 }, []));

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <Input name="user-id" value={id} onChange={onChangeId} required></Input>
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          required
        ></Input>
      </div>
      <div style={{ maringTop: "10px" }}>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
    </FormWrapper>
  );
};

export default LoginForm;
