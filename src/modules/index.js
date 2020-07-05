import {combineReducers} from 'redux';
import todos from './todo/reducerTodo';
import  weather from '../sagas/reducerSaga'

export default combineReducers({todos, weather});
