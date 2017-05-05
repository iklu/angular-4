import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './heroes/hero/hero-detail.component';
import { HeroesComponent }     from './heroes/hero-list/heroes.component';
import { DashboardComponent }     from './heroes/dashboard/dashboard.component';
import { HeroService }         from './heroes/shared/hero.service';
import { AppRoutingModule } from './heroes/app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule
  ],

    //declarations array contains a list of application components, pipes, and directives that belong to the module.
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
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

