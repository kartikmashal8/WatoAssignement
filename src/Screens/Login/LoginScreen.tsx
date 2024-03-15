import React, {memo} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {styles} from './LoginScreen.styles';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../components/TextInput';
import ClickableText from '../../components/ClickableText/ClickableText';
import UniversalButton from '../../components/UniversalButton';
import {getProportionateScreenHeight} from '../../core/utils';
import GoogleButton from '../../components/GoogleButton';
import {screens, texts} from '../../core/Constants';

const LoginScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.LoginContainer}>
          <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>{texts.pleaseSignInText}</Text>
            <View style={styles.loginTextInputContainer}>
              <LinearGradient
                colors={['#272728', '#5D624E']}
                style={styles.linearGradientBackground}
                start={{x: 0, y: 0.5}}
                end={{x: 0.8, y: 0}}>
                <Input placeHolder="Email" />
                <Input placeHolder="Password" />
                <View style={styles.forgotPassword}>
                  <ClickableText
                    onClick={screens.signup}
                    text={texts.forgotPassword}
                    navigation={navigation}
                  />
                </View>
                <UniversalButton
                  text={texts.login}
                  onClick={screens.signup}
                  navigation={navigation}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: getProportionateScreenHeight(15),
                  }}>
                  <Text style={styles.createAccountText}>
                    {texts.newToPlatform}
                  </Text>
                  <ClickableText
                    onClick={screens.signup}
                    text={texts.createAccount}
                    navigation={navigation}
                  />
                </View>
                <Text
                  style={[
                    styles.createAccountText,
                    {
                      marginTop: getProportionateScreenHeight(30),
                      marginBottom: getProportionateScreenHeight(30),
                    },
                  ]}>
                  {texts.or}
                </Text>
                <GoogleButton />
              </LinearGradient>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default memo(LoginScreen);
