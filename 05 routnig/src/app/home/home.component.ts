import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../users/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

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

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
