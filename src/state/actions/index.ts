import { ActionType } from '../actionTypes';

interface SaveMenuClickedAction {
    type: ActionType.SAVE_MENU_CLICKED;
    payload: string;
}

export type ActionProps = SaveMenuClickedAction;
