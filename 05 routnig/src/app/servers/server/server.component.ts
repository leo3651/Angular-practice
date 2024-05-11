import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('this.activatedRoute', this.activatedRoute.snapshot.params);
    console.log(this.activatedRoute.snapshot.params['id']);

    const id: number = Number.parseFloat(
      this.activatedRoute.snapshot.params['id']
    );
    this.server = this.serversService.getServer(id);

    this.activatedRoute.params.subscribe(
      (params: Params) =>
        (this.server = this.serversService.getServer(
          Number.parseFloat(params.id)
        ))
    );
  }

  onEdit() {
    const id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }
}
