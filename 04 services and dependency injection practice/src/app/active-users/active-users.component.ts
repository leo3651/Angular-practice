import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChangeUserStatusService } from '../change-user-status.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  constructor(private changeStatusService: ChangeUserStatusService) {}
  users: string[] = this.changeStatusService.activeUsers;

  onSetToInactive(id: number) {
    this.changeStatusService.SetToInactive(id);
  }
}
