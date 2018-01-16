const initialState = {
  value: 0,
  favoriteMoves: []
};

export default function flowchart(state = initialState, action) {
  const { value, favoriteMoves } = state;

  switch (action.type) {
    case 'MOVE_CHANGE':
      return {
        value: action.value,
        favoriteMoves
      }
    case 'MARK_MOVE_AS_FAV':
      return {
        value,
        favoriteMoves: [...state.favoriteMoves, action.value]
      }
    default:
      return state;
  }
}