import React, {memo, useState} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {styles} from './SignUpScreen.styles';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../components/TextInput';
import ClickableText from '../../components/ClickableText/ClickableText';
import UniversalButton from '../../components/UniversalButton';
import {getProportionateScreenHeight} from '../../core/utils';
import GoogleButton from '../../components/GoogleButton';
import CheckBox from '@react-native-community/checkbox';
import {colors, screens, texts} from '../../core/Constants';
const initialState = {
  privacyPolicy: false,
};
const SignUpScreen = ({navigation}) => {
  const [state, setState] = useState(initialState);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.SignUpContainer}>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpTitle}>{texts.pleaseSignInText}</Text>
            <View style={styles.signupTextInputContainer}>
              <LinearGradient
                colors={['#272728', '#5D624E']}
                style={styles.linearGradientBackground}
                start={{x: 0, y: 0.3}}
                end={{x: 0.8, y: 0}}>
                <Input placeHolder="Name" />
                <Input placeHolder="Email" />
                <Input placeHolder="Password" />
                <View style={styles.forgotPassword}>
                  <CheckBox
                    tintColors={{true: colors.neonGreen, false: 'black'}}
                    style={{height: 20, width: 20}}
                    value={state.privacyPolicy}
                    onValueChange={value =>
                      setState({
                        ...state,
                        privacyPolicy: value,
                      })
                    }
                  />
                  <Text style={styles.IagreeText}>{texts.iAgree}</Text>
                  <ClickableText
                    text={texts.privacyPolicyText}
                    onClick={screens.signup}
                    navigation={navigation}
                  />
                </View>
                <UniversalButton
                  text={texts.signUp}
                  onClick={screens.login}
                  navigation={navigation}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: getProportionateScreenHeight(15),
                  }}>
                  <Text style={styles.createAccountText}>
                    {texts.alreadyAccountText}
                  </Text>
                  <ClickableText
                    onClick={screens.login}
                    text={texts.signinInsted}
                    navigation={navigation}
                  />
                </View>
                <Text
                  style={[
                    styles.createAccountText,
                    {
                      marginTop: getProportionateScreenHeight(25),
                      marginBottom: getProportionateScreenHeight(25),
                    },
                  ]}>
                  or
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
export default memo(SignUpScreen);
