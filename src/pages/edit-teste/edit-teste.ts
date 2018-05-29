import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TesteOrtopedicoProvider, testeOrtopedico } from '../../providers/teste-ortopedico/teste-ortopedico';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-edit-teste',
  templateUrl: 'edit-teste.html',
})
export class EditTestePage {

  modal: testeOrtopedico = {
    nome: '',
    procedimento: '',
    anatomia_id: 0,
    ativo: true
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: TesteOrtopedicoProvider) { 
    if(this.navParams.data){
      this.modal = this.navParams.data;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTestePage');
  }

  updateTeste(modal: testeOrtopedico) {
    this.provider.update(modal)
      .then(() => {
        this.navCtrl.push(HomePage);
      })
  }

  removeTeste(modal: testeOrtopedico) {
    this.provider.remove(modal)
      .then(() => {
        this.navCtrl.push(HomePage);
      })
  }

}
