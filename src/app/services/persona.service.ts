import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../model/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'http://localhost:8080/ejemplo01/personas';

  constructor(private http: HttpClient) { }

  getPersonas(){
    return this.http.get<Persona[]>(this.URL);
  }

  guardarPersona(persona: Persona) {
    return this.http.post<Persona>(this.URL, persona);
  }

  findPersonaById(id: number) {
    return this.http.get<Persona>(this.URL + "/" + id);
  }

  actualizarPersona(persona: Persona) {
    return this.http.put<Persona>(this.URL, persona);
  }

  eliminarPersona(persona: Persona) {
    return this.http.delete<Persona>(this.URL + "/" + persona.id);
  }
}
