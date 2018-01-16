const initialState = {
  value: 0,
  favoriteMoves: []
}


export default function flowchart(state = initialState, action) {
  switch (action.type) {
    case MOVE_CHANGE:
      return {
        value: action.value,
        favoriteMoves: state.favoriteMoves
      }
    case MARK_MOVE_AS_FAV:
      return {
        value: state.favoriteMoves,
        favoriteMoves: [ ... state.favoriteMoves, action.value]
      }
    default:
      return state
  }
}
      