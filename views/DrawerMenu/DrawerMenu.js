import React, {useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import DrawerViewModel from '../../viewmodel/Drawer/DrawerViewModel';
import DrawerHeader from './DrawerHeader';
import DrawerItem from './DrawerItem';
import * as Colors from '../../utilities/Constants/ColorConstant';
import DrawerMenuStyle from './DrawerMenu.style';

const DrawerMenu = (props) => {
  const [selectedId, SetSelectedId] = useState(-1);
  const MenuItems = DrawerViewModel.GetMenuItems();

  const renderItem = ({item}) => {
    const backgroundColor = Colors.MENU_BG;
    return (
      <DrawerItem
        item={item}
        onPress={() => {
          SetSelectedId(item.id);
          console.log(item);
          const Page = DrawerViewModel.OnItemSelected(item.id);
          console.log(Page);
          if (Page != undefined) {
            if (Page.id != undefined) {
              if (Page.id === '10') {
                console.log('logout');
                return;
              }
            }
            props.navigation.navigate(Page.page, {
              ProductId: Page.id != undefined ? Page.id : '',
              title: Page.title != undefined ? Page.title : '',
            });
          }
        }}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <SafeAreaView style={DrawerMenuStyle.container}>
      <FlatList
        data={MenuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        ListHeaderComponent={DrawerHeader}
        style={DrawerMenuStyle.flatlistBg}
        ItemSeparatorComponent={() => {
          return <View style={DrawerMenuStyle.separatorStyle}></View>;
        }}
      />
    </SafeAreaView>
  );
};
export default DrawerMenu;
