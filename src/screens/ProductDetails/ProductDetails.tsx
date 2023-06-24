import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, View} from 'react-native';
import AppAddCart from '../../components/AppAddCart/AppAddCart';
import AppImage from '../../components/AppImage/AppImage';
import {AppPriceProduct} from '../../components/AppPriceProduct/AppPriceProduct';
import {AppProductsItemNavigationProp} from '../../components/AppProductsItem/AppProductsItem';
import {AppText} from '../../components/AppText/AppText';
import {ProductStackParams} from '../../navigations/navigators/ProductsNavigator';
import {getImage} from '../../utils/image';
import {styles} from './ProductDetails.styles';
import {ProductDetailsSection} from './components/ProductDetailsSection/ProductDetailsSection';

type ProductDetailsScreenProps = StackScreenProps<
  ProductStackParams,
  'ProductDetails'
>;

const ProductDetails: React.FC<ProductDetailsScreenProps> = ({route}) => {
  const navigation = useNavigation<AppProductsItemNavigationProp>();

  const {item} = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: item.name,
    });
  }, [item.name, navigation]);

  if (!item) {
    return <AppText>Loading ...</AppText>;
  }

  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.imageContainer}>
          <AppImage
            source={{uri: getImage(900, item.id)}}
            style={styles.itemImage}
          />
        </View>

        <View style={styles.detailsContainer}>
          <AppText fontSize={18} weight="semiBold">
            {item.name}
          </AppText>
          <AppPriceProduct
            salePrice={Number(item.salePrice)}
            price={Number(item.price)}
          />
        </View>

        <View style={styles.descriptionContainer}>
          <AppText>{item.description}</AppText>
        </View>

        <ProductDetailsSection item={item} />
      </ScrollView>

      <AppAddCart />
    </React.Fragment>
  );
};

export default ProductDetails;
