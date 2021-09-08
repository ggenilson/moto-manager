import { ActionType } from '../actionTypes';
import { ActionProps } from '../actions';
import { MenuType } from '../../@types';

const initialState: string = MenuType.DRIVER;

const reducer = (state: string = initialState, action: ActionProps) => {
    switch (action.type) {
        case ActionType.SAVE_MENU_CLICKED:
            return (state = action.payload);
        default:
            return state;
    }
};

export default reducer;
