import { createStore, compose} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '@reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    composeEnhancers()
);
export default store;