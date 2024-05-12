import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute
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
  }
}
