import { TouchableOpacity, Text, Image } from 'react-native';



export default function CardCharacter({ props: CharactersListItemProps, navigation }) {

  return (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }} onPress={() => navigation.navigate('CharacterDetails', { character: CharactersListItemProps })}>
      <Image source={{ uri: CharactersListItemProps.image }} style={{
                    width: 100, 
                    height: 100, 
                    borderRadius: 100, 
                    overflow: 'hidden'
                  }} />
      <Text>{CharactersListItemProps.name}</Text>
    </TouchableOpacity>
  );
}