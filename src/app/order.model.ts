import { IShopDataAccess } from './ishop-data-access';
import { OrderLine } from './order-line.model';

export class Order {
    id: number;
    dataAccess: IShopDataAccess;
    Lines: Array<OrderLine> = [];
    constructor(orderId, dataAccess) {
        if (dataAccess == null) {
            throw new Error("dataAccess");
        }
        this.id = orderId;
        this.dataAccess = dataAccess;
        this.Lines = new Array<OrderLine>();
    }
    getLines() {
        return this.Lines;
    }
    setLines(id, cantidad, order) {
        this.Lines.push(new OrderLine(id, cantidad, order));
    }
    getDataAccess() {
        return this.dataAccess;
    }
    save() {
        this.dataAccess.save(this.id, this);
    }
}

