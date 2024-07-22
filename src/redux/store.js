import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import redux-thunk directly
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
