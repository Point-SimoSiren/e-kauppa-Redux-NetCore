import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import tuoteReducer from './reducers/tuoteReducer'
import notificationReducer from './reducers/notificationReducer'
import koriReducer from './reducers/koriReducer'

const reducer = combineReducers({
    tuotteet: tuoteReducer,
    notification: notificationReducer,
    korituotteet: koriReducer
})

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(
    reducer, persistedState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store