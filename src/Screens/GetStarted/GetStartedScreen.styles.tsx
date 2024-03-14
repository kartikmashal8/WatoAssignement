import {Platform, StyleSheet} from 'react-native';
import {colors, fonts} from '../../core/Constants';
import {
  getProportionateScreenHeight,
  getProportionateScreenWidth,
} from '../../core/utils';

export const styles = StyleSheet.create({
  HomeContainer: {
    backgroundColor: colors.backgroundBlack,
    flex: 1,
    overflow: 'hidden',
  },
  spaklesImage: {
    resizeMode: 'contain',
    width: '100%',
    position: 'absolute',
    bottom: getProportionateScreenHeight(-400),
    right: getProportionateScreenWidth(10),
    zIndex: 4,
    opacity: 0.6,
  },
  vector8: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: getProportionateScreenHeight(150),
    zIndex: 2,
  },
  vector5: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: getProportionateScreenHeight(135),
    zIndex: 3,
  },
  cotentContainer: {
    position: 'absolute',
    width: '100%',
    top: getProportionateScreenHeight(295),
    zIndex: 10,
  },
  watoText: {
    flexDirection: 'row',
    marginLeft: getProportionateScreenWidth(15),
  },
  waText: {
    fontFamily: fonts.SequelSansBlack,
    color: colors.white,
    fontSize: 65,
    lineHeight: getProportionateScreenHeight(65),
  },
  tTextImage: {
    alignSelf: 'flex-end',
    tintColor: colors.white,
    marginBottom: getProportionateScreenHeight(10),
    height: getProportionateScreenHeight(45),
    width: getProportionateScreenWidth(28),
  },
  oTextImage: {
    alignSelf: 'flex-end',
    tintColor: colors.white,
    marginBottom: getProportionateScreenHeight(10),
    height: getProportionateScreenHeight(35),
    width: getProportionateScreenWidth(37),
  },
  subTitleContainer: {
    maxWidth: '100%',
    marginTop: getProportionateScreenHeight(20),
    marginLeft: getProportionateScreenWidth(15),
  },
  subTitle: {
    fontFamily:
      Platform.OS === 'ios' ? fonts.GTSuperRegular : fonts.GTSuperMedium,
    width: '100%',
    height: 'auto',
    fontSize: 33,
    letterSpacing: 1.5,
    color: colors.white,
    fontWeight: '400',
    lineHeight: getProportionateScreenHeight(46),
  },
  HomeFooterConatiner: {
    maxWidth: '100%',
    alignItems: 'center',
  },
  getStartedButton: {
    marginTop: getProportionateScreenHeight(70),
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: getProportionateScreenHeight(55),
  },
  getStartedText: {
    fontFamily: Platform.OS === 'ios' ? fonts.InterRegular : fonts.InterBold,
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
    color: colors.white,
    fontSize: 20,
    lineHeight: getProportionateScreenHeight(22),
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  linearGradientBorder: {
    width: '100%',
    height: getProportionateScreenHeight(55),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    zIndex: 5,
  },
  linearGradientContainer: {
    width: '100%',
    height: getProportionateScreenHeight(55),
    paddingVertical: getProportionateScreenWidth(2),
    paddingHorizontal: getProportionateScreenWidth(1),
    borderRadius: 10,
  },
  FooterElements: {
    marginTop: getProportionateScreenHeight(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontFamily: fonts.InterRegular,
    letterSpacing: 0.2,
    fontWeight: '400',
    fontSize: 14,
    color: colors.white,
    opacity: 0.8,
  },
});
