import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule 
    ],

    //declarations array contains a list of application components, pipes, and directives that belong to the module.
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
   ],

  //bootstrap
  bootstrap:    [ 
    AppComponent 
  ],

  //DI service providers
  providers: [
      HeroService
  ]
})

export class AppModule {}

RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
])
