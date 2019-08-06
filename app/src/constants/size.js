import { Dimensions } from 'react-native';

export const { width, fontScale, height } = Dimensions.get('window');

export const getFontSize = (size: number) => {
  switch (fontScale.toFixed(1)) {
    case '0.8':
      return size * (10 / 8);
    case '0.9':
      return size * (10 / 9);
    case '1':
      return size * (10 / 10);
    case '1.1':
      return size * (10 / 11);
    case '1.3':
      return size * (10 / 13);
    case '1.5':
      return size * (10 / 15);
    case '1.7':
      return size * (10 / 17);
    default:
      return size;
  }
};

export const getWidth = (size: number) => size * (width / BaseWidth);
export const getHeight = (size: number) => size * (height / BaseHeight);

export const BaseWidth = 360;
export const BaseHeight = 640;
