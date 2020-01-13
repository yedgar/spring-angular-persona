import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/Persona';
import { PersonaService } from '../../services/persona.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  persona: Persona;

  constructor(private personaService: PersonaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var id = params['id'];
      this.personaService.findPersonaById(id).subscribe(data => {
        this.persona = data;
      });
   });
  }

  actualizar() {
    this.personaService.actualizarPersona(this.persona).subscribe(data =>{
      alert("La persona fue actualizada");
      this.router.navigate(["listar"]);
    })
  }
}
