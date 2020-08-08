import { createStore, combineReducers } from 'redux';
import { Articles } from './articles'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            article: Articles
        })
    );

    return store;
}