import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { ActionSequence } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

    create(product){
      return this.db.list('/products').push(product);
    }

    getAll() {
      return this.db.list('/products')
      .snapshotChanges().pipe(map(actions=>
        actions.map(a=>({key:a.key,...a.payload.val()}))
        ));
        
      
    }
    get(id){
      return this.db.object('/products/'+id);
    }
}
 