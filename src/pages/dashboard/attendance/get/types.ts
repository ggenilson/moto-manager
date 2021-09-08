import { AttendanceType } from '../types';

export type AttendanceReturnType = {
    status: string;
    _id: string;
    origin: AttendanceType;
    destination: AttendanceType;
    createdAt: string;
    updatedAt: string;
};

export type AttendanceSimplifiedType = {
    status: string;
    _id: string;
    street: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
};
