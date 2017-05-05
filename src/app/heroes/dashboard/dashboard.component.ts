import { Component, OnInit } from '@angular/core';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  /**
   * @var array
   */
  heroes: Hero[] = [];

  /**
   * 
   * @param heroService 
   */
    constructor(private heroService: HeroService) { 

    }

  /**
   * on init
   */
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
