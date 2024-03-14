import {Platform, StyleSheet} from 'react-native';
import {
  getProportionateScreenHeight,
  getProportionateScreenWidth,
} from '../../core/utils';
import {colors, fonts} from '../../core/Constants';

export const styles = StyleSheet.create({
  GoogleButtonContainer: {
    width: '92%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.white,
    height: getProportionateScreenHeight(45),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  googleImage: {
    resizeMode: 'contain',
    height: getProportionateScreenHeight(20),
    width: getProportionateScreenWidth(20),
    marginRight: 5,
  },
  googleButtonText: {
    fontSize: 16,
    lineHeight: getProportionateScreenHeight(22),
    fontWeight: '500',
    letterSpacing: 0.5,
    color: colors.white,
    fontFamily:
      Platform.OS === 'ios' ? fonts.InterRegular : fonts.InterSemiBold,
  },
});
