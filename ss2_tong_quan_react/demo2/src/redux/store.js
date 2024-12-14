
import { createStore } from 'redux';
import {rootReducer} from './reducers';

// Tạo Redux store và cung cấp rootReducer
const store = createStore(rootReducer);

export default store;