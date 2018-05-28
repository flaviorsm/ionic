import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class AnatomiaProvider {

  constructor(private dbProvider: DatabaseProvider) { }

  public getAll() {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT * FROM anatomia';
        
        return db.executeSql(sql, [])
          .then((data: any) => {
            if(data.rows.length > 0) {
              let anatomias: any[] = [];
              for (let i = 0; i < data.rows.length; i++) {
                var anatomia = data.rows.item(i);
                anatomias.push(anatomia);
              }
              return anatomias;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
}
