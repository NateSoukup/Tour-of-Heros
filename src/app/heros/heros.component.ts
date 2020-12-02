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

  add(name: string): void {
    name = name.trim();
    if(!name){return;}
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
          this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
