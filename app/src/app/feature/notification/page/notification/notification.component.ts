import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HomebarComponent} from "../../../../dashboard/home/page/homebar/homebar.component";
import {RecentActivityComponent} from "../../../profile/component/recent-activity/recent-activity.component";
import {RouterOutlet} from "@angular/router";
import {YourPageComponent} from "../../../profile/component/your-page/your-page.component";

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, FormsModule, HomebarComponent, RecentActivityComponent, RouterOutlet, YourPageComponent],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

}
