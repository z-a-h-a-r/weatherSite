// ====================================================
// Imports
// Main
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './appReducer'
import weatherReducer from './weatherReducer'

// ====================================================
// CombineReducers

let reducers = combineReducers({
	weather: weatherReducer,
	app: appReducer,
})

// ====================================================
// Store

let store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
	)
)

// ====================================================
// Exports

export default store
