import { IShopDataAccess } from './ishop-data-access';

export class StubShopDataAccess implements IShopDataAccess{
    getProductPrice(productId: any): number {
        return 25;
    }
    save(orderId: any, order: any) {
        throw new Error('Method not implemented.');
    }
}

