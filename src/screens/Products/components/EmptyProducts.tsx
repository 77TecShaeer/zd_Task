import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './EmptyProducts.styles';
import {AppText} from '../../../components/AppText/AppText';

export const EmptyProducts: FC = () => {
  return (
    <View style={styles.container}>
      <AppText>No Products Found</AppText>
    </View>
  );
};
