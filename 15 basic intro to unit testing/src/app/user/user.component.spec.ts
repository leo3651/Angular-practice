import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

describe('UserComponent', () => {
  let fixture: ComponentFixture<UserComponent>;
  let componentInstance: UserComponent;
  let userService: UserService;
  let dataService: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [UserService, DataService],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    componentInstance = fixture.debugElement.componentInstance;
    userService = TestBed.inject(UserService);
    dataService = TestBed.inject(DataService);
  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(componentInstance).toBeTruthy;
  });

  it('should use the userService name for the component', () => {
    fixture.detectChanges();
    expect(userService.user.name).toBe(componentInstance.user.name);
  });

  it('should display user name if user is logged in', () => {
    componentInstance.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Leo');
  });

  it('should\t display user name if user is not logged in', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain('Leo');
  });

  it('should\t fetch data successfully if not called async', () => {
    let spy = spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data')
    );
    fixture.detectChanges();
    expect(componentInstance.data).toBe(undefined);
  });

  it('should fetch data successfully if called async', async(() => {
    let spy = spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data')
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(componentInstance.data).toBe('Data');
    });
  }));

  it('should fetch data successfully if called async', fakeAsync(() => {
    let spy = spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data')
    );
    fixture.detectChanges();

    tick();
    expect(componentInstance.data).toBe('Data');
  }));
});
