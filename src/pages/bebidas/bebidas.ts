import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { BebidasProvider } from '../../providers/bebidas/bebidas';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-bebidas',
  templateUrl: 'bebidas.html',
})
export class BebidasPage {
  
  bebidas: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bd: BebidasProvider, public modalCtrl: ModalController) {
    
    this.bebidas = this.bd.getAll();
  }

  bebidasSelecionadas(item){
    console.log(item);
  }

  

}
