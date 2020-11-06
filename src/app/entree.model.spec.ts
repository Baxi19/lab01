import { Entree } from './entree.model';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';

describe('Entree', () => {
  it('should create an instance', () => {    
    let lista = new SortedListOfImmutables(null);
    expect(new Entree("prueba",lista)).toBeTruthy();
  });
});
