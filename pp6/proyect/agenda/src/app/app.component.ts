import { Component, OnInit } from '@angular/core';

import { Contacto } from './contacto';
import { ContactoService } from './app/contacto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  Contactos: Contacto[];
  error='';
  success='';
  title = 'agenda';
  constructor(private ContactoService:ContactoService){}
  ngOnInit() {
    this.geContactos();
  }
        
  geContactos(): void {
    this.ContactoService.getAll().subscribe(
      (res: Contacto[]) => {
        this.Contactos = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  contacto = new Contacto(0,'',0,'');
  addContactos(f) {
    this.error = '';
    this.success = '';

    this.ContactoService.store(this.Contactos)
      .subscribe(
        (res: Contacto[]) => {
          // Update the list of contacts
          this.Contactos = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
}
updateContactos(id, name, age, cellphone) {
  this.success = '';
  this.error = '';

  this.ContactoService.update({ id:id.value, name:name.value, age: age.value, cellphone: cellphone.value })
    .subscribe(
      (res) => {
        this.contacto    = res;
        this.success = 'Updated successfully';
      },
      (err) => this.error = err
    );
}
}

