export interface Count {
  new () : Count;
  getNumCuenta():number;
  setNumCuenta(numeroCuenta:number):void;
  getCantidadDinero():number;
  setCantidadDinero(cantidadDinero:number):void;
  getTipo():string;
  setTipo(tipo:string):void;
  retirar(monto:number):number;
  depositar(monto:number):void;
  liquidar();
}
