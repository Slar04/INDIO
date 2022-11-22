import { Component } from '@angular/core';
import { MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy} from '@angular/core';
import { NavItem } from '../app/nav-item';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];

  menu: NavItem [] = 
  [
    {
      displayName: 'Escritorio',
      iconName: 'bi bi-star-fill',
      route: '/home',
    },        
    {
      displayName: 'Entradas GADE',
      iconName: 'ballot',
      route: '/header'
    },
    {
      displayName: 'Expedientes',
      iconName: 'description',
      route: '/side'
    },
    {
      displayName: 'Perfiles',
      iconName: 'group'
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
