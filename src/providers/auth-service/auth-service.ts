import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { User } from '../user/user';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AuthServiceProvider {

  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private facebook: Facebook) {
    this.user = angularFireAuth.authState;
  }

  createUser(user: User){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

  }

 /* signInWithFacebook() {
    return this.facebook.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        //https://developers.facebook.com/docs/graph-api/reference/user
        //Ao logar com o facebook o profile do usuario é automaticamente atualizado.
        return this.angularFireAuth.auth.signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken));
      });
  }

  signOut() : firebase.Promise<any> {
    if (this.angularFireAuth.auth.currentUser.providerData.length) {
      for (var i = 0; i < this.angularFireAuth.auth.currentUser.providerData.length; i++) {
        var provider = this.angularFireAuth.auth.currentUser.providerData[i];

        if (provider.providerId == firebase.auth.FacebookAuthProvider.PROVIDER_ID) { // Se for facebook
          return this.facebook.logout()
            .then(() => {
              return this.signOutFirebase();
            })

          }    
        }
      } 


    return this.signOutFirebase();
    } 

    signOut(){
      return this.angularFireAuth.auth.signOut();
    

    private signOutFirebase() {
      return this.angularFireAuth.auth.signOut();
    }
*/
}
