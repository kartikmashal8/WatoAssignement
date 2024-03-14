import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {styles} from './LoginScreen.styles';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../components/TextInput';
import ClickableText from '../../components/ClickableText/ClickableText';
import UniversalButton from '../../components/UniversalButton';
import {getProportionateScreenHeight} from '../../core/utils';
import GoogleButton from '../../components/GoogleButton';
const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.LoginContainer}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Please sign-in to your account</Text>
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
                onClick="SignUp"
                text="Forgot Password?"
                navigation={navigation}
              />
            </View>
            <UniversalButton
              text="Login"
              onClick="SignUp"
              navigation={navigation}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: getProportionateScreenHeight(15),
              }}>
              <Text style={styles.createAccountText}>
                New to our platform?{' '}
              </Text>
              <ClickableText
                onClick="SignUp"
                text="Create an account"
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
              or
            </Text>
            <GoogleButton />
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};
export default memo(LoginScreen);
