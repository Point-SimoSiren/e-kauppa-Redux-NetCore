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

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
export default store