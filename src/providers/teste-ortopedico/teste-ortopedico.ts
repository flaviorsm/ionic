import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class TesteOrtopedicoProvider {

  constructor(private dbProvider: DatabaseProvider) { }

  public insert(teste: TesteOrtopedico){
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'INSERT INTO teste_ortopedico (nome, descricao, ativo, anatomia_id) VALUES (?, ?, ?, ?)';
        let dados = [teste.nome, teste.descricao, teste.ativo ? 1 : 0, teste.anatomia_id];

        return db.executeSql(sql, dados)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public update(teste: TesteOrtopedico){
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'UPDATE teste_ortopedico SET nome = ?, descricao = ?, ativo = ?, anatomia_id = ? where id = ?';
        let dados = [teste.nome, teste.descricao, teste.ativo ? 1 : 0, teste.anatomia_id, teste.id];

        return db.executeSql(sql, dados)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public remove(id: number){
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'DELETE FROM teste_ortopedico WHERE id = ?';
        let dados = [id];

        return db.executeSql(sql, dados)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getById(id: number){
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT * FROM teste_ortopedico WHERE id = ?';
        let dados = [id];

        return db.executeSql(sql, dados)
          .then((data: any) => {
            if(data.rows.length > 0){
              let item = data.rows.item(0);
              let teste = new TesteOrtopedico();
              teste.id = item.id;
              teste.nome = item.nome;
              teste.descricao = item.descricao;
              teste.ativo = item.ativo;
              teste.anatomia_id = item.anatomia_id;

              return teste;
            }
            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getAll(ativo: boolean, nome: string = null) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT t.*, a.nome as anatomia_nome FROM teste_ortopedico t INNER JOIN anatomia a ON a.id = t.anatomia_id WHERE t.ativo = ?';
        let dados: any[] = [ativo ? 1 : 0];
        if(nome) {
          sql += ' AND t.nome like ?';
          dados.push('%'+ nome + '%');
        }
        
        return db.executeSql(sql, dados)
          .then((data: any) => {
            if(data.rows.length > 0) {
              let testes: any[] = [];
              for (let i = 0; i < data.rows.length; i++) {
                var teste = data.rows.item(i);
                testes.push(teste);
              }
              return testes;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
}

export class TesteOrtopedico {
  id: number;
  nome: string;
  descricao: string;
  ativo: boolean;
  anatomia_id: number;
}