import { IShopDataAccess } from './ishop-data-access';

export class SpyShopDataAccess implements IShopDataAccess{
    saveWasInvoked: boolean;
    constructor(){
        this.saveWasInvoked = false;
    }
    getProductPrice(productId: any): number {
        return 25;
    }
    save(orderId: any, order: any) {
        this.saveWasInvoked = true;
    }
    wasSaveInvoke():boolean{
        return this.saveWasInvoked;
    }
}

