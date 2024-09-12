import { Injectable } from '@angular/core';
import { Contacto } from '../interfaces/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  public contactos: Contacto[] = []

  constructor() { }

  public agregar(contacto: Contacto) {
    this.contactos.push(contacto)
  }

  public eliminar(contactos: Contacto) {
    let posicionContacto = this.contactos.indexOf(contactos);
    this.contactos.splice(posicionContacto,1)
  }

}
