
// 상태를 담고 있는 객체
function createStore() {
  let state;
  let handlers = [];

  function send(action) {
    // 항상 state 가 새로운 상태를 가지는 구조가 됨 
    state = worker(state, action);
    handlers.forEach(handler => handler());
  }

  function subscribe(handler) {
    handlers.puh(handler);
  }

  function getState() {
    return state;
  }

  return {
    send,
    getState,
    subscribe,
  };
}

function worker(state = { count: 0 }, action) {
  switch(action.type) {
    case 'increase':
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
}

const store = createStore(worker);

store.subscribe(function() {
  console.log(store.getState());
});


store.send({ type: 'increase' });
store.send({ type: 'increase' });