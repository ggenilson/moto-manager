import React, { FC, useState, useEffect } from 'react';

import { ListProps } from './types';

import { getUserInfo, paginateData } from '../../utils';

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
    HeaderList,
} from './styles';
import { searchInArray } from './utils';

const List: FC<ListProps> = ({
    data,
    fields,
    onAddClick = () => {},
    acceptButton,
}) => {
    const [active, setActive] = useState<number>(0);
    const [newData, setNewData] = useState<any[]>([]);
    const [oldNewData, setOldNewData] = useState<any[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [disabledBack, setDisabledBack] = useState<boolean>(false);
    const [disabledNext, setDisabledNext] = useState<boolean>(false);

    function handlePaginatePress(type: string) {
        if (type === 'back') {
            active !== 0 && setActive(active - 1);

            return;
        }

        active !== newData.length - 1 && setActive(active + 1);
    }

    function handleInputSearchBlur(value: string) {
        let newRes = searchInArray(oldNewData, value);
        setNewData(newRes);
    }

    useEffect(() => {
        const newRes = paginateData(data, 4);
        setNewData(newRes);
        setOldNewData(newRes);
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
                    // value={searchText}
                    // onBlur={() => handleInputSearchBlur(searchText)}
                    // onChange={e => setSearchText(e.target.value)}
                />

                <AddButton onClick={() => onAddClick()}>
                    <i className="bx bx-plus" />
                </AddButton>
            </TopItems>

            <HeaderList>
                {Object.keys(fields).map((value: any, index) => (
                    <div key={`header-${index}`}>
                        <span>{fields[value].title}</span>
                    </div>
                ))}
            </HeaderList>

            <BottomItems>
                {newData?.length ? (
                    newData[active].map((value: any, index: number) => (
                        <ListItem key={`list-item-${index}`}>
                            <>
                                {Object.keys(fields)?.map((val, i) => (
                                    <span key={`list-item-son-${i}`}>
                                        {value[val]}
                                    </span>
                                ))}

                                {acceptButton &&
                                    getUserInfo()?.access === 'driver' && (
                                        <button
                                            type="button"
                                            className="btn-accept"
                                            onClick={() => acceptButton(value)}
                                        >
                                            accept
                                        </button>
                                    )}
                            </>
                        </ListItem>
                    ))
                ) : (
                    <h4>No data founded</h4>
                )}
            </BottomItems>

            <Footer>
                <LeftFooter>
                    <span>
                        Total: {active}/{newData?.length - 1}
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
