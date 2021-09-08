import { UserInfoType } from '../../contexts/AuthContext/types';

export type ListProps = {
    data: any[];
    fields: any;
    onAddClick?: () => void;
    acceptButton?: (value: any) => void;
};
