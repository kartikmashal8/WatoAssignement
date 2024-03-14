import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './ClickableText.styles';
type Props = {
  text: string;
  onClick: string;
  navigation: any;
};
const ClickableText = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate(props.onClick)}>
      <Text style={styles.clickableText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default memo(ClickableText);
