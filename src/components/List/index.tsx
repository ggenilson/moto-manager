import React, { FC, useState, useEffect } from 'react';

import { ListProps } from './types';

import { paginateData } from '../../utils';

import Input from '../Input';
import Button from '../Button';

import {
    Container,
    ListItem,
    TopItems,
    BottomItems,
    AddButton,
    Footer,
    LeftFooter,
    RightFooter,
} from './styles';

const List: FC<ListProps> = ({ data, fields, onAddClick = () => {} }) => {
    const [active, setActive] = useState<number>(0);
    const [newData, setNewData] = useState<any[]>([]);
    const [disabledBack, setDisabledBack] = useState<boolean>(false);
    const [disabledNext, setDisabledNext] = useState<boolean>(false);

    function handlePaginatePress(type: string) {
        if (type === 'back') {
            active !== 0 && setActive(active - 1);

            return;
        }

        active !== newData.length - 1 && setActive(active + 1);
    }

    useEffect(() => {
        const newRes = paginateData(data, 5);
        setNewData(newRes);
    }, [data]);

    useEffect(() => {
        if (active === 0) {
            setDisabledBack(true);
            setDisabledNext(false);

            return;
        }

        if (active === newData.length - 1) {
            setDisabledNext(true);
            setDisabledBack(false);

            return;
        }

        setDisabledBack(false);
        setDisabledNext(false);
    }, [active]);

    return (
        <Container>
            <TopItems>
                <Input
                    type="text"
                    name="search"
                    icon="bx bx-search-alt-2"
                    label="Search..."
                    classnamecontainer="input-item"
                    simpleInput={true}
                />

                <AddButton onClick={() => onAddClick()}>
                    <i className="bx bx-plus" />
                </AddButton>
            </TopItems>

            <BottomItems>
                {newData?.length ? (
                    newData[active].map((value: any, index: number) => (
                        <ListItem key={`list-item-${index}`}>
                            {Object.keys(fields)?.map((val, i) => (
                                <span key={`list-item-son-${i}`}>
                                    {value[val]}
                                </span>
                            ))}
                        </ListItem>
                    ))
                ) : (
                    <h1>No data founded</h1>
                )}
            </BottomItems>

            <Footer>
                <LeftFooter>
                    <span>
                        Total: {active}/{newData?.length}
                    </span>

                    <span>Items: {newData[active]?.length}</span>
                </LeftFooter>

                <RightFooter>
                    <Button
                        type="button"
                        value="back"
                        style={{ marginRight: '10px' }}
                        onClick={() => handlePaginatePress('back')}
                        disabled={disabledBack}
                    />
                    <Button
                        type="button"
                        value="next"
                        onClick={() => handlePaginatePress('next')}
                        disabled={disabledNext}
                    />
                </RightFooter>
            </Footer>
        </Container>
    );
};

export default List;
