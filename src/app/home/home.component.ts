import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user-list.component';
import { Userlist } from '../userlist';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    UserListComponent
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-user-list *ngFor= "let userList of userList" [userList]= " userList"></app-user-list>
  </section>
`,
  styleUrls: ['./home.component.css']
})//
export class HomeComponent {

  //readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  userList: Userlist[] = [{
    id: 6,
    name: 'new tweet',
    photo: `assets/bird.jpg`,
   tags: ['twitter', 'colorful bird'],
   bio: 'bird',
   stock: 23
},
{
id:0,
name: 'Adidas',
photo:`/assets/apple.jpg`,
tags: ['adidas', 'addidas'],
bio: 'shoes store',
stock: 34},
{
id:1,
name: 'Apple',
photo:`/assets/adidas.jpg`,
tags: ['apple', 'iPhone'],
bio: 'great phone product ',
stock: 2
},

{id:2,
  name: 'Google',
  photo:`/assets/google.jpg`,
  tags: ['google','goggle'] ,
bio: ' dsf',
stock: 5},
{id:3,
  name: 'Nike',
  photo:`/assets/nike.jpg`,
  tags: ['nike', 'check'],
bio: ' sfvjashdf',
stock: 234
},
{id:4,
  name: 'Twitter',
  photo:`/assets/twitter.png`,
  tags:['blue bird', 'twitter'],
bio: 'dfjhf',
stock: 2344},
{id:7,
  name: 'fendi',
  photo:`/assets/fendi.png`,
  tags:['clothes', 'designer'],
bio: 'efef',
stock: 4
},
{id:8,
  name: 'chanel',
  photo:`/assets/chanel.png`,
  tags:['clothes', 'designer'],
bio: 'efef',
stock: 2,
},



]}
