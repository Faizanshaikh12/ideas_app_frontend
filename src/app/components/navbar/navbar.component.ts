import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: ['/'],
      icon: 'pi pi-home'
    },
    {
      label: 'Users',
      routerLink: ['/users']
    },
    {
      label: 'Ideas',
      routerLink: ['/ideas']
    }
  ];


  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }


}
