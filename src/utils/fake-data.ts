import {faker} from '@faker-js/faker';
import {ProductType} from '../diclerations';

const PAGE_SIZE = 20; // Number of items to load per page

export const generateListData = (page: number): ProductType[] => {
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = page * PAGE_SIZE;

  const listData: ProductType[] = [];

  for (let index = startIndex; index < endIndex; index++) {
    const price = faker.commerce.price();
    const priceInt = parseFloat(faker.commerce.price());

    listData.push({
      id: index.toString(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: price,
      salePrice: faker.helpers.maybe(
        () => faker.commerce.price(priceInt * 0.5, priceInt * 0.9),
        {
          probability: 0.1,
        },
      ),
      brand: faker.company.name(),
    });
  }

  return listData;
};
