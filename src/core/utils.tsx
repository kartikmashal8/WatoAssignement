import {Dimensions} from 'react-native';

export const getProportionateScreenHeight = (inputHeight: number): number => {
  const {height} = Dimensions.get('screen');
  return (inputHeight / 812) * height;
};

export const getProportionateScreenWidth = (inputWidth: number): number => {
  const {width} = Dimensions.get('screen');
  return (inputWidth / 375) * width;
};
