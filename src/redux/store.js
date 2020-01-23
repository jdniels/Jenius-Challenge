import { createStore, combineReducers, applyMiddleware } from 'redux'

import { logger, promise } from './middlewares'
import peopleReducer from './reducers/peopleReducer'

const reducers = combineReducers({
    peopleReducer
})

const store = createStore(reducers, applyMiddleware(logger, promise))

export default store