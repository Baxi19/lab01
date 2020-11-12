import { Count } from './count';

export class Client {
  nombre: string;
  apellidos: string;
  fechaNacimiento: string;
  telefono: string;
  direccion: string;
  correo: string;
  cuentas: Array<Count>;
  
  constructor(nombre, apellidos, fechaNacimiento, telefono, direccion, correo) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.telefono = telefono;
    this.direccion = direccion;
    this.correo = correo;
    this.cuentas = new Array<Count>();
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getApellidos() {
    return this.apellidos;
  }

  setApellidos(apellidos) {
    this.apellidos = apellidos;
  }

  getFechaNacimiento() {
    return this.fechaNacimiento;
  }

  setFechaNacimiento(fechaNacimiento) {
    this.fechaNacimiento = fechaNacimiento;
  }

  getTelefono() {
    return this.telefono;
  }

  setTelefono(telefono) {
    this.telefono = telefono;
  }

  getDireccion() {
    return this.direccion;
  }

  setDireccion(direccion) {
    this.direccion = direccion;
  }

  getCorreo() {
    return this.correo;
  }

  setCorreo(correo) {
    this.correo = correo;
  }

  getCuentas() {
    return this.cuentas;
  }

  setCuentas(cuenta) {
    this.cuentas.push(cuenta);
  }

  buscarCuenta(numeroCuenta) {
    for (var i = 0; i < this.cuentas.length; i++) {
      var cuenta = this.cuentas[i];
      if (cuenta.getNumCuenta() === numeroCuenta) {
        return cuenta;
      }
    }
    return null;
  }

  retirar(amount, numeroCuenta) {
    var account = this.buscarCuenta(numeroCuenta);
    if (account != null) {
      var balance = account.getCantidadDinero();
      if (amount >= 0) {
        if (balance < amount) {
          throw new Error("Fondos insuficientes");
        }
        return account.retirar(amount);
      }
      else {
        throw new Error("Valor negativo");
      }
    }
    return -1;
  }
}
