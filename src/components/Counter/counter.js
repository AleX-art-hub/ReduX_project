import React from 'react';
import { connect } from 'react-redux';
import ACTIONS_TYPES from '../../Actions/actionsType.js';
import ACTION_TYPES from '../../Actions/actionsType.js';

const Counter = (props) => {
  return (
    <>
      <h1>{props.value}</h1>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.increment}>+</button>
    </>
  );
};

const mapStateToProps = (state) => {
  const { value } = state;
  return {
    value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: ACTION_TYPES.COUNTER_INCREMENT}),
    decrement: () => dispatch({ type: ACTIONS_TYPES.COUNTER_DECREMENT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);