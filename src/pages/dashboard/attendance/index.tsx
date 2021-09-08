import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';

import { validationSchema } from './validationSchema';
import { AttendanceProps, IFormValue, AttendanceSend } from './types';

import { saveAttendance } from './utils';

import Button from '../../../components/Button';
import { DataValueType } from '../../../contexts/AuthContext/types';

import { ListButtons, ContainerForm, LeftForm } from './styles';
import Location from './location';

const Attendance: FC<AttendanceProps> = ({ whatRender = () => {} }) => {
    const initialValues: IFormValue = {
        street: '',
        city: '',
        state: '',
        latitude: 0,
        longitude: 0,

        street_: '',
        city_: '',
        state_: '',
        latitude_: 0,
        longitude_: 0,
    };

    async function handleSubmit(data: AttendanceSend, status: DataValueType) {
        const res = await saveAttendance(data);

        if (res) {
            toast.success('Sucess!');

            whatRender(0);
            status(true);

            return;
        }

        toast.error('Error!');
        status(false);

        return;
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(
                {
                    street,
                    city,
                    state,
                    latitude,
                    longitude,
                    street_,
                    city_,
                    state_,
                    latitude_,
                    longitude_,
                },
                { setSubmitting, resetForm },
            ) => {
                setSubmitting(false);
                let newData = {
                    origin: { street, city, state, latitude, longitude },
                    destination: {
                        street: street_,
                        city: city_,
                        state: state_,
                        latitude: latitude_,
                        longitude: longitude_,
                    },
                };

                handleSubmit(newData, status => status && resetForm());
            }}
        >
            <Form>
                <ContainerForm>
                    <LeftForm>
                        <Location header="Origin" />
                    </LeftForm>

                    <LeftForm>
                        <Location
                            header="Destination"
                            streetName="street_"
                            cityName="city_"
                            stateName="state_"
                            latitudeName="latitude_"
                            longitudeName="longitude_"
                        />
                    </LeftForm>
                </ContainerForm>

                <ListButtons>
                    <Button
                        type="button"
                        value="Back"
                        style={{ marginTop: '25px' }}
                        onClick={() => whatRender(0)}
                    />

                    <Button
                        type="submit"
                        value="Save"
                        style={{
                            marginTop: '25px',
                            justifyContent: 'flex-end',
                        }}
                    />
                </ListButtons>
            </Form>
        </Formik>
    );
};

export default Attendance;
