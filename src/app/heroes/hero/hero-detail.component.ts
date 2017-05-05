/**
 * Make a hero detail component
 * Add a file named hero-detail.component.ts to the app/ folder. This file will hold the new HeroDetailComponent.
The file and component names follow the standard described in the Angular style guide.
The component class name should be written in upper camel case and end in the word "Component". The hero detail component class is HeroDetailComponent.
The component file name should be spelled in lower dash case, each word separated by dashes, and end in .component.ts. The HeroDetailComponent class goes in the hero-detail.component.ts file.
Start writing the HeroDetailComponent as follows:
 */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit{    
  /**
   * @var Input
   */  
  @Input() hero: Hero;

  /**
   * 
   * @param heroService 
   * @param route 
   * @param location 
   */
  constructor( private heroService: HeroService, private route: ActivatedRoute, private location: Location ) {

  }

  /**
   * 
   */
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  /**
   * 
   */
  goBack(): void {
    this.location.back();
  }
}