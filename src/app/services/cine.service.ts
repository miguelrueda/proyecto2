import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Actor } from '../interfaces/actor';

@Injectable({
  providedIn: 'root'
})
export class CineService {

  constructor(private db: AngularFireDatabase) {
  }

  read(cat: string, key?: string): Observable<{}[]> {
    if (key) {
      return this.db.list(`${cat}/${key}`).valueChanges();
    } else {
      return this.db.list(cat).valueChanges();
    }
  }

  create(cat: string, param: Object): Promise<any> {
    const itemRef = this.db.list(cat);
    return itemRef.push(param);
  }

  update(cat: string, key: string, param: Object): Promise<any> {
    const itemRef = this.db.list(cat);
    return itemRef.update(key, param);
  }

  delete(cat: string, key: string): Promise<any> {
    const itemRef = this.db.list(cat);
    return itemRef.remove(key);
  }

}
