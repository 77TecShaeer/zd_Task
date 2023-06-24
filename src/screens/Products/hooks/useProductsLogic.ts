import {useState, useEffect, useCallback} from 'react';
import {generateListData} from '../../../utils/fake-data';
import {ProductType} from '../../../diclerations';

export const useProductsLogic = (
  initialVisibleItems: number,
): [ProductType[], () => void, (item: ProductType) => string] => {
  const [visibleItems, setVisibleItems] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMoreItems = useCallback(() => {
    const nextPage = currentPage + 1;
    const newData = generateListData(nextPage) as ProductType[];
    setVisibleItems(prevItems => [...prevItems, ...newData]);
    setCurrentPage(nextPage);
  }, [currentPage]);

  useEffect(() => {
    const initialData = generateListData(1) as ProductType[];
    setVisibleItems(initialData.slice(0, initialVisibleItems));
  }, [initialVisibleItems]);

  const keyExtractor = useCallback(
    (item: ProductType) => item.id.toString(),
    [],
  );

  return [visibleItems, loadMoreItems, keyExtractor];
};
