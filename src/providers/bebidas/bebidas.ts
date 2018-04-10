import {AngularFireDatabase} from 'angularfire2/database'
import { Injectable } from '@angular/core';


//provider bebidas com firebase
@Injectable()
export class BebidasProvider {
   private PATH = "/bebidas";

  constructor(public db: AngularFireDatabase) {   
  }

  // retonar objetos no bd
  getAll(){
    return this.db.list(this.PATH, ref => ref.orderByChild('nome'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }
  

  // para retornar 1 obejeto

  get(key: string){
    return this.db.object(this.PATH + key);
  }

  //cadastrar objeto no bd
  
  save(bebidas: any){
    return new Promise((resolve, reject)=>{
      if(bebidas.key){
        this.db.list(this.PATH)
        .update(bebidas.key, {nome: bebidas.nome, valor: bebidas.valor, imagem: bebidas.url })
        .then(() => resolve)
        .catch((e) => reject(e));
      }
      else{
        this.db.list(this.PATH)
        .push({nome: bebidas.nome, valor: bebidas.valor, imagem: bebidas.url})
        .then(()=>resolve);
      }
    });

  }

  remove(key: string){
    return this.db.list(this.PATH).remove(key);
  }



}
