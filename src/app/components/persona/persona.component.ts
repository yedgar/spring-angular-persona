import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../model/Persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas: Persona[];

  constructor(private personaService: PersonaService, private router: Router) {
  }

  ngOnInit() {
    this.personaService.getPersonas().subscribe(data => {
      this.personas = data;
    });
  }

  editar(persona: Persona) {
    this.router.navigate(["edit", persona.id]);
  }

  eliminar(persona: Persona) {
    this.personaService.eliminarPersona(persona).subscribe(data => {
      alert("La persona fue eliminada ");
      this.personas = this.personas.filter( p => p.id !== persona.id);
    });
  }
}
