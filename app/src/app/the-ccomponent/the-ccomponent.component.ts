import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-the-ccomponent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './the-ccomponent.component.html',
  styleUrls: ['./the-ccomponent.component.scss']
})
export class TheCComponentComponent {
  title = "My title";
}
