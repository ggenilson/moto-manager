import { HistoryType } from '../../@types';
export interface ILoginFormValue {
    email: string;
    password: string;
}

export type SignInProps = {
    history: HistoryType;
};
