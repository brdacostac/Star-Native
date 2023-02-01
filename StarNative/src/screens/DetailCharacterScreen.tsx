import { View, Text } from 'react-native';

export default function DetailCharacterScreen({props: character}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      );
  }