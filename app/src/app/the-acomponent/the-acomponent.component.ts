import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-the-acomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './the-acomponent.component.html',
  styleUrls: ['./the-acomponent.component.scss']
})
export class TheAComponentComponent {
  test = "testId";

}
