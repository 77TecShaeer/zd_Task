import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HomeNavigator from './ProductsNavigator';
export type RootNavigationProps =
  NativeStackNavigationProp<RootNavigatorParams>;

export type RootNavigatorParams = {
  ProductNavigator: NavigatorScreenParams<undefined>;
};

export const RootStack = createNativeStackNavigator<RootNavigatorParams>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'ProductNavigator'}>
      <RootStack.Screen name="ProductNavigator" component={HomeNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
