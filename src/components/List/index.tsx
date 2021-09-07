import React, { FC } from 'react';

import { ListProps } from './types';

import { Container, ListItem } from './styles';

const List: FC<ListProps> = ({ data, fields }) => {
    return (
        <Container>
            {data.map((value, index) => (
                <ListItem key={`list-item-${index}`}>
                    {Object.keys(fields)?.map((val, i) => (
                        <span key={`list-item-son-${i}`}>{value[val]}</span>
                    ))}
                </ListItem>
            ))}
        </Container>
    );
};

export default List;
