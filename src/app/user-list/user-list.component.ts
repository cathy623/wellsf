import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Userlist } from '../userlist';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="listing">
  <img class="listing-photo" [src]="userList.photo" alt="Exterior photo of {{userList.name}}">
  <h2 class="listing-heading">{{ userList.name }}</h2>
  <p class="listing-List"> {{userList.tags }}, {{userList.bio }},{{userList.stock }}</p>
</section>
  `,
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
@Input() userList!: Userlist;
}
