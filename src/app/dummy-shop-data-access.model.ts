import { IShopDataAccess } from './ishop-data-access';

export class DummyShopDataAccess implements IShopDataAccess{
  getProductPrice(productId: any): number {
      throw new Error('Method not implemented.');
  }
  save(orderId: any, order: any) {
      throw new Error('Method not implemented.');
  }    
}

