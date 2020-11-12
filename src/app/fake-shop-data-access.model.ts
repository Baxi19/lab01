import { IShopDataAccess } from './ishop-data-access';
import { Item } from './item.model';

export class FakeShopDataAccess implements IShopDataAccess {
    products = new Array<Item>();
    getProductPrice(productId: any): number {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].getID() === productId) {
                return this.products[i].getUnitPrice();
            }
        }
        throw new Error();
    }
    save(orderId: any, order: any) {
        throw new Error('Method not implemented.');
    }
    agregarItem(item: Item) {
        this.products.push(item);
    }
}

