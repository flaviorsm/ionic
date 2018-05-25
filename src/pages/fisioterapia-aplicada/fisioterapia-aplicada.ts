import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListarTestesPage } from '../listar-testes/listar-testes';
import { CadastrarTestesPage } from '../cadastrar-testes/cadastrar-testes';

@Component({
  selector: 'page-fisioterapia-aplicada',
  templateUrl: 'fisioterapia-aplicada.html'
})
export class FisioterapiaAplicadaPage {

  constructor(public navCtrl: NavController) {
  }
  goToListarTestes(params){
    if (!params) params = {};
    this.navCtrl.push(ListarTestesPage);
  }goToCadastrarTestes(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarTestesPage);
  }
}
