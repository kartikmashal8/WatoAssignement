import React, {memo} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './GetStartedScreen.styles';
import {images} from '../../core/images';
import LinearGradient from 'react-native-linear-gradient';
import ClickableText from '../../components/ClickableText/ClickableText';
const GetStartedScreen = ({navigation}) => {
  return (
    <View style={styles.HomeContainer}>
      <View
        style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
        <Image source={images.sparkles} style={styles.spaklesImage} />
        <Image source={images.Vector8} style={styles.vector8} />
        <Image source={images.Vector5} style={styles.vector5} />
      </View>
      <View style={styles.cotentContainer}>
        <View style={styles.watoText}>
          <Text style={styles.waText}>wa</Text>
          <Image source={images.tText} style={styles.tTextImage} />
          <Image source={images.oText} style={styles.oTextImage} />
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            Zero Cost{'\n'}WhatsApp Messaging{'\n'}platform
          </Text>
        </View>
        <View />
        <View style={styles.HomeFooterConatiner}>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => navigation.navigate('Login')}>
            <LinearGradient
              colors={['#696C70', '#FFFFFF']}
              style={styles.linearGradientBorder}
              start={{x: 1, y: 1}}
              end={{x: 0.5, y: 0.5}}>
              <View style={styles.linearGradientContainer}>
                <LinearGradient
                  colors={['#141517', '#2E2F30']}
                  style={styles.linearGradient}
                  start={{x: 1, y: 1}}
                  end={{x: 0.5, y: 1}}>
                  <Text style={styles.getStartedText}>Get Strated</Text>
                </LinearGradient>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.FooterElements}>
            <Text style={styles.footerText}>Already have an Account? </Text>
            <ClickableText
              text={'Sign in instead'}
              onClick="Login"
              navigation={navigation}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default memo(GetStartedScreen);
