import { View, Text, ScrollView } from 'react-native';
import CardCharacter from '../components/CardCharacter';

export default function CharactersScreen() {
        return (
            <View>
              <Text>Home Screen</Text>
              <ScrollView 
              contentContainerStyle={{
                paddingVertical: 15
              }} showsVerticalScrollIndicator              >
                <CardCharacter name="DarkVader" image="eee"/>
              </ScrollView>
            </View>
          );
  }