import { ComponentFixture, waitForAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By, BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should set submitted true', waitForAsync(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  test('should call the onSubmit method', waitForAsync(() => {
    fixture.detectChanges();
    jest.spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  test('form should be invalid', waitForAsync(() => {
    component.loginForm.controls['user'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  }));

  test('form should be invalid passing a wrong password', waitForAsync(() => {
    component.loginForm.controls['user'].setValue('diogo');
    component.loginForm.controls['password'].setValue('123');
    expect(component.loginForm.valid).toBeFalsy();
  }));

  test('form should be valid', waitForAsync(() => {
    component.loginForm.controls['user'].setValue('diogo');
    component.loginForm.controls['password'].setValue('1234');
    expect(component.loginForm.valid).toBeTruthy();
  }));

  test('should the button submit change when submit the login', waitForAsync(() => {
    component.submitted = true;
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toBe('Wait...');
  }));
});
