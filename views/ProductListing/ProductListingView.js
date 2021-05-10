import React from 'react';
import {useEffect} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import ProductItem from '../subviews/ProductItem/ProductItem';
import ProductListingStyle from './ProductListingView.style';

const data = [
  {
    id: '1',
    name: 'stylis morder table jbzxj',
    category: 'Iron table center',
    price: 'RS. 26,000',
  },
  {
    id: '2',
    name: 'stylis morder table jbzxj12222',
    category: 'Iron table center dfs',
    price: 'RS. 25,000',
  },
  {
    id: '3',
    name: 'stylis morder table jh dfs22',
    category: 'Iron table center da',
    price: 'RS. 28,000',
  },
];
const ProductListingView = ({route, navigation}) => {
  // const navTitle = route.params.title;
  // useEffect(() => {
  //   if (navTitle != undefined) {
  //     navigation.setOptions({
  //       title: route.params.title,
  //     });
  //   }
  // }, [navTitle]);
  return (
    <SafeAreaView>
      <View style={ProductListingStyle.mainView}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={(data) => (
            <ProductItem
              id={data.item.id}
              name={data.item.name}
              price={data.item.price}
              category={data.item.category}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default ProductListingView;
