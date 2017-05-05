import { Component } from '@angular/core';
/**
 * Router outlet
 * If you paste the path, /heroes, into the browser address bar at the end of the URL, 
 * the router should match it to the heroes route and display the HeroesComponent. 
 * However, you have to tell the router where to display the component. 
 * To do this, you can add a <router-outlet> element at the end of the template. 
 * RouterOutlet is one of the directives provided by the RouterModule. 
 * The router displays each component immediately below the <router-outlet> as users navigate through the app.
 *
 * Router links
 * Users shouldn't have to paste a route URL into the address bar. 
 * Instead, add an anchor tag to the template that, when clicked, triggers navigation to the HeroesComponent.
 * 
 * The routerLink binding in the anchor tag. 
 * The RouterLink directive (another of the RouterModule directives) is bound to a string that tells the router where to navigate when the user clicks the link.
 */
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
   styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}