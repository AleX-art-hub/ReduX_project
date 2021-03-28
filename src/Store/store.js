import {createStore} from 'redux';
import ACTION_TYPES from '../../Actions/actionsType.js';


const initialState = {
  value: 0,
};

// !!!! все значения состояний меняются в редюсере
const reducer = (prevState = initialState, action) => {
  if (action.type === ACTION_TYPES.COUNTER_INCREMENT) {
    return {
      value: prevState.value + 1,
    };
  } else if (action.type === ACTION_TYPES.COUNTER_DECREMENT) {
    return {
      value: prevState.value - 1,
    };
  } else {
    return prevState;
  }
  return prevState;
};

const store = createStore(reducer);

export default store;