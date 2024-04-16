import React from 'react';
import {expect} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import CardCharacter from "../src/components/CardCharacter";
import '@testing-library/jest-native/extend-expect';
import testReducer from './mockReduxerCharacteres';
import charactersReducer from "../src/store/charactersStore";

jest.useFakeTimers();

const store = configureStore({
    reducer: {
        characters: testReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

const Wrapper = ({children}) => (<Provider store={store}> {children} </Provider> );

describe('<CardCharacter />', () => {
    test('Assert displayed values for card character', () => {
        const expectedCharacterInfos = store.getState().characters.characters[0];

        render(<Wrapper>
            <CardCharacter props={expectedCharacterInfos} />
        </Wrapper>)

        expect(screen.getByTestId('character-name')).toHaveTextContent(expectedCharacterInfos.name)

        expect(screen.getByTestId("character-image")).toHaveProp("source", {uri: expectedCharacterInfos.image})

    })
});