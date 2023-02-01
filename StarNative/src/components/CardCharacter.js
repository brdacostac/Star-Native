import { TouchableOpacity, Text, Image } from 'react-native';

export default function CardCharacter({name, image}) {
        return (
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
              <Image
                source={{uri: 'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg'}}
                style={{
                    width: 100, 
                    height: 100, 
                    borderRadius: 100, 
                    overflow: 'hidden'
                  }}
                />
              <Text style={{paddingLeft: 20, fontSize: 20, fontWeight: "700"}}>{name}</Text>
            </TouchableOpacity>
          );
  }