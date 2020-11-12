export interface IShopDataAccess {
  getProductPrice(productId): number;
  save(orderId, order);
}

