import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
//import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,],
  template: `  <main> 
  <header class="brand-name">
  <img class="brand-logo" src="/assets/pink.jpg" alt="logo" aria-hidden="true" welcome>
  
  </header>
  <section class="content">
  <app-home></app-home>

  </section>
  </main>
`, //<app-user-list></app-user-list>
// <img class="brand-logo" src="assets/Logo.jpg" alt="logo" aria-hidden="true">
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
