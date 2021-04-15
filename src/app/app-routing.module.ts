import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './pagina/lista/lista.component';
import { ContatoComponent } from './pagina/contato/contato.component';
import { HomeComponent } from './pagina/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Contact', component: ContatoComponent },
  { path: 'List', component: ListaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
