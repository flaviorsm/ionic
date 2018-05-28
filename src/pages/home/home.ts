import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TesteListPage } from '../teste-list/teste-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  listarTeste() {
    this.navCtrl.push(TesteListPage);
  }
  
}
