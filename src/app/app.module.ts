import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuModule } from 'primeng/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { RouterModule, Routes } from '@angular/router';
import { TiempoEsperaComponent } from './Components/tiempo-espera/tiempo-espera.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { CapacidadComponent } from './Components/capacidad/capacidad.component';
import { RecorridosComponent } from './Components/recorridos/recorridos.component';
import { PuntoEsperaComponent } from './Components/punto-espera/punto-espera.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { MapaComponent } from './Components/mapa/mapa.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'mapa', component: MapaComponent },
  { path: 'perfil', component: PerfilComponent},
  { path: 'punto-espera', component: PuntoEsperaComponent},
  { path: 'recorridos', component: RecorridosComponent},
  { path: 'side-menu', component: SideMenuComponent},
  { path: 'tiempo-espera', component: TiempoEsperaComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'capacidad', component: CapacidadComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TiempoEsperaComponent,
    PerfilComponent,
    CapacidadComponent,
    RecorridosComponent,
    PuntoEsperaComponent,
    UsuariosComponent,
    MapaComponent,
    RegistroComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    RouterModule.forRoot(routes)
  ],
  exports: [
    MatIconModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
