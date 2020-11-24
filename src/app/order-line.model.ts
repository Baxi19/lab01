import { Order } from './order.model';

export class OrderLine {
  idItem: number;
  cantidad: number;
  order: Order;
  constructor(id, cantidad, order) {
      this.idItem = id;
      this.cantidad = cantidad;
      this.order = order;
  }
  // tslint:disable-next-line: typedef
  getSubTotal() {
      return this.cantidad * this.order.getDataAccess().getProductPrice(this.idItem);
  }
}
