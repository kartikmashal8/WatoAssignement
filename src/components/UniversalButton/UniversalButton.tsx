import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './UniversalButton.styles';
type Props = {
  text: string;
  onClick: string;
  navigation: any;
};
const UniversalButton = (props: Props) => {
  return (
    <TouchableOpacity style={styles.universalButtonContainer}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default memo(UniversalButton);
