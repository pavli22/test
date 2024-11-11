import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "./Components/side-bar/side-bar.component";
import { TopBarComponent } from "./Components/top-bar/top-bar.component";
import { DashboardComponent } from "./Components/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SideBarComponent, TopBarComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}
