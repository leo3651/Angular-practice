import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  activatedEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  subject: Subject<boolean> = new Subject<boolean>();
}
