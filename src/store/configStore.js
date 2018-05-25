import { createStore, combineReducers } from 'redux';
import signUpReducer from '../reducers/signUpReducers';

export default () => {
  const store = createStore(
    combineReducers({
      signUp: signUpReducer
    })
  )
  return store;
}