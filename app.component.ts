import { Component } from '@angular/core';
import { NotificationService } from './notification.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularUI';

  constructor(private notifyService: NotificationService) { }

  showToasterSuccess() {
    this.notifyService.showSuccess("Data shown successfully !!")
  }

  showToasterError() {
    this.notifyService.showError("Something is wrong")
  }

  showToasterInfo() {
    this.notifyService.showInfo("This is info")
  }

  showToasterWarning() {
    this.notifyService.showWarning("This is warning")
  }
}
