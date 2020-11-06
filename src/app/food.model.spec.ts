import { Food } from './food.model';

describe('Food', () => {
  it('should create an instance', () => {
    expect(new Food("pollo",5000,3000,"image.jpg")).toBeTruthy();
  });
});
