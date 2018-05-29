import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TesteOrtopedicoProvider, testeOrtopedico } from '../../providers/teste-ortopedico/teste-ortopedico';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-add-teste',
  templateUrl: 'add-teste.html',
})
export class AddTestePage {

  modal: testeOrtopedico = {
    nome: '',
    procedimento: '',
    anatomia_id: 0,
    ativo: true
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: TesteOrtopedicoProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTestePage');
  }

  addTeste(modal: testeOrtopedico) {
    this.provider.save(modal)
        .then(ref => {
          this.navCtrl.push(HomePage);
        })
  }
}
