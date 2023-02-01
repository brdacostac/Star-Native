import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/img/icon.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Star Native</Text>
                <Text style={styles.text}>
                    Welcome to Star Native, the ultimate Star Wars encyclopedia! This application is your go-to source for all
                    information related to the Star Wars universe. Whether you're a die-hard
                    fan or just starting to explore the world of Star Wars, our app has everything
                    you need to know about your favorite characters, planets, and more.
                    Built by developers Bruno Cunha and Noan Randon, Star Native uses a Web API
                    to bring you the most up-to-date information about the Star Wars universe.
                    From information of your favorite characters to a comprehensive overview of the different planets, our app has got you covered. So why wait?
                    Download Star Native today and start exploring the vast world of Star Wars!
                </Text>
            </View>
          );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
});