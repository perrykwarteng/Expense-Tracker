import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/reusableComponent/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  isOpen: boolean = true;
  isClose: boolean = true;

  onToggle() {
    this.isOpen = !this.isOpen;
    this.isClose = !this.isClose;
    console.log('yuio');
  }
}
