import React, { FC } from 'react';
import Input from '../../../../components/Input';
import { LocationProps } from './types';

const Location: FC<LocationProps> = ({
    header = '',
    streetName="street",
    cityName="city",
    stateName="state",
    latitudeName="latitude",
    longitudeName="longitude",
}) => {
    return (
        <div className="location-container">
            <div className="header">
                <span>{header}</span>
            </div>

            <Input
                type="text"
                name={streetName}
                label="Street"
                icon="bx bx-street-view"
            />

            <Input
                type="text"
                name={cityName}
                label="City"
                icon="bx bxs-city"
            />

            <Input
                type="text"
                name={stateName}
                label="State"
                icon="bx bx-home-alt"
            />

            <Input
                type="number"
                name={latitudeName}
                label="Latitude"
                icon="bx bxs-right-top-arrow-circle"
            />

            <Input
                type="number"
                name={longitudeName}
                label="Longitude"
                icon="bx bxs-right-down-arrow-circle"
            />
        </div>
    );
};

export default Location;
