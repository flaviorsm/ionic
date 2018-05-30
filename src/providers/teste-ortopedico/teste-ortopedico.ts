import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

export interface testeOrtopedico {
  key?: string;
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
  }
  
  save(teste: testeOrtopedico) {
    return this.testeOrtopedicoRef.push(teste);
  }

  update (teste: testeOrtopedico) {
    return this.testeOrtopedicoRef.update(teste.key, teste);
  }
  
  remove(teste: testeOrtopedico) {
    return this.testeOrtopedicoRef.remove(teste.key);
  }
}