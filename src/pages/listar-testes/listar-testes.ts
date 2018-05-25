import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarTestesPage } from '../cadastrar-testes/cadastrar-testes';
import { ListarTestesPage } from '../listar-testes/listar-testes';

@Component({
  selector: 'page-listar-testes',
  templateUrl: 'listar-testes.html'
})
export class ListarTestesPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastrarTestes(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarTestesPage);
  }goToListarTestes(params){
    if (!params) params = {};
    this.navCtrl.push(ListarTestesPage);
  }
}
