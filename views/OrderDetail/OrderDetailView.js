import React from 'react';
import {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import OrderDetailItem from '../subviews/OrderDetailItem/OrderDetailItem';
import OrderDetailStyle from './OrderDetailView.style';

const data = [
  {
    id: '1',
    name: 'Prembroke',
    price: '₹ 45',
    category: 'Chair',
    qty: '4',
  },
  {
    id: '2',
    name: 'Prembroke1',
    price: '₹ 25',
    category: 'Table',
    qty: '3',
  },
  {
    id: '3',
    name: 'Prembroke2',
    price: '₹ 45',
    category: 'Sofa',
    qty: '2',
  },
];
const OrderDetailView = ({route, navigation}) => {
  const navTitle = route.params.title;
  useEffect(() => {
    if (navTitle != undefined) {
      navigation.setOptions({
        title: 'Order ID : ' + route.params.title,
      });
    }
  }, [navTitle]);
  return (
    <SafeAreaView>
      <View style={OrderDetailStyle.mainView}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ListFooterComponent={
            <View>
              <View style={OrderDetailStyle.footerView}>
                <Text style={[OrderDetailStyle.totalText, {marginLeft: 15}]}>
                  Totol
                </Text>
                <Text style={[OrderDetailStyle.totalText, {marginRight: 15}]}>
                  ₹ 100
                </Text>
              </View>
              <View style={OrderDetailStyle.horizontalLine} />
            </View>
          }
          renderItem={(data) => (
            <OrderDetailItem
              id={data.item.id}
              name={data.item.name}
              price={data.item.price}
              qty={data.item.qty}
              category={data.item.category}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default OrderDetailView;
