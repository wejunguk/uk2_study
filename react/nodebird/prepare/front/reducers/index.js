import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// 액션생성기 = 동적액션
// const changeNickname = (date) => {
//   return {
//     type: 'CHANGE_NICKNAME',
//     date,
//   }
// }

// changeNickname('uk2uk2');
// =
// {
//   type: 'CHANGE_NICKNAME',
//   data: 'uk2uk2',
// }
// 어디서든지 액션을 dispatch해줄 수 있다.
// store.dispatch(changeNickname('hihihi'));

const rootReducer = combineReducers({
  // 서버사이드랜더링을 위해 index 추가
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
