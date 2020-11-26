import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from '../hero';

@Component({
  //This is where this component looks at to know how it should be displayed
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  //HEROS is a defined constant from the mock-heros.ts
  heroes: Hero[];

  //selectedHero is a variable with an expected type of Hero (defined in hero.ts)
  //expected typing is going to be difficult even though I already know python I was never taught to use it there. oof
  selectedHero: Hero;

  //The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  //When this component is first initalized run this function. 
  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void{
    //if the selectedHero is selected again then unselect it
    if (hero == this.selectedHero)
      this.selectedHero = null;
    else
      this.selectedHero = hero;
      this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
