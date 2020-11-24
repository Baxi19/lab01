import { DummyShopDataAccess } from './dummy-shop-data-access.model';
import { FakeShopDataAccess } from './fake-shop-data-access.model';
import { Item } from './item.model';
import { Order } from './order.model';
import { SpyShopDataAccess } from './spy-shop-data-access.model';
import { StubShopDataAccess } from './stub-shop-data-access.model';
import { Substitute, Arg } from '@fluffy-spoon/substitute';
import { IShopDataAccess } from './ishop-data-access';

// Prueba de instancia
describe('Order', () => {
  it('should create an instance', () => {
    let dataAccess = new DummyShopDataAccess();
    expect(new Order(1, dataAccess)).toBeTruthy();
  });
});

// Ejemplo de DUMMY
describe('Dummy', function () {
  it('Create order', function () {
    var dataAccess = new DummyShopDataAccess();
    var order = new Order(123, dataAccess);
    order.setLines(1234, 2, order);
    order.setLines(4321, 3, order);
    expect(order.getLines().length).toBe(2);
  });
});

// Ejemplo de STUB
describe('Stub', function () {
  it('Save order', function () {
    var dataAccess = new StubShopDataAccess();
    var order = new Order(123, dataAccess);
    order.setLines(1234, 2, order);
    expect(order.getLines()[0].getSubTotal()).toBe(50);
    });    
});

// Ejemplo de SPY
describe('Spy', function () {
  it('Save order', function () {
    var dataAccess = new SpyShopDataAccess();
    var order = new Order(123, dataAccess);
    order.setLines(1234, 1, order);
    order.setLines(4321, 3, order);
    order.save();
    expect(dataAccess.wasSaveInvoke()).toBe(true);
  });
});

// Ejemplo de FAKE
describe('Fake', function () {
  it('Calculate order', function () {
    var dataAccess = new FakeShopDataAccess();
    dataAccess.agregarItem(new Item(1234, "Pasta dental", "Colgate", 45));
    dataAccess.agregarItem(new Item(4321, "Cepillo dental", "Colgate", 15));
    var order = new Order(123, dataAccess);
    order.setLines(1234, 3, order);
    order.setLines(4321, 2, order);
    expect(order.getLines()[0].getSubTotal()).toBe(135);
    });
});

// Ejemplo de MOCK
describe('Mock', function () {
  it('Save order Mock', function () {
    const dataAccess = Substitute.for<IShopDataAccess>();
    var order = new Order(123, dataAccess);
    order.setLines(1234, 1, order);
    order.setLines(4321, 3, order);
    order.save();
    dataAccess.received().save(123, order);
  });
  it('Calculate order Mock', function () {
    const dataAccess = Substitute.for<IShopDataAccess>(); dataAccess.getProductPrice(1234).returns(45.0);
    var order = new Order(123, dataAccess);
    order.setLines(1234, 3, order);
    order.setLines(4321, 2, order);
    expect(order.getLines()[0].getSubTotal()).toBe(135);
  });
});
