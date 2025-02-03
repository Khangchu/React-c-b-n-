import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // 🛠 Sửa đổi ở đây
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
