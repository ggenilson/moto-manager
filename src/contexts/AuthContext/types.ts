export type SignInDataType = {
    email: string;
    password: string;
};

export type AuthContextType = {
    isAuthenticated: boolean;
    user: UserInfoType | null;
    signIn: (data: SignInDataType) => Promise<void>;
    signOut: () => void;
};

export type UserInfoType = {
    _id: string;
    access: string;
    name: string;
    email: string;
};

export type UserInfoReturnType = {
    user: UserInfoType;
    token: string;
};
