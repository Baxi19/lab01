import { Client } from './client.model';
import { Sucursal } from './sucursal.model';
import { Substitute, Arg } from '@fluffy-spoon/substitute';
import { Count } from './count';

let cliente: Client;
let sucursal: Sucursal;
let cuenta;
var withdrawlAmount2000 = 200000;
var numeroCuenta = 12345;
var balance = 100000;

describe('Sucursal', () => {
  /*it('should create an instance', () => {
    expect(new Sucursal()).toBeTruthy();
  });*/
  beforeEach(() => {
    sucursal = new Sucursal("Florencia", "Florencia");
    cliente = new Client("marlen", "trevino", "25-01-1988", "2401-3117", "Aguas Zarcas", "yensy@gmail.com");
    cuenta = Substitute.for<Count>();
    sucursal.setClientes(cliente);
    cuenta.setNumCuenta(numeroCuenta);
    cuenta.setCantidadDinero(balance);
    sucursal.getClientes()[0].setCuentas(cuenta);
  });

  it('1. Saldo de cuenta', function () {
    cuenta.getCantidadDinero().returns(balance);
    expect(cuenta.getCantidadDinero()).toBe(balance);
  });

  it('2. Agregar nueva cuenta a cliente', function () {
    var cuenta2 = Substitute.for<Count>();
    cliente.setCuentas(cuenta2);
    expect(cliente.getCuentas().length).toBe(2);
  });

  it('3. Retirar monto válido', function () {
    var balanceAmount3000 = 300000;
    cuenta.setCantidadDinero(balanceAmount3000);
    cuenta.getCantidadDinero().returns(balanceAmount3000);
    cuenta.getNumCuenta().returns(numeroCuenta);
    cuenta.retirar(withdrawlAmount2000).returns(balance);
    var saldo = cliente.retirar(withdrawlAmount2000, numeroCuenta);
    expect(saldo).toBe(balance);
  });

  it('4. Retirar más de lo permitido', function () {
    cuenta.getCantidadDinero().returns(balance);
    cuenta.getNumCuenta().returns(numeroCuenta);
    expect(function () {
      cliente.retirar(withdrawlAmount2000, numeroCuenta);
    }).toThrowError(Error, "Fondos insuficientes");
    cuenta.didNotReceive().retirar(withdrawlAmount2000);
  });

  it('5. El saldo debe ser mayor o igual a 5000', function () {
    var newAccount = Substitute.for<Count>();
    var newBalance = 6000;
    cliente.setCuentas(newAccount);
    newAccount.setCantidadDinero(newBalance);
    newAccount.getCantidadDinero().returns(newBalance);
    expect (
      newAccount.getCantidadDinero()
    ).toBeGreaterThanOrEqual(5000);
  });

  it('6. Depósitos válidos y verificacion del saldo en la cuenta ', function () {
    var newAccount = Substitute.for<Count>();
    var newBalance = 0;
    var deposit1 = 5000;
    var deposit2 = 5000;
    newAccount.setCantidadDinero(newBalance);
    newAccount.depositar(deposit1);
    newAccount.depositar(deposit2);
    newAccount.getCantidadDinero().returns(10000);
    cliente.setCuentas(newAccount);
    expect (
      newAccount.getCantidadDinero()
    ).toMatch("10000");
  });

});
