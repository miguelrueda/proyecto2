import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
      // return this.db.list(cat).valueChanges();
      return this.db.list(`${cat}`).snapshotChanges().pipe(
        map(items => {
         return items.map(a => {
           const data = a.payload.val();
           const _key = a.payload.key;

           return { _key, data };
         });
        })
     );
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
