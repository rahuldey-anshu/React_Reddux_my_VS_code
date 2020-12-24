import { createStore ,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootReducer from './rootReducer'

//createStore method accepts only a single reducer function as a parameter
const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(logger)))

export default store