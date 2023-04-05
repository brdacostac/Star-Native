import React from 'react';
import {expect} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import Characters from "../src/components/CardCharacter"; // nom du composant à tester
import '@testing-library/jest-native/extend-expect';
import testReducer from './mockReduxerCharacteres';
import charactersReducer from "../src/store/charactersStore";

jest.useFakeTimers();

const store = configureStore({
    reducer: {
        charactersReducer: testReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

const Wrapper = ({children}) => (<Provider store={store}> {children} </Provider> );

describe('<Characters />', () => {
    test('Assert displayed values', () => {
        const expectedCharacterInfos = store.getState().charactersReducer.characters[0];

        render(<Wrapper>
                <Characters/>
            </Wrapper>)

        // Get displayed text component and assert that its value contains our character name
        expect(screen.getByTestId('character-name')).toHaveTextContent(expectedCharacterInfos.name)
        expect(screen.getByTestId('character-description')).toHaveTextContent(expectedCharacterInfos.description)
        expect(screen.getByTestId('character-rating')).toHaveTextContent(expectedCharacterInfos.rating.toString())

        expect(screen.getByTestId("character-image")).toHaveProp("source", {uri: expectedCharacterInfos.image})

        let characterListSize = store.getState().charactersReducer.characters.length;
        fireEvent.press(screen.getByTestId("remove-button"))
        expect(store.getState().charactersReducer.characters.length).toBe(characterListSize - 1)
    })
});
