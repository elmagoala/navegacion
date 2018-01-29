import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  pagina3:any = Pagina3Page;
  categorias:any[] = [
    {
      nombre: "Cloud Computing",
      descripcion: "Network of remote servers hosted on the Internet to store"
    },
    {
      nombre: "Data Science",
      descripcion: "Practice of deriving valuable insights from data"
    },
    {
      nombre: "DevOps",
      descripcion: "Practices that emphasize on collaboration and communication"
    },
    {
      nombre: "Digital Foundation",
      descripcion: "Foundation of the Digital Courses"
    }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3( categoria:any ) {
      this.navCtrl.push( Pagina3Page, {'categoria':categoria});
  }

}
