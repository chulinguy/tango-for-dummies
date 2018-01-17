const favReduce = (state = [], action) => {
  const { favoriteMoves } = state;
  switch (action.type) {
    case 'MARK_MOVE_AS_FAV':
      return [...favoriteMoves, action.value];
    case 'UNMARK_MOVE_AS_FAV':
      return favoriteMoves.filter(move => move !== action.value);
    default:
      return state;
  }
};

export default favReduce;
