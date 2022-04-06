import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import music_data from './src/music-data.json'
import SongCard from './src/components/SongCard/SongCard';
import SearchBar from './src/components/SearchBar/SearchBar';
import React, { useState } from 'react';

export default function App() {
  const [list, setList] = useState(music_data);

  const renderSong = ({ item }) => <SongCard song={item} />

  const renderSeperator = () => <View style={styles.seperator} />

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  }
  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0'
  }
});
