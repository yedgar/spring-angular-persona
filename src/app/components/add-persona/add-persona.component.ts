import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../model/Persona';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  constructor(private router: Router, private personaService: PersonaService) { }

  ngOnInit() {
  }

  guardar(form) {
    let persona = new Persona();
    persona.nombre = form.value.nombre;
    persona.apellido = form.value.apellido;
    this.personaService.guardarPersona(persona).
    subscribe(data => {
      alert("Se agrego la persona");
      this.router.navigate(["listar"]);
    });
  }
}
