import { OrderLine } from './order-line.model';
import { Order } from './order.model';
import { DummyShopDataAccess } from './dummy-shop-data-access.model';

describe('OrderLine', () => {
  it('should create an instance', () => {
    var dataAccess = new DummyShopDataAccess();
    var o = new Order(123, dataAccess);

    expect(new OrderLine(1,1,o)).toBeTruthy();
  });
});
