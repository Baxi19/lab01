import { Food } from './food.model';
import { Restaurant } from './restaurante.model';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';

//------------------------------------------------------------------------------------------------------------
//Variables globales para ejecutar los casos de prueba
let inst;
let list : Array<Food>;
let rest;


beforeEach(function() { 
  //*********************************************/
  rest = new Restaurant("Restaurante 1", 1000);
  inst = new SortedListOfImmutables(null);
  list = [
    new Food("Mango",1, 2, "image.jpg"),
    new Food("Coco", 3, 4, "image.jpg")
  ];
  for (var i = 0; i < list.length ; i++) {
    inst.add(list[i]);
  }
});  

//------------------------------------------------------------------------------------------------------------
describe('Restaurant', () => {
  it('should create an instance', () => {
    expect(new Restaurant("prueba",1000)).toBeTruthy();
  });
});


//------------------------------------------------------------------------------------------------------------
//Restaurant:  addShipmentToInventory
//Recibe: lista de Food
//Retorna: True si el item se agrego correctamente, False si no se agrego
/* Prueba metodo 'addShipmentToInventory'
   Esta prueba tiene como objetivo comprobar la correcta funcionalidad e integridad del método en cuestión
   Datos: rest(instancia del metodo), inst(instancia parámetro) , list (lista de instancias Food agregar a la intancia inst)
*/
describe('addShipmentToInventory(SortedListOfImmutables)', () => {
  //Agrega elementos hasta que la instancia de SortedListOfImmutables rebase el dinero disponible ingresado en la instancia rest
  //Se espera que las 2 primeras interacciones retornen true y la ultima false, debe presentar un fallo en las pruebas al final
  it('Agrega al inventario si el dinero es suficiente para los elementos de la lista: return true', () => {
    list.forEach(( food ) => {
      inst.add(food);
      expect(rest.addShipmentToInventory(inst)).toBeTruthy();
    }); 

  });
})
