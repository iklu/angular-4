/**
 * Make a hero detail component
Add a file named hero-detail.component.ts to the app/ folder. This file will hold the new HeroDetailComponent.
The file and component names follow the standard described in the Angular style guide.
The component class name should be written in upper camel case and end in the word "Component". The hero detail component class is HeroDetailComponent.
The component file name should be spelled in lower dash case, each word separated by dashes, and end in .component.ts. The HeroDetailComponent class goes in the hero-detail.component.ts file.
Start writing the HeroDetailComponent as follows:
 */
import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})

export class HeroDetailComponent {
      @Input() hero: Hero;
}