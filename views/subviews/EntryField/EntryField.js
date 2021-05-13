import React from 'react';
import {View, Image, TextInput} from 'react-native';
import EntryStyle from '../EntryField/EntryField.style';
import * as Colors from '../../../utilities/Constants/ColorConstant';
const EntryField = (props) => {
  const KeyboardType = (keyType) => {
    switch (keyType) {
      case 1:
        return 'email-address';
      case 2:
        return 'number-pad';
      default:
        return 'default';
    }
  };
  return (
    <View style={EntryStyle.container}>
      <Image source={props.icon} style={EntryStyle.leftIcon} />
      <TextInput
        style={EntryStyle.rightView}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.WHITE}
        keyboardType={KeyboardType(props.keyboardType)}
        secureTextEntry={props.isPassword}
        autoCorrect={false}
        onChangeText={props.onChangeText}
        editable={props.isEditable == undefined ? true : props.isEditable}
      />
    </View>
  );
};
export default EntryField;
