import { TouchableOpacity, Text, Image } from 'react-native';

type CharactersListItemProps = {
  id: number;
  name: string;
  image: string;
};

export default function CardCharacter({ props: CharactersListItemProps }) {
  return (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
      <Image source={{ uri: CharactersListItemProps.image }} />
      <Text>{CharactersListItemProps.name}</Text>
    </TouchableOpacity>
  );
}