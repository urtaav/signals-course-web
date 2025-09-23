import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as fromComponents from '../../shared/components';
import { NavigationLoadingService } from './services/navigation-loading.service';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, ...fromComponents.components, Footer,Navbar,Sidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  navigationService = inject(NavigationLoadingService);
}
