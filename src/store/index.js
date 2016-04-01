import { createStore } from 'redux'
import rootReducer from '../reducers'

const initialState = 0

const store = (state = initialState) => createStore(rootReducer, state)

export default store
