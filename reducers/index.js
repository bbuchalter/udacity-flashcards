import { CREATE_DECK } from '../actions'
import { CREATE_CARD } from '../actions'

initialDecks = [
  { name: "React" },
  { name: "Redux" }
]

export function decks(state=initialDecks, action) {
  switch(action.type) {
    case CREATE_DECK:
      return (
        state.concat(action.deck)
      )
    default:
      return state
  }
}

initialCards = [
  { question: 'How do you spell React?', answer: 'React', deck: 'React' },
  { question: 'How do you spell Redux?', answer: 'Redux', deck: 'Redux' }
]
export function cards(state=initialCards, action) {
  switch(action.type) {
    case CREATE_CARD:
      return (
        state.concat(action.card)
      )
    default:
      return state
  }
}