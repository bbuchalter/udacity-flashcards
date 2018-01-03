import { CREATE_DECK } from '../actions'
import { CREATE_CARD } from '../actions'

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

export function cards(state=[], action) {
  switch(action.type) {
    case CREATE_CARD:
      return (
        state.concat(action.card)
      )
    default:
      return state
  }
}