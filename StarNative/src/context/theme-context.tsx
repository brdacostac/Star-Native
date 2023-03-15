import React, { useCallback,useContext,useMemo, useState } from 'react';
import {useColorScheme} from "react-native";

import{
    Provider as PaperProvider,
    MD3DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";


const lightTheme = {
    ...NavigationDefaultTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      sideColor: '#ebb807',
      icon: '#000000' // définit la couleur des icônes en noir
    },
    images: {
      logo: require('../../assets/img/logoLightSide.png')
    }
  };

const darkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      sideColor: '#eb0707',
      icon: '#ffffff' // définit la couleur des icônes en blanc
    },
    images: {
      logo: require('../../assets/img/logoDarkSide.png')
    }
  };
export type Theme = typeof  lightTheme;

export type ThemeType = 'dark' | 'light';

export interface ThemeContextValue{
    theme:Theme;
    themeType: ThemeType;
    isDarkTheme: boolean;
    toggleThemeType:()=>void;
    setThemeType: React.Dispatch<React.SetStateAction<ThemeContextValue>>;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
    theme:lightTheme,
    themeType:'light',
    isDarkTheme:false,
    setThemeType:()=>{},
    toggleThemeType:()=>{},
});

export const useTheme = () => useContext(ThemeContext);

export interface ThemeContextProviderProps{
    children:React.ReactNode;
}

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    const colorScheme = useColorScheme();
    const [themeType, setThemeType] = useState<ThemeType>(colorScheme || 'light');

    const toggleThemeType = useCallback(() => {
        setThemeType(prev => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    const isDarkTheme = useMemo(() => themeType === 'dark', [themeType]);
    const theme = useMemo(
        () => (isDarkTheme ? darkTheme : lightTheme),
        [isDarkTheme],
    );

    return (
        <NavigationContainer theme={theme}>
            <PaperProvider theme={theme}>
                <ThemeContext.Provider
                    value={{
                        theme,
                        themeType,
                        isDarkTheme,
                        setThemeType,
                        toggleThemeType,
                    }}>
                    {children}
                </ThemeContext.Provider>
            </PaperProvider>
        </NavigationContainer>
    );
};
