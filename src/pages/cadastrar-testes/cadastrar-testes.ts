import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { TesteOrtopedicoProvider, TesteOrtopedico } from '../../providers/teste-ortopedico/teste-ortopedico';
import { AnatomiaProvider } from '../../providers/anatomia/anatomia';

import { ListarTestesPage } from '../listar-testes/listar-testes';

@Component({
  selector: 'page-cadastrar-testes',
  templateUrl: 'cadastrar-testes.html'
})
export class CadastrarTestesPage {
  model: TesteOrtopedico;
  anatomias: any[];

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private testeProvider: TesteOrtopedicoProvider,
    private anatomiaProvider: AnatomiaProvider) {
      this.model = new TesteOrtopedico();
      if(this.navParams.data.id){
        this.testeProvider.getById(this.navParams.data.id)
          .then((result: any) => {
            this.model = result;
          });
      }
  }

  ionViewDidLoad() {
    this.anatomiaProvider.getAll()
      .then((result: any[]) => {
        this.anatomias = result;
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao carregar anatomias.', duration: 3000, position: 'botton' }).present();
      })
  }

  save() {
    this.saveTestes()
      .then(() => {
        this.toast.create({ message: 'Teste inserido com sucesso.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar teste.', duration: 3000, position: 'botton' }).present();
      })
  }

  private saveTestes() {
    if(this.model.id) {
      return this.testeProvider.update(this.model);
    } else {
      return this.testeProvider.insert(this.model);
    }
  }

  backLista() {
    this.navCtrl.push(ListarTestesPage);
  }
}
