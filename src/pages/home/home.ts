import 'rxjs/add/operator/map'
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { TesteOrtopedicoProvider, testeOrtopedico } from '../../providers/teste-ortopedico/teste-ortopedico';
import { AddTestePage } from '../add-teste/add-teste';
import { EditTestePage } from '../edit-teste/edit-teste';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaTeste: Observable<testeOrtopedico[]>;

  constructor(public navCtrl: NavController, private provider: TesteOrtopedicoProvider) {
    this.listaTeste = this.provider.getAll()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        }
      );
  }

  addTestePage() {
    this.navCtrl.push(AddTestePage);
  }
  
  editTestePage(teste: testeOrtopedico) {
    this.navCtrl.push(EditTestePage, { teste });
  }
}
