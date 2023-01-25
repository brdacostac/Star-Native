import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import DetailsScreen from './src/components/DetailsScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

// let customFonts = {
//   'Arial': require('./src/assets/fonts/arial.ttf'),
// }
// interface iState {
//   fontsLoaded: boolean;
// }
// interface IProps {
// }

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export default function App() {
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <Text>Je t'aime mon bebou!</Text>
      <StatusBar style="auto" />
    </View>
=======
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Settings"
                component={HomeScreen}
              />
              <SettingsStack.Screen name="Profile" component={DetailsScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Second">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
>>>>>>> ae9d4c81d19ee12dba7d4ce9ce41faf48ae4f46b
  );
}


//export default class App extends React.Component<IProps, iState> {
//   constructor(props: IProps) {
//     super(props);      
//     this.state = {
//         fontsLoaded: false,
//     }
//   }
//   render() {
//       return (
//           <SafeAreaView style={styles.container}>
//               <MainTabNavigator />
//           </SafeAreaView>
//       );
//   }
// }
//TailwindProvider
//NavigatioContainer

{/* <View style={styles.container}>
      <Text>Je t'aime mon bebou! </Text>
      <StatusBar style="auto" />
    </View> */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
