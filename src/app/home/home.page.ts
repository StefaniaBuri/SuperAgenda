import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';
import { Contacto } from '../interfaces/contacto';
import { ContactosService } from '../services/contactos.service';
import { CommonModule } from '@angular/common';
import { FichaContactoComponent } from "../components/ficha-contacto/ficha-contacto.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonItem, IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule, FichaContactoComponent],
})
export class HomePage {

  
  public contacto: Contacto = { nombre: "", telefono: "", email: ""};


  constructor(public contactosService: ContactosService) {}

  agregar() {
    //console.log("Agregando");
    this.contactosService.agregar(this.contacto);
    
  }
}
