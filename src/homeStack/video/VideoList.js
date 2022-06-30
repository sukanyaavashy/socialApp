import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";


const DATA = [
  {
    id: "1",
    title: "First Video",
    video:require('../../assets/big_buck_bunny.mp4')
    //'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  },
  {
    id: "2",
    title: "Second Video",
    video:require('../../assets/cartoon-seamless-rural-landscape-footage.mp4')
    //'https://static.videezy.com/system/resources/previews/000/008/139/original/Flat_Walking_Background.mp4'
  },
  {
    id: "3",
    title: "Third Video",
    video:require('../../assets/Flat_Walking_Background.mp4')
    //'https://static.videezy.com/system/resources/previews/000/022/005/original/cartoon-seamless-rural-landscape-footage.mp4'

  },
];

const Item = ({ item, onPress, backgroundColor, textColor, }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor,{alignItems:'center'}]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>

  </TouchableOpacity>
);

const VideoList = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'grey' : "pink";
    const color = item.id === selectedId ? 'white' : 'black';
    // console.log('..........',item);
    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item.id), navigation.navigate('PlayVideo',{data:item})}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}

      />

    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#08d4c4', 'pink', '#08d4c4', ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{flex:1, }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </LinearGradient>
    </SafeAreaView>


  );
};

export {DATA, VideoList }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
    justifyContent:"center",
    //backgroundColor:'blue'

  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:20,

  },
  title: {
    fontSize: 22,
  },
});
