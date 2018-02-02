import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  btnToggled = false;
  sidenavButtons = ['User list', 'Material mrp'];
  selectedItem = null;

  buttonClick( index: number ) {
    debugger;
//    this.btnToggled = !this.btnToggled;
    this.selectedItem = index;
  }
}


