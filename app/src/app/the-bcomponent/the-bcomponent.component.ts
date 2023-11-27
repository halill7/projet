import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-the-bcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './the-bcomponent.component.html',
  styleUrls: ['./the-bcomponent.component.scss']
})
export class TheBComponentComponent {
  signIn(): void {
    alert('je clique');
  }
}
