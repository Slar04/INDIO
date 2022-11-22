import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MenuModule} from 'primeng/menu';
import { MenuItem} from 'primeng/api';
import { SelectionModel} from '@angular/cdk/collections';
import { MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy} from '@angular/core';
import { NavItem } from '../../nav-item'
import { MatTableDataSource} from '@angular/material/table';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];

  menu: NavItem [] = [
        {
          displayName: 'Escritorio',
          iconName: 'desktop_windows',
          route: 'escritorio',
        },        
        {
          displayName: 'Entradas GADE',
          iconName: 'ballot',
          route: 'entradasGADE',
        },
        {
          displayName: 'Expedientes',
          iconName: 'description',          
          children: [
            {
              displayName: 'Mis Expedientes',
              iconName: 'how_to_reg',
              route: '/misexpedientes'
            },
            { 
              displayName: 'Todos',
              iconName: 'waves',
              route: '/todos'
            }
          ]
        },
        {
          displayName: 'Perfiles',
          iconName: 'group',
          children: [
              {
                displayName: 'Búsqueda Perfil',
                iconName: 'search',
                route: '/busquedaperfiles'
              }
            ]
          }
      ];

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}