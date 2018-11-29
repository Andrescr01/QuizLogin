import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RegistrarePage } from '../registrare/registrare';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuarios = [];
  usuario = "";
  registrarse = RegistrarePage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {
    this.storage.keys()
      .then(keys => {
        if (keys.some(key => key == 'usuario')) {
          this.storage.get('usuario')
            .then(usuarios => {
              this.usuarios = JSON.parse(usuarios);
            });
        }

      });
  }
  clickRegistrarse() {
    this.navCtrl.push(this.registrarse,{usuarios: this.usuarios});

  }

}
