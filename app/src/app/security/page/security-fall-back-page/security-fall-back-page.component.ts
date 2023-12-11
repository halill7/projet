import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-security-fall-back-page',
  standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './security-fall-back-page.component.html',
  styleUrls: ['./security-fall-back-page.component.scss']
})
export class SecurityFallBackPageComponent {

}
