import { Client } from './client.model';

describe('Client', () => {
  it('should create an instance', () => {
    expect(new Client("Name","Lastname","01/01/1995","8888-8888","San Jose","name@lastname.com")).toBeTruthy();
  });
});
