import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', power:'Nice guy'},
      { id: 12, name: 'Narco', power:'dead guy' },
      { id: 13, name: 'Bombasto', power:'in the name' },
      { id: 14, name: 'Celeritas', power:'controls the stars' },
      { id: 15, name: 'Magneta', power:'controls colors' },
      { id: 16, name: 'RubberMan', power:'knock of elastic woman' },
      { id: 17, name: 'Dynama', power:'Dynomite TNT' },
      { id: 18, name: 'Dr IQ', power:'Smart Guy' },
      { id: 19, name: 'Magma', power:'Like the pokemon but human' },
      { id: 20, name: 'Tornado', power:'The real last airbender' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}