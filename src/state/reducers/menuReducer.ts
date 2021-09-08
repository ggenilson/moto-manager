import { ActionType } from '../actionTypes';
import { ActionProps } from '../actions';

const initialState: string = 'driver';

const reducer = (state: string = initialState, action: ActionProps) => {
    switch (action.type) {
        case ActionType.SAVE_MENU_CLICKED:
            return (state = action.payload);
        default:
            return state;
    }
};

export default reducer;
