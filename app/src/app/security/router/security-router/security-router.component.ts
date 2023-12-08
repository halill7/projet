import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-security-router',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './security-router.component.html',
  styleUrls: ['./security-router.component.scss']
})
export class SecurityRouterComponent {

}
