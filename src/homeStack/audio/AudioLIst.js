import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Sound from 'react-native-sound';

const DATA = [
  {
    id: "1",
    title: "first song",
    song:'first_song.mp3'

  },
  {
    id: "2",
    title: "second song",
    song:'second_song.mp3'
  },
  {
    id: "3",
    title: "third song",
    song:'third_song.mp3'

  },

];

const Item = ({ item, onPress, backgroundColor, textColor, }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>

  </TouchableOpacity>
);

const AudioList = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#8A8A8A' : "#03DAC6";
    const color = item.id === selectedId ? 'white' : 'black';
    // console.log('..........',item);
    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item.id), navigation.navigate('PlayMusic',{data:item})}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export {DATA, AudioList }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent:"center",
    backgroundColor: "#E6FFE6"

  },
  item: {
    padding: 10,
    paddingRight: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:25,

  },
  title: {
    fontSize: 20
  },
});