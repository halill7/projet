import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputComponent} from "../../../shared/ui/form/component/input/input.component";

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {
  title: string = 'Welcome back!';
  subTitle: string = 'Identifiez-vous pour accéder à l\'administration';

  signIn(): void {
    alert('je clique');
  }
  coucouHandler(str: string): void {
    alert(str);
  }
}
