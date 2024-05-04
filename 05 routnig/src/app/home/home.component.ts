import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onLoadServers() {
    console.log('Najs');
    this.router.navigate(['/servers']); // routing programmatically
  }

  onLoadServer1(id: number) {
    this.router.navigate(['servers', id, 'edit'], {
      queryParams: { allowedEdit: 1 },
      fragment: 'loaded',
    });
  }
}
