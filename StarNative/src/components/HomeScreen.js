import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Home Screenee</Text>
              <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
                />
            </View>
          );
  }