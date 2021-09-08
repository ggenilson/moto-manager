import React, { FC, createContext, useState } from 'react';

import { ContextDefaultValuesType } from './types';

const contexDefaultValues: ContextDefaultValuesType = {
    text: 'View',
    setText: () => {},
};

export const InfoCardContext =
    createContext<ContextDefaultValuesType>(contexDefaultValues);

const InfoCardProvider: FC = ({ children }) => {
    const [text, setLocation] = useState<string>(contexDefaultValues.text);

    const setText = (location: string) => setLocation(location);

    return (
        <InfoCardContext.Provider value={{ text, setText }}>
            {children}
        </InfoCardContext.Provider>
    );
};

export default InfoCardProvider;
