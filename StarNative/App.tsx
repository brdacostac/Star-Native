import * as React from 'react';


import Navigation from './src/navigation/Navigation';
import {SafeAreaProvider} from "react-native-safe-area-context";


export default function App() {
    return (
      <SafeAreaProvider>
        <Navigation></Navigation>
      </SafeAreaProvider>
    );
}

