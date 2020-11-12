import { Item } from './item.model';

describe('Item', () => {
  it('should create an instance', () => {
    expect(new Item(1234, "Pasta dental", "Colgate", 45)).toBeTruthy();
  });
});

