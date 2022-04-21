// 分别引入各个模块的reducer，可以优化不必每次都单独模块引入
import userReducer from './user';
import routerReducer from './router';

// 合并reducer
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  return (state = {}, action) => {
    const nextState = {};
    reducerKeys.forEach((reducerKey) => {
      nextState[reducerKey] = reducers[reducerKey](state[reducerKey], action);
    });

    return nextState;
  };
}

// 导出reducer
export default combineReducers({ userReducer, routerReducer });
