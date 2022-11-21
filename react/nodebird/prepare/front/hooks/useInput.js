// const [id, setId] = useState('');
// const onChangeId = useCallback((e) => {
//   setId(e.value.target);
// }, []);

// 커스텀 훅 변경

import { useState, useCallback } from "react";

const useInput = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};
export default useInput;
