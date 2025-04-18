import { Component } from '@angular/core';
import { NotificationsComponent } from "../notifications/notifications.component";

@Component({
  selector: 'app-help-center',
  imports: [NotificationsComponent],
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.scss'
})
export class HelpCenterComponent {

}
