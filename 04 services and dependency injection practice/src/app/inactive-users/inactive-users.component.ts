import { Component } from '@angular/core';
import { ChangeUserStatusService } from '../change-user-status.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  constructor(private changeStatusService: ChangeUserStatusService) {}
  users: string[] = this.changeStatusService.inactiveUsers;

  onSetToActive(id: number) {
    this.changeStatusService.SetToActive(id);
  }
}
