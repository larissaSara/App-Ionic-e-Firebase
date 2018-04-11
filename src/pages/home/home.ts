import { Profile } from './../../models/profile';
import { AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  destaqueRoot = 'DestaquePage'
  categoriasRoot = 'CategoriasPage'  

  profileData: AngularFireObject<Profile>
 
  constructor(private afAuth:AngularFireAuth , private afDatabase: AngularFireDatabase,
    private toast: ToastController,public navCtrl: NavController) {

  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
      this.toast.create({
        message:`Bem Vindo ao Vapt Pizzas, ${data.email}`,
        duration: 4000
      }).present();

      this.profileData = this.afDatabase.object(`profile/${data.uid}`)
    }
    else{
      this.toast.create({
        message:'Não foi possivel encontrar autenticação!',
        duration: 3000
      }).present();
    }
    });

  }

}
