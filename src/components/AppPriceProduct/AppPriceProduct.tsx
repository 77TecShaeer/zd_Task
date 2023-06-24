import React from 'react';
import {View} from 'react-native';
import {AppText} from '../AppText/AppText';
import {styles} from './AppPriceProduct.styles';

type PriceProps = {
  salePrice?: number;
  price: number;
};
export const AppPriceProduct: React.FC<PriceProps> = ({salePrice, price}) => {
  return (
    <View>
      {salePrice ? (
        <AppText fontSize={16} color="red">
          <AppText style={styles.strikeThrough}>{`SAR ${price}`}</AppText>
          {'  '}
          {`SAR ${salePrice}`}
        </AppText>
      ) : (
        <AppText fontSize={16}>{`SAR ${price}`}</AppText>
      )}
    </View>
  );
};
