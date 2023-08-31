import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import mainReducer from './reducers'

const middleware = applyMiddleware(createLogger())

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.error('Error saving state to local storage:', err)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    console.error('Error loading state from local storage:', err)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const store = createStore(mainReducer, persistedState, middleware)

store.subscribe(() => {
  saveToLocalStorage(store.getState())
})

export default store
