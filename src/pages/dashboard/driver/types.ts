export interface IFormValue {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export type DriverProps = {
    whatRender?: (value: number) => void;
};
