export type InputProps = {
    type: string;
    className?: string;
    classnamecontainer?: string;
    icon: string;
    name: string;
    label: string;
    simpleInput?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};
