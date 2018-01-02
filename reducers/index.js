import { CREATE_DECK } from '../actions'

export function decks(state=[], action) {
  switch(action.type) {
    case CREATE_DECK:
      return (
        state.concat(action.deck)
      )
    default:
      return state
  }
}