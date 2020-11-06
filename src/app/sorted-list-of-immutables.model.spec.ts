import { Food } from './food.model';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';

//------------------------------------------------------------------------------------------------------------
//Variables globales para ejecutar los casos de prueba
let inst;
let inst2;
let inst3;

//------------------------------------------------------------------------------------------------------------
// Preparacion de los datos
beforeEach(function() { 
  //*********************************************/
  inst = new SortedListOfImmutables(null);
  let listFull : Array<Food> = [
  new Food("Bacon", 89, 185, "Bacon.jpg"),
  new Food("Waffle", 178, 350, "Waffle.jpg"),
  new Food("Egg", 47, 89, "Egg.jpg"),
  new Food("Orange Juice", 77, 199, "OrangeJuice.jpg"),
  new Food("Milk", 52, 179, "Milk.jpg"),
  new Food("Toast", 66, 125, "Toast.jpg"),
  new Food("Hashbrowns", 127, 195, "Hashbrowns.jpg"),
  new Food("Pancakes", 179, 350, "Pancakes.jpg"),
  new Food("Coffee", 67, 125, "Coffee.jpg"),
  new Food("Cereal", 129, 275, "Cereal.jpg"),
  new Food("Donut", 89, 129, "Donut.jpg"),
  new Food("Melon", 98, 159, "Melon.jpg"),
  new Food("Pie", 195, 275, "Pie.jpg"),
  new Food("Croissant", 106, 125, "Croissant.jpg")];

  for (var i = 0; i < listFull.length ; i++) {
    inst.add(listFull[i]);
  }
  //*********************************************/
  inst2 = new SortedListOfImmutables(null);
  let list: Array<Food> = [
    new Food("Bacon", 89, 185, "Bacon.jpg"),
    new Food("Waffle", 178, 350, "Waffle.jpg"),
    new Food("Egg", 47, 89, "Egg.jpg"),
    new Food("Orange Juice", 77, 199, "OrangeJuice.jpg"),
    new Food("Croissant", 106, 125, "Croissant.jpg")
  ];
  for (var i = 0; i < list.length ; i++) {
    inst2.add(list[i]);
  }
  //*********************************************/
  inst3 = new SortedListOfImmutables(null);
  let list3 = [
    new Food("Mango",1, 2, "image.jpg"),
    new Food("Coco", 3, 4, "image.jpg")
  ];
  for (var i = 0; i < list3.length ; i++) {
    inst3.add(list3[i]);
  }
 
});  

//------------------------------------------------------------------------------------------------------------
describe('SortedListOfImmutables', () => {
  it('should create an instance', () => {
    expect(new SortedListOfImmutables(null)).toBeTruthy();
  });
});

//------------------------------------------------------------------------------------------------------------
//SortedListOfImmutables: checkAvailability
//Recibe: Food
//Retorna: True si la encuentra & False en caso contrario 
/* Prueba metodo 'checkAvailability' 
   Esta prueba tiene como objetivo comprobar la correcta funcionalidad e integridad del método en cuestión
   Datos: inst(instancia del metodo), list(elementos a agregar a la instancia) 
*/
describe('checkAvailability', () => {   

  /* Busca un elemento que esta en la lista, 
     Se espera retorno true
     Datos : new Food("Orange Juice", 77, 199, "OrangeJuice.jpg")
  */ 
  it('Elemento en lista: return true', () => {  
     expect(inst.checkAvailability(new Food("Orange Juice", 77, 199, "OrangeJuice.jpg"))).toBeTruthy();
  });

  /* Busca un elemento que no esta en la lista, 
     Se espera retorno flase
     Datos : nnew Food("Apple", 77, 199, "apple.jpg")
  */ 
 
   it('Fruta no existente : return false', () => {  
     expect(inst.checkAvailability(new Food("Apple", 77, 199, "apple.jpg"))).toBeFalsy();
   });
 
  /* Busca un elemento que no esta en la lista con una pequeña variacion al final del nombre 
     Se espera retorno false
     Datos : new Food("Orange Juices", 77, 199, "OrangeJuice.jpg")
  */ 
   it('Fruta con error en nombre : return false', () => {  
     expect(inst.checkAvailability(new Food("Orange Juices", 77, 199, "OrangeJuice.jpg"))).toBeFalsy();
   });
   
  /* Busca elemento con nombre nulo, 
     Se espera retorno false
     Datos : new Food(null, 77, 199, "OrangeJuice.jpg")
  */ 
   it('Fruta con nombre nulo: return false', () => {  
     expect(inst.checkAvailability(new Food(null, 77, 199, "OrangeJuice.jpg"))).toBeFalsy();
   });
 
 });


//------------------------------------------------------------------------------------------------------------
//SortedListOfImmutables: checkAvailabilityToList
//Recibe: SortedListOfImmutables
//Retorna: True los Elementos de una Lista se encuentran en lista Contenida
/* Prueba metodo 'checkAvailabilityToList' 
   Esta prueba tiene como objetivo comprobar la correcta funcionalidad e integridad del método en cuestión
   Datos: inst(instancia del metodo), inst2 e inst3 intancias a comparar
*/
describe('checkAvailabilityToList(SortedListOfImmutables)', () => {
  /* Comprueba si la lista en inst contiene los elemtos en el SortedListOfImmutables enviado, 
       Se espera retorno true
       Datos : inst2
    */ 
  
  it('Todos los Elementos de Lista se encuentran en lista Contenida (listFull): return true', () => {  
    expect(inst.checkAvailabilityToList(inst2)).toBeTruthy();
  });

  /* Comprueba si la lista en inst contiene los elemtos en el SortedListOfImmutables enviado, 
       Se espera retorno false
       Datos : inst3
    */ 
  it('Todos los Elementos de Lista NO se encuentran en lista Contenida (listFull): return false', () => {  
    expect(inst.checkAvailabilityToList(inst3)).toBeFalsy();
  });
});