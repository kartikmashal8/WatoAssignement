import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../core/Constants';
import {
  getProportionateScreenHeight,
  getProportionateScreenWidth,
} from '../../core/utils';
export const styles = StyleSheet.create({
  SignUpContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundBlack,
  },
  signUpContainer: {
    width: '90%',
    alignSelf: 'center',
    height: '75%',
  },
  signUpTitle: {
    color: colors.white,
    marginBottom: getProportionateScreenHeight(40),
    fontSize: 20,
    fontFamily: fonts.GTSuperRegular,
    fontWeight: '400',
    lineHeight: 20,
    zIndex: 10,
  },
  linearGradientBackground: {
    width: '100%',
    height: '95%',
    alignItems: 'center',
    paddingTop: getProportionateScreenHeight(10),
    borderRadius: 15,
  },
  forgotPassword: {
    width: '90%',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: getProportionateScreenHeight(10),
    marginBottom: getProportionateScreenHeight(40),
  },
  createAccountText: {
    fontFamily: fonts.InterRegular,
    fontWeight: '400',
    fontSize: 14,
    opacity: 0.7,
    color: colors.white,
    letterSpacing: 0.2,
  },
  IagreeText: {
    marginHorizontal: getProportionateScreenWidth(3),
    paddingLeft: getProportionateScreenWidth(8),
    fontSize: 14,
    fontFamily: fonts.InterRegular,
    fontWeight: '400',
    color: colors.white,
  },
});
