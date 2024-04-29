import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
  constructor(private loggingService: LoggingService) {}

  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdated: EventEmitter<string> = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingService.loggingStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.loggingStatusChange(status);
  }
}
