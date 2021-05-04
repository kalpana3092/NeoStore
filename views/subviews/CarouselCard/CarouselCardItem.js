import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{uri: item.imgUrl}} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: ITEM_WIDTH,
  },
  image: {
    width: ITEM_WIDTH,
    height: '100%',
  },
});

export default CarouselCardItem;
