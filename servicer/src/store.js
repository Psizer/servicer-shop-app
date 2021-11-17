import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllServiceReducer} from './reducers/serviceReducer'
import { cartReducer } from './reducers/cartReducer'
import { registerUserReducer, loginUserReducer } from './reducers/userReducer'

const rootReducer = combineReducers({
    getAllServiceReducer: getAllServiceReducer,
    cartReducer: cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    cartReducer :{
        cartItems: cartItems
    },
    loginUserReducer:{
        currentUser:currentUser
    }
}
const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;