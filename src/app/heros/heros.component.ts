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

  //The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  //When this component is first initalized run this function. 
  ngOnInit(): void {
    this.getHeroes();
  }

  //uses the heroService to get the heros. 
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
