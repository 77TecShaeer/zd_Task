import {debounce} from 'lodash';
import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import AppProductsItem from '../../components/AppProductsItem/AppProductsItem';
import {ProductType} from '../../diclerations';
import {styles} from './Products.styles';
import {EmptyProducts} from './components/EmptyProducts';
import {useProductsLogic} from './hooks/useProductsLogic';

const DEBOUNCE_DELAY = 200; // Adjust the debounce delay as needed

export const Products: FC = () => {
  const [visibleItems, handleEndReached, keyExtractor] = useProductsLogic(10);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    setIsLoadingMore(false);
  }, [visibleItems]);

  const renderEachProduct = React.useCallback(
    ({item}: {item: ProductType}) => <AppProductsItem item={item} />,
    [],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleEndReachedDebounced = React.useCallback(
    debounce(handleEndReached, DEBOUNCE_DELAY),
    [handleEndReached],
  );

  const renderFooter = React.useCallback(() => {
    if (isLoadingMore) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#000000" />
        </View>
      );
    }
    return null;
  }, [isLoadingMore]);

  return (
    <View style={styles.container}>
      <FlatList
        data={visibleItems || []}
        style={styles.flatList}
        renderItem={renderEachProduct}
        keyExtractor={keyExtractor}
        ListEmptyComponent={EmptyProducts}
        ListFooterComponent={renderFooter}
        onEndReached={() => {
          setIsLoadingMore(true);
          handleEndReachedDebounced();
        }}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};
