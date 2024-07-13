import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  isAuthenticated: boolean = false;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogOut() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
