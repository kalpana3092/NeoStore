import React from 'react';
import {View, Dimensions, Platform, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/stack';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import * as Colors from '../../../utilities/Constants/ColorConstant';
import HomeViewModel from '../../../viewmodel/Home/HomeViewModel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItem';
const size = Dimensions.get('window');

const data = HomeViewModel.GetCaroselData();
const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  return (
    <View
      style={{
        height:
          size.height -
          (size.width +
            20 +
            headerHeight +
            insets.bottom +
            (Platform.OS === 'android' ? StatusBar.currentHeight : 0)),
        marginBottom: 10,
      }}>
      <Carousel
        layout="stack"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        height={50}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
        }}
        inactiveDotOpacity={1.0}
        dotColor={Colors.APP_BG}
        inactiveDotColor={Colors.GREY}
        inactiveDotScale={1.0}
        tappableDots={true}
        containerStyle={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: -20,
          justifyContent: 'flex-end',
        }}
      />
    </View>
  );
};

export default CarouselCards;
