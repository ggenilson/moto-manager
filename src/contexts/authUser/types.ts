export type UserInfoProps = {
    name: string;
    email: string;
    state: string;
    avatar: string;
};

export type ContextDefaultValuesProps = {
    authUser: UserInfoProps;
    setAuthUser: (value: object) => void;
};
