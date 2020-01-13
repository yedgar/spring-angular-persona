import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from './components/persona/persona.component';
import { AddPersonaComponent } from './components/add-persona/add-persona.component';
import { EditPersonaComponent } from './components/edit-persona/edit-persona.component';

const routes: Routes = [
  {path: 'listar', component: PersonaComponent},
  {path: 'add', component: AddPersonaComponent},
  {path: 'edit/:id', component: EditPersonaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
