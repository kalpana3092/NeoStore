import React from 'react';
import {useEffect} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import RouteConstant from '../../utilities/Constants/RouteConstant';
import OrderItem from '../subviews/OrderItem/OrderItem';
import MyOrderStyle from './MyOrders.style';

const data = [
  {
    id: '15878',
    date: '09 Aug 21',
    price: '₹ 45',
  },
  {
    id: '17846',
    date: '07 Aug 21',
    price: '₹ 25',
  },
  {
    id: '17977',
    date: '08 Aug 21',
    price: '₹ 45',
  },
];
const MyOrders = ({route, navigation}) => {
  const navTitle = route.params.title;
  useEffect(() => {
    if (navTitle != undefined) {
      navigation.setOptions({
        title: route.params.title,
      });
    }
  }, [navTitle]);
  return (
    <SafeAreaView>
      <View style={MyOrderStyle.mainView}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={(data) => (
            <OrderItem
              id={data.item.id}
              date={data.item.date}
              price={data.item.price}
              OnPress={(id) => {
                navigation.navigate(RouteConstant.OrderDetail, {
                  title: data.item.id,
                });
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default MyOrders;
