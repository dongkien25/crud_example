import {createStore,applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { type } from 'os'

export default createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)
))
 
export type RootState =ReturnType<typeof rootReducer>