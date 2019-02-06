import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Actor } from '../interfaces/actor';

@Injectable({
  providedIn: 'root'
})
export class CineService {

  actors: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.actors = db.list('/actors').valueChanges();
  }

  public getActor(id: number): AngularFireObject<any> {
    const actor = this.db.object(`/actors/${id}`);
    return actor;
  }

  public createActor(newname: string, value: string) {
    const itemRef = this.db.object('name');
    itemRef.set({ name: newname, property: value});
  }

  public updateActor(id: number, value: string) {
    const actor = this.getActor(id);
    actor.update({property: value});
  }

  public removeActor(id: number) {
    const itemRef = this.getActor(id);
    itemRef.remove();
  }

  public getMovie(id: number): AngularFireObject<any> {
    const movie = this.db.object(`/movies/${id}`);
    return movie;
  }

  public createMovie(newname: string, value: string) {
    const itemRef = this.db.object('name');
    itemRef.set({ name: newname, property: value});
  }

  public updateMovie(id: number, value: string) {
    const movie = this.getMovie(id);
    movie.update({property: value});
  }

  public removeMovie(id: number) {
    const itemRef = this.getMovie(id);
    itemRef.remove();
  }

  public getCategory(id: number): AngularFireObject<any> {
    const category = this.db.object(`/categories/${id}`);
    return category;
  }

  public createCategory(newname: string, value: string) {
    const itemRef = this.db.object('name');
    itemRef.set({ name: newname, property: value});
  }

  public updateCategory(id: number, value: string) {
    const category = this.getCategory(id);
    category.update({property: value});
  }

  public removeCategory(id: number) {
    const itemRef = this.getCategory(id);
    itemRef.remove();
  }

}
