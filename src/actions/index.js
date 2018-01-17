export const imgChange = value => ({ 
  type: 'MOVE_CHANGE',
  value
});

export const markFavMove = value => ({
  type: 'MARK_MOVE_AS_FAV',
  value
})

export const unmarkFavMove = value => ({
  type: 'UNMARK_MOVE_AS_FAV',
  value
})