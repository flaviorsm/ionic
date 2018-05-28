import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { TesteOrtopedicoProvider, testeOrtopedico } from './../../providers/teste-ortopedico/teste-ortopedico';
import { Observable } from 'rxjs/Observable';
import { TesteEditPage } from '../teste-edit/teste-edit';

@IonicPage()
@Component({
  selector: 'page-teste-list',
  templateUrl: 'teste-list.html',
})
export class TesteListPage {
  testes: Observable<testeOrtopedico[]>;

  constructor(public navCtrl: NavController, 
             private provider: TesteOrtopedicoProvider,
             private toast: ToastController) {
    this.testes = this.provider.getAll()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
        }))
    });
  }

  // ionViewDidLoad() {
  //   this.testes = this.provider.getAll();
  // }

  novoTeste() {
    this.navCtrl.push(TesteEditPage);
  }

  editarTeste(teste: testeOrtopedico) {
    this.navCtrl.push(TesteEditPage, { teste });
  }

  // removerTeste(id: string) {
  //   if (id) {
  //     this.provider.remove(id)
  //       .then(() => {
  //         this.toast.create({ message: 'Teste removido sucesso.', duration: 3000 }).present();
  //       })
  //       .catch(() => {
  //         this.toast.create({ message: 'Erro ao remover o teste.', duration: 3000 }).present();
  //       });
  //   }
  // }
}
