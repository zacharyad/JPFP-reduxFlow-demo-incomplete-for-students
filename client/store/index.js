import { createStore, applyMiddleware } from 'redux'; // also get combineReducer
import reducer from './users'
import { createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk';


const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
