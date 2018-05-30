import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListarTestesPage } from '../listar-testes/listar-testes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) { }
  
  goToListarTestes(params){
    this.navCtrl.push(ListarTestesPage);
  }

}