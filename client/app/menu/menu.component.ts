import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
      const connect: boolean = authenticationService.isConnected;
      console.log(connect);
  }



  ngOnInit() {


  }

}
