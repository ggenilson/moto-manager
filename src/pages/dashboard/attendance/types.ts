export type AttendanceType = {
    street: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
};

export type AttendanceSend = {
    origin: AttendanceType;
    destination: AttendanceType;
};

export interface IFormValue {
    street: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;

    street_: string;
    city_: string;
    state_: string;
    latitude_: number;
    longitude_: number;
}

export type AttendanceProps = {
    whatRender?: (value: number) => void;
};
