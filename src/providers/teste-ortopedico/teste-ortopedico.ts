import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

export interface testeOrtopedico {
  key: string;
  nome: string;
  procedimento: string;
  ativo: boolean;
  anatomia_id: number;
}

@Injectable()
export class TesteOrtopedicoProvider {
  private testeOrtopedicoRef = this.db.list<testeOrtopedico>('teste-ortopedico');

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.testeOrtopedicoRef;
    // return this.db.list(this.PATH, ref => ref.orderByChild('nome'))
    //   .snapshotChanges()
    //   .map(changes => {
    //     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    //   })
  }

  save(teste: testeOrtopedico) {
    return this.testeOrtopedicoRef.push(teste);
    // return new Promise((resolve, reject) => {
    //   if (teste.key) {
    //     this.db.list(this.PATH)
    //       .update(teste.key, { nome: teste.nome, procedimento: teste.procedimento, ativo: teste.ativo, anatomia_id: teste.anatomia_id })
    //       .then(() => resolve())
    //       .catch((e) => reject(e));
    //   } else {
    //     this.db.list(this.PATH)
    //       .push({ nome: teste.nome, procedimento: teste.procedimento, ativo: teste.ativo, anatomia_id: teste.anatomia_id })
    //       .then(() => resolve());
    //   }
    // })
  }
  update (teste: testeOrtopedico) {
    return this.testeOrtopedicoRef.update(teste.key, teste);
  }
  remove(teste: testeOrtopedico) {
    return this.testeOrtopedicoRef.remove(teste.key);
  }
}