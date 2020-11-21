import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Degen Prime',
    power: 'Can sit all day and do nothing'
  }

  constructor() { }

  ngOnInit(): void {

  }

}
