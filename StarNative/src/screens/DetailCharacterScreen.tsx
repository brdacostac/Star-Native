import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function DetailCharacterScreen({route}) {
  const character = route.params.character;
  const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Go back"
            onPress={() => navigation.goBack()}
          />
          <Text>{character.name}</Text>
        </View>
      );
  }