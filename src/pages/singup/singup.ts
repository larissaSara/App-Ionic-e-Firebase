import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/user/user';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {

  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private authService: AuthServiceProvider) {
  }

 createAccount(){
   //Seo formularios estiver valido
   if(this.form.form.valid){
    let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
    
    //chamar o serrviço de auteticação e passar o usuario
    this.authService.createUser(this.user)
    .then((user: any) =>{ //Se ocorreu com sucesso passar mensagem de sucesso
      user.sendEmailVerification();//email de verificação de conta
      toast.setMessage('Usuário criado com sucesso!');
      toast.present();

      this.navCtrl.setRoot(HomePage);
    })
    .catch((error: any) =>{
      if(error.code == "auth/email-already-in-use"){
        toast.setMessage('O e-mail digitado já está em uso.');
      } else if(error.code == "auth/invalid-email"){
        toast.setMessage('O e-mail digitado não é valido.');
      } else if(error.code == "auth/operation-not-allowed"){
        toast.setMessage('Não está habilitado criar usuários.');
      } else if(error.code == "auth/weak-password"){
        toast.setMessage('A senha digitada é muito fraca.');
      }
      toast.present();
    });
   }
 }
}
