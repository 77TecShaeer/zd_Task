import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ProductStackParams} from '../../navigations/navigators/ProductsNavigator';
import {ProductType} from '../../diclerations';
import {getImage} from '../../utils/image';
import AppAvatar from '../AppAvatar/AppAvatar';
import {AppText} from '../AppText/AppText';
import {styles} from './AppProductsItem.styles';
import {AppPriceProduct} from '../AppPriceProduct/AppPriceProduct';

const thumbnailSize = 600;

type AppProductsItemProps = {
  item: ProductType;
};

export type AppProductsItemNavigationProp = StackNavigationProp<
  ProductStackParams,
  'ProductDetails'
>;

const AppProductsItem: React.FC<AppProductsItemProps> = ({item}) => {
  const navigation = useNavigation<AppProductsItemNavigationProp>();

  const handlePress = useCallback(() => {
    navigation.navigate('ProductDetails', {item});
  }, [navigation, item]);

  return (
    <View>
      <TouchableOpacity
        style={[styles.container, styles.row]}
        onPress={handlePress}>
        <AppAvatar source={{uri: getImage(thumbnailSize, item.id)}} />

        <View style={[styles.flex, styles.containerName]}>
          <AppText weight="medium">{item.name}</AppText>
          <AppPriceProduct
            salePrice={Number(item.salePrice)}
            price={Number(item.price)}
          />

          <AppText fontSize={14} color="#545454">
            Brand: {item.name}
          </AppText>
        </View>
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  );
};

export default AppProductsItem;
