import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidenav',{static:true}) sidenav: MatSidenav;
  opened = true;
  public appPages = [
    {
      title: 'Articles',
      url: '/dashboard/tabs/view-articles',
      icon: 'book'
    },
    {
      title: 'Committee Members',
      url: '/dashboard/tabs/committee-members',
      icon: 'people'

    },
    {
      title: 'Members',
      url: '/dashboard/tabs/members',
      icon: 'people-circle'

    },
    {
      title:'gallery',
      url:'/dashboard/tabs/gallery',
      icon:'image'
    },
    {
      title:'profile',
      url:'/dashboard/tabs/profile',
      icon:'person'
    }


  ];

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }
  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
}
