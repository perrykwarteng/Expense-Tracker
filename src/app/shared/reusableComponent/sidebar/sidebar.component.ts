import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isOpen: boolean = true;
  isClose: boolean = false;

  toggel() {
    this.isOpen = !this.isOpen;
    this.isClose = !this.isClose;
  }
}
