import { Image, StyleSheet, View} from 'react-native';
import {Headline} from "react-native-paper";



export default function CardCharacter({ props: CharactersListItemProps }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }} >
      <Image  testID="character-image" source={{ uri: CharactersListItemProps.image }} style={styles.images} />
      <Headline testID="character-name" style={styles.name}>{CharactersListItemProps.name}</Headline>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:5,
        margin:5,
    },
    images: {
        width: 100,
        height: 100,
        borderRadius: 30,
        marginBottom: 50,
        overflow: 'hidden',
    },
    name: {
        marginLeft: 15,
        fontSize: 18,
        marginBottom:50,
    },

});