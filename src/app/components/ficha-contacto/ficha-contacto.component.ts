import { Component, Input, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonAvatar, IonItemOption, IonIcon } from "@ionic/angular/standalone";
import { Contacto } from 'src/app/interfaces/contacto';
import { trash} from "ionicons/icons";
import { addIcons } from 'ionicons';
import { ContactosService } from 'src/app/services/contactos.service';


@Component({
  selector: 'app-ficha-contacto',
  templateUrl: './ficha-contacto.component.html',
  styleUrls: ['./ficha-contacto.component.scss'],
  standalone: true,
  imports: [IonIcon, IonItemOption, IonAvatar, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonLabel, IonItem, ]
})


export class FichaContactoComponent  implements OnInit {

  @Input() elcontacto: Contacto | undefined;

  constructor(public contactosService: ContactosService) { 
    addIcons({trash}); 
  }

  ngOnInit() {}

  eliminar( contacto : Contacto) {
    this.contactosService.eliminarUsuario(contacto);
  }

}
