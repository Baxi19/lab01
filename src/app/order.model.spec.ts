import { DummyShopDataAccess } from './dummy-shop-data-access.model';
import { FakeShopDataAccess } from './fake-shop-data-access.model';
import { Item } from './item.model';
import { Order } from './order.model';
import { SpyShopDataAccess } from './spy-shop-data-access.model';
import { StubShopDataAccess } from './stub-shop-data-access.model';
import { Substitute, Arg } from '@fluffy-spoon/substitute';
import { IShopDataAccess } from './ishop-data-access';

describe('Order', () => {
  it('should create an instance', () => {
    let d = new DummyShopDataAccess();
    expect(new Order(1, d)).toBeTruthy();
  });
});

describe('Dummy', function () {
  it('Create order', function () {
    var dataAccess = new DummyShopDataAccess();
    var o = new Order(123, dataAccess);
    o.setLines(1234, 2, o);
    o.setLines(4321, 3, o);
    expect(o.getLines().length).toBe(2);
  });
});

describe('Stub', function () {
  it('Save order', function () {
    var dataAccess = new StubShopDataAccess();
    var o = new Order(123, dataAccess);
    o.setLines(1234, 2,o);
    expect(o.getLines()[0].getSubTotal()).toBe(50);
    });    
});

describe('Spy', function () {
  it('Save order', function () {
    var dataAccess = new SpyShopDataAccess();
    var o = new Order(123, dataAccess);
    o.setLines(1234, 1, o);
    o.setLines(4321, 3, o);
    o.save();
    expect(dataAccess.wasSaveInvoke()).toBe(true);
  });
});

describe('Fake', function () {
  it('Calculate order', function () {
    var dataAccess = new FakeShopDataAccess();
    dataAccess.agregarItem(new Item(1234, "Pasta dental", "Colgate", 45));
    dataAccess.agregarItem(new Item(4321, "Cepillo dental", "Colgate", 15));
    var o = new Order(123, dataAccess);
    o.setLines(1234, 3, o);
    o.setLines(4321, 2, o);
    expect(o.getLines()[0].getSubTotal()).toBe(135);
    });
});

describe('Mock', function () {
  it('Save order Mock', function () {
    const dataAccess = Substitute.for<IShopDataAccess>();
    var o = new Order(123, dataAccess);
    o.setLines(1234, 1, o);
    o.setLines(4321, 3, o);
    o.save();
    dataAccess.received().save(123, o);
  });
  it('Calculate order Mock', function () {
    const dataAccess = Substitute.for<IShopDataAccess>(); dataAccess.getProductPrice(1234).returns(45.0);
    var o = new Order(123, dataAccess);
    o.setLines(1234, 3, o);
    o.setLines(4321, 2, o);
    expect(o.getLines()[0].getSubTotal()).toBe(135);
  });
});
