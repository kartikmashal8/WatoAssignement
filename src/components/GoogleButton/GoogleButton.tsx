import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {images} from '../../core/images';
import {styles} from './GoogleButton.styles';
import {texts} from '../../core/Constants';
const GoogleButton = () => {
  return (
    <TouchableOpacity style={styles.GoogleButtonContainer}>
      <Image style={styles.googleImage} source={images.googleIcon} />
      <Text style={styles.googleButtonText}>{texts.continueWithGoogle}</Text>
    </TouchableOpacity>
  );
};
export default GoogleButton;
