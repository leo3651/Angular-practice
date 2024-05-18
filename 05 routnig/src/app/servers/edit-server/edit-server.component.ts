import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanDeactivateComponent } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanDeactivateComponent {
  server: { id: number; name: string; status: string };
  serverName: string = '';
  serverStatus: string = '';
  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute);
    console.log(this.activatedRoute.snapshot.params);
    //console.log(this.activatedRoute.snapshot.fragment);

    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.allowEdit = params['allowEdit'] === '1' ? true : false;
    });
    //this.activatedRoute.fragment.subscribe((fragment) => console.log(fragment));

    const id = +this.activatedRoute.snapshot.params.id;
    console.log(id);
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    )
      return confirm('Leave without saving');
    else return true;
  }
}
