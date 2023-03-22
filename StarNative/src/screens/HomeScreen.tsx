import React, {useState} from 'react';
import {View, Text, Image, Animated, StyleSheet, ScrollView,Dimensions} from 'react-native';
import {useTheme} from "../context/theme-context";
import { Image360viewer } from 'image360viewer';

export default function HomeScreen() {
    const [fadeAnim] = useState(new Animated.Value(0));
    const {theme} = useTheme();

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, []);


    return (

        <ScrollView style={styles.container}>
        <View style={styles.container}>
            <Animated.View
                style={{
                    ...styles.title,
                    opacity: fadeAnim,
                }}>
                <Image
                    source={theme.images.logo}
                    style={styles.logo}
                />
            </Animated.View>
            <Text style={[{color: theme.colors.sideColor}, styles.text]}>
                Welcome to Star Native, the ultimate Star Wars encyclopedia!</Text>
            <Text style={[{color: theme.colors.sideColor}, styles.text]}>
                This application is your go-to source for all information related to the Star
                Wars universe. Whether you're a die-hard fan or just starting to explore
                the world of Star Wars, our app has everything you need to know about
                your favorite characters, planets, and more. Built by developers Bruno
                Cunha and Noan Randon, Star Native uses a Web API to bring you the most
                up-to-date information about the Star Wars universe. From information of
                your favorite characters to a comprehensive overview of the different
                planets, our app has got you covered. So why wait? Download Star Native
                today and start exploring the vast world of Star Wars!
            </Text>
        </View>
        </ScrollView>
    );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Animated.View
          style={{
            ...styles.title,
            opacity: fadeAnim,
          }}
        >
          <Image
            source={require('../../assets/img/logoLightSide.png')}
            style={styles.logo}
          />
        </Animated.View>
        <Text style={styles.title}>
          Welcome to Star Native, the ultimate Star Wars encyclopedia!
        </Text>
        <Text style={styles.text}>
          This application is your go-to source for all information related to
          the Star Wars universe. Whether you're a die-hard fan or just starting
          to explore the world of Star Wars, our app has everything you need to
          know about your favorite characters, planets, and more. Built by
          developers Bruno Cunha and Noan Randon, Star Native uses a Web API to
          bring you the most up-to-date information about the Star Wars universe.
          From information of your favorite characters to a comprehensive overview
          of the different planets, our app has got you covered. So why wait?
          Download Star Native today and start exploring the vast world of Star
          Wars!
        </Text>


          <Image360viewer
              images={[
                  require('../../assets/VaderImages/Vader-1_0000_Camada-22.png'),
                  require('../../assets/VaderImages/Vader-1_0002_Camada-20.png'),
              ]}
              width={300}
          />}

      </View>
    </ScrollView>
  );
}
const SIZE = Dimensions.get('window').width * 0.9;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:5,
        margin:5,
    },
    logo: {
        width: SIZE,
        height: SIZE,
        alignItems:'center',
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
        textAlign: 'justify',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        marginTop:-50,
    },
    text: {
        fontSize: 18,
        textAlign: 'justify',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
});