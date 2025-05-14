/* Usage:
 * import products from '../mockProducts.json';
 * const getProducts = createMockData(products);
 *
 * getProducts().then(...)
 **/
export function createMockData<T>(mockData: T) {
  return (_params: unknown) => {
    return new Promise((res, rej) => {
      const isError = Math.floor(Math.random() * 10) > 6;
      const delay = 200 + Math.floor(Math.random() * 500);
      setTimeout(() => {
        if (isError) {
          rej(new Error("Failed"));
        } else {
          res(mockData);
        }
      }, delay);
    });
  };
}
