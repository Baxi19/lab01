import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from './client.model';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Sucursal {
  nombre: string;
  direccion: string;
  clientes: Array<Client>;
  
  constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.clientes = new Array<Client>();
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getDireccion() {
    return this.direccion;
  }

  setDireccion(direccion) {
    this.direccion = direccion;
  }

  getClientes() {
    return this.clientes;
  }

  setClientes(cliente) {
    this.clientes.push(cliente);
  }
}

