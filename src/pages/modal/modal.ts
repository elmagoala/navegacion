import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  cerrarConParametros() {
    this.viewCtrl.dismiss();
  }

  cerrarSinParametros() {
    this.viewCtrl.dismiss();
  }

}
