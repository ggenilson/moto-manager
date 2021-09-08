import { Dispatch } from 'redux';

import { ActionType } from '../actionTypes';
import { ActionProps } from '../actions';

export const saveMenuClicked = (value: string) => {
    return (dispatch: Dispatch<ActionProps>) => {
        dispatch({
            type: ActionType.SAVE_MENU_CLICKED,
            payload: value,
        });
    };
};
