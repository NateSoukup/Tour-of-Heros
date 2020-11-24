import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  //This is where this component looks at for data and where those locations look at for data
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  //HEROS is a defined constant from the mock-heros.ts
  heroes = HEROES

  //selectedHero is a variable with an expected type of Hero (defined in hero.ts)
  //expected typing is going to be difficult even though I already know python I was never taught to use it there. oof
  selectedHero: Hero

  constructor() { }

  //When this component is first initalized run this function. 
  ngOnInit(): void { }
  
  onSelect(hero: Hero): void{
    //if the selectedHero is selected again then unselect it
    if (hero == this.selectedHero)
      this.selectedHero = null
    else
      this.selectedHero = hero;
  }

}
