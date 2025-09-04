import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,Navbar,Sidebar,Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
