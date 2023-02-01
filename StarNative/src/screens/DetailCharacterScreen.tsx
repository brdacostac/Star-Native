import { View, Text } from 'react-native';

export default function DetailCharacterScreen({route}) {
  const character = route.params.character;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{character.name}</Text>
        </View>
      );
  }