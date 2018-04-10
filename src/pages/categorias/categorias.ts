import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BebidasPage } from '../bebidas/bebidas';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  itens = [
  'Promo Carnaval Express',
  'Pizzas',
  'Bebidas'
  ];

  itemSelected(item: string) {
    if(item ='Bebidas'){
      this.navCtrl.push(BebidasPage);
    }
    console.log("Selected Item", item);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

}
