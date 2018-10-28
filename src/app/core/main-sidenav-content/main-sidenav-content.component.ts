import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'main-sidenav-content',
  templateUrl: './main-sidenav-content.component.html',
  styleUrls: ['./main-sidenav-content.component.scss']
})
export class MainSidenavContentComponent implements OnInit {

  menu: Array<MenuItem> =  new Array<MenuItem>();
  constructor(private router: Router) { 
  }

  ngOnInit() {
    //Initialize Menu Items
    var menuItem = new MenuItem();
    menuItem.name = "Home";
    menuItem.route = "home";
    this.menu.push(menuItem);
    var menuItem = new MenuItem();
    menuItem.name = "Customers";
    menuItem.route = "customers";
    this.menu.push(menuItem);
    
  }
  menuClick(menuItem: MenuItem) {
    console.log(menuItem);
    this.router.navigate([menuItem.route]);
  }

}
class MenuItem{
  name: string;
  route: string;
}