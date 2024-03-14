import {Platform, StyleSheet} from 'react-native';
import {colors, fonts} from '../../core/Constants';
import {getProportionateScreenHeight} from '../../core/utils';

export const styles = StyleSheet.create({
  universalButtonContainer: {
    width: '92%',
    height: getProportionateScreenHeight(45),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: colors.neonGreen,
  },
  buttonText: {
    color: colors.backgroundBlack,
    fontSize: 18,
    lineHeight: getProportionateScreenHeight(22),
    fontWeight: '500',
    fontFamily:
      Platform.OS === 'ios' ? fonts.InterRegular : fonts.InterSemiBold,
  },
});
