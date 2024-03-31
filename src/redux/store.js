import { createStore } from 'redux';
import reducer from './reducer/reducer';

let store = createStore(reducer) // reducer는 store를 바꿔주는 함수

export default store;