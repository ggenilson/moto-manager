import { combineReducers } from 'redux';
import menuReducer from './menuReducer';

export const reducers = combineReducers({
    menu: menuReducer,
});

export type ApplicationState = ReturnType<typeof reducers>;
