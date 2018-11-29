import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-registrare',
  templateUrl: 'registrare.html',
})
export class RegistrarePage {
  usuarios = [];
  nombre = '';
  apellido = '';
  correo = '';
  usuario = '';
  contraseña = '';
  confirmacion = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public storage: Storage) {
    this.storage.keys()
      .then(keys => {
        if (keys.some(key => key == 'usuarios')) {
          this.storage.get('usuarios')
            .then(usuarios => {
              this.usuarios = JSON.parse(usuarios);
            });
        }

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarePage');
  }

  Remove(u: any) {
    let index = this.usuarios.findIndex(usuario => usuario.usuario == u.usuario);
    if (index >= 0) {
      this.usuarios.splice(index, 1);
    }
    this.storage.set('usuarios', JSON.stringify(this.usuarios));
  }
  clickanadir(c) {
    if (this.nombre.length > 0 && this.usuario.length > 0) {
      this.usuarios.push(
        {
          nombre: this.nombre,
          cel: this.apellido,
          correo: this.correo,
          contraseña: this.contraseña,
          confirmacion: this.confirmacion,
      
        }
      );
      this.usuario = "";

      this.storage.set('usuarios', JSON.stringify(this.usuarios));
    }
    else {
      console.log("Debes completar todos los campos");

      const alert = this.alertCtrl.create({
        title: "OYE!",
        subTitle: "Rellena todo",
        buttons: ['Ok']
      });
      alert.present();
    }
  }

}
