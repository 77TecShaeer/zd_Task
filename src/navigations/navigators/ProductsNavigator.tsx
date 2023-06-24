import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductType} from '../../diclerations';
import ProductDetails from '../../screens/ProductDetails/ProductDetails';
import {Products} from '../../screens/Products/Products';
import {ProductsNavigationHeader} from '../screenOptions/NavigationHeader';

export type ProductStackParams = {
  Products: NavigatorScreenParams<undefined>;
  ProductDetails: {item: ProductType};
};

const ProductsStack = createNativeStackNavigator<ProductStackParams>();

const HomeNavigator = () => {
  return (
    <ProductsStack.Navigator screenOptions={ProductsNavigationHeader}>
      <ProductsStack.Screen name="Products" component={Products} />
      <ProductsStack.Screen name="ProductDetails" component={ProductDetails} />
    </ProductsStack.Navigator>
  );
};

export default HomeNavigator;
