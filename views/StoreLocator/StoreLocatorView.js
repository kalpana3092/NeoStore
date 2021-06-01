import React, {useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import MapView from 'react-native-maps';
import StoreLocatorItem from '../subviews/StoreLocatorItem/StoreLocatorItem';
import StoreLocatorViewStyle from './StoreLocatorView.style';
const data = [
  {
    id: '1',
    name: 'stylis morder table jbzxj sadas',
    category: 'Iron table center hagjkjskasas sda',
  },
  {
    id: '2',
    name: 'stylis morder table jbzxj12222  table ska ',
    category: 'Iron table center dfs jhdsds',
  },
  {
    id: '3',
    name: 'stylis morder table jh dfs22',
    category: 'Iron table center da svdjsdk',
  },
];

const StoreLocatorView = ({route, navigation}) => {
  let navTitle = route.params.title;
  useEffect(() => {
    if (navTitle != undefined) {
      navigation.setOptions({
        title: navTitle,
      });
    }
  }, [navTitle]);
  return (
    <SafeAreaView>
      <View style={StoreLocatorViewStyle.containerView}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <View style={StoreLocatorViewStyle.mapView}>
              <MapView
                // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={StoreLocatorViewStyle.map}
                region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}></MapView>
            </View>
          }
          renderItem={(data) => (
            <StoreLocatorItem
              id={data.item.id}
              name={data.item.name}
              category={data.item.category}
              OnPress={(id) => {
                console.log('click');
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default StoreLocatorView;
