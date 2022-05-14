import React from 'react';
import LoaderViewStyle from './LoaderView.style';
import {View, Modal, ActivityIndicator} from 'react-native';
import * as Colors from '../../../utilities/Constants/ColorConstant';
const LoaderView = (props) => {
  return (
    <Modal
      transparent={true}
      visible={props.visible}
      animationType="fade"
      style={LoaderViewStyle.modal}>
      <View style={LoaderViewStyle.blurbg} />

      <View style={LoaderViewStyle.bg}>
        <View style={LoaderViewStyle.loaderContainer}>
          <ActivityIndicator size="large" color={Colors.APP_BG} />
        </View>
      </View>
    </Modal>
  );
};

export default LoaderView;
