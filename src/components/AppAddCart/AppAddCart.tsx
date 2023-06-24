import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppText} from '../AppText/AppText';
import {styles} from './AppAddCart.styles';
import {CartQuantity} from './ControlQuantity/ControlQuantity';

const AppAddCart = () => {
  const handleBuyNowPress = () => {
    Alert.alert('', 'Work in Progress');
  };
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingBottom: insets.bottom}]}>
      <TouchableOpacity onPress={handleBuyNowPress} style={styles.buyNowButton}>
        <AppText color="white">Buy Now</AppText>
      </TouchableOpacity>
      <CartQuantity />
    </View>
  );
};

export default AppAddCart;
