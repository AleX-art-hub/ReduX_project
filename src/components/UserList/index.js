import { render } from '@testing-library/react';
import React from 'react';
import {connect} from 'react-redux';
import ACTION_TYPES from '../../actions/actionsType.js';

const UserList = (props) => {
    loadUsers = () => {
        props.getUsersRequest();
        fetch('http://someUrl')
          .then((response) => response.json())
          .then((data) => props.getUsersSuccess(data))
          .catch((e) => props.getUsersError(e));
    };
    useEffect(() => {
      loadUsers();
    });
    render(){
      if(props.error){
        return <div>Error!!!</div>
      }
      if(props.isFetching){
        return <div>LOAD...</div>
      }
    };

    return (
      <ul>
        {
          props.users.map(u =>
            (<li key={u.id}>{`${u.fName} ${u.lName}`}</li>)
            )}
      </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserList);