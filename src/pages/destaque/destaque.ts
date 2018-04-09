import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BebidasPage} from '../bebidas/bebidas';


@IonicPage()
@Component({
  selector: 'page-destaque',
  templateUrl: 'destaque.html',
})
export class DestaquePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  abrirBebidas(){
    
    this.navCtrl.push(BebidasPage);
    
  }

  

}
