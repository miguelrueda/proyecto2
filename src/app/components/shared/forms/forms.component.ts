import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CineService } from 'src/app/services/cine.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  usuario: Object = {
    nombre: 'Miguel',
    apellido: 'Rueda',
    correo: 'miguel@rueda.com'
  };

  constructor(private cineService: CineService) { }

  ngOnInit() {
  }

  enviar(form: NgForm) {

    if (form.pristine) {
      console.log('El usuario no interactuo con el form');
    } else {
      console.log(form);

      console.log('VALIDACION NOMBRE');
      if (form.controls.nombre.invalid) {
        console.log('El campo es invalido');
        if (form.controls.nombre.errors.minlength) {
          console.log('El tamaño requerido es ' + form.controls.nombre.errors.minlength.requiredLength);
        }
      }
      if (!form.controls.nombre.touched) {
        console.log('El campo no fue tocado');
      }
      if (form.controls.nombre.pristine) {
        console.log('No interactuo con el campo');
      }

      console.log('VALIDACION APELLIDO');
      if (form.controls.apellido.invalid) {
        console.log('El campo es invalido');
        if (form.controls.apellido.errors.minlength) {
          console.log('El tamaño requerido es ' + form.controls.apellido.errors.minlength.requiredLength);
        }
      }
      if (!form.controls.apellido.touched) {
        console.log('El campo no fue tocado');
      }
      if (form.controls.apellido.pristine) {
        console.log('No interactuo con el campo');
      }

      console.log('VALIDACION CORREO');
      if (form.controls.correo.invalid) {
        console.log('El campo es invalido');
        if (form.controls.correo.errors.required) {
          console.log('El campo es requerido');
        }
        if (form.controls.correo.errors.pattern) {
          console.log('El campo no cumple el patron');
        }
      }
      if (!form.controls.apellido.touched) {
        console.log('El campo no fue tocado');
      }
      if (form.controls.apellido.pristine) {
        console.log('No interactuo con el campo');
      }
  }

    // this.cineService.create('usuario', this.usuario);
  }

}
