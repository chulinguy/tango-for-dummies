const imgReducer = (state = '0', action) => {
  switch (action.type) {
    case 'MOVE_CHANGE':
      return action.value;
    default:
      return state;
  }
};

export default imgReducer;