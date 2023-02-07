import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

export default function FavoritesScreen() {
  const favoriteCharacters = useSelector(state => state.favoriteCharacters);

  return (
    <View>
      {favoriteCharacters.map((character: string, index : number) => (
        <Text key={index}>{character}</Text>
      ))}
    </View>
  );
};
