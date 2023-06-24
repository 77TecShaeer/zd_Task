import React from 'react';
import {faker} from '@faker-js/faker';
import {View} from 'react-native';
import {AppText} from '../../../../components/AppText/AppText';
import {ProductType} from '../../../../diclerations';
import ContainerLineDescription from '../ContainerEachDescription/ContainerLineDescription';
import {styles} from './ProductDetailsSection.styles';

const SPEC_1 = faker.color.human();
const SPEC_2 = faker.vehicle.vin();
const SPEC_3 = faker.commerce.product();
const SPEC_4 = faker.datatype.float({min: 0.1, max: 10, precision: 0.1});

export const ProductDetailsSection = ({item}: {item: ProductType}) => {
  return (
    <View style={styles.container}>
      <AppText weight="semiBold">Details</AppText>
      <ContainerLineDescription label="Brand">
        {item.brand}
      </ContainerLineDescription>
      <ContainerLineDescription label="Color">
        {SPEC_1}
      </ContainerLineDescription>
      <ContainerLineDescription label="SKU" boldThisValue>
        {SPEC_2}
      </ContainerLineDescription>
      <AppText weight="semiBold">Specifications</AppText>
      <ContainerLineDescription label="Type">{SPEC_3}</ContainerLineDescription>
      <ContainerLineDescription label="Weight">
        {SPEC_4.toString()} kg
      </ContainerLineDescription>
    </View>
  );
};
