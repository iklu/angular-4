import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/hero';
import { HEROES } from '../mock/mock-heroes';
import { HeroService } from '../shared/hero.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

 export class HeroesComponent implements OnInit {
  
  /**
   * @var String
   */
  title = 'Tour of Heroes';

  /**
   * Hero array
   */
  heroes = HEROES;

  /**
   * Hero class
   */
  selectedHero: Hero;
 
  /**
   * Inject 
   * @param heroService 
   */
  constructor(private heroService: HeroService, private router: Router) {

  }

  /**
   * Get heroes
   */
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

   /**
   * 
   * @param hero 
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  /**
   * Write an ngOnInit method with the initialization logic inside. Angular will call it at the right time. In this case, initialize by calling getHeroes().
   * void
   */
  ngOnInit(): void {
      this.getHeroes();
  }

  /**
   * The HeroesComponent navigates to the HeroesDetailComponent in response to a button click. 
   * The button's click event is bound to a gotoDetail() method that navigates imperatively by telling the router where to go.
   */
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

