import {StyleSheet} from 'react-native';
import {
  getProportionateScreenHeight,
  getProportionateScreenWidth,
} from '../../core/utils';
import {colors, fonts} from '../../core/Constants';

export const styles = StyleSheet.create({
  inputContainer: {
    width: '92%',
    height: getProportionateScreenHeight(55),
    marginVertical: getProportionateScreenHeight(10),
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: getProportionateScreenWidth(1),
    borderColor: colors.white,
  },
  eyeIcon: {
    height: getProportionateScreenHeight(25),
    width: getProportionateScreenWidth(25),
    tintColor: colors.white,
  },
  textInput: {
    height: 40,
    width: '95%',
    color: colors.white,
    fontFamily: fonts.InterRegular,
    letterSpacing: 0.5,
    paddingVertical: 0,
    fontSize: 18,
  },
  passwordInput: {
    height: 40,
    width: '85%',
    color: colors.white,
    fontFamily: fonts.InterRegular,
    letterSpacing: 0.5,
    paddingVertical: 0,
    fontSize: 18,
  },
});
