import React, { FC } from 'react';

import { ListProps } from './types';

import Input from '../Input';

import {
    Container,
    ListItem,
    TopItems,
    BottomItems,
    AddButton,
} from './styles';

const List: FC<ListProps> = ({ data, fields, onAddClick = () => {} }) => {
    return (
        <Container>
            <TopItems>
                <Input
                    type="text"
                    name="search"
                    icon="bx bx-search-alt-2"
                    label="Search..."
                    classNameContainer="input-item"
                    simpleInput={true}
                />

                <AddButton onClick={() => onAddClick()}>
                    <i className="bx bx-plus" />
                </AddButton>
            </TopItems>

            <BottomItems>
                {data.map((value, index) => (
                    <ListItem key={`list-item-${index}`}>
                        {Object.keys(fields)?.map((val, i) => (
                            <span key={`list-item-son-${i}`}>{value[val]}</span>
                        ))}
                    </ListItem>
                ))}
            </BottomItems>
        </Container>
    );
};

export default List;
