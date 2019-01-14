import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormAnimatedComponent } from './login-form-animated.component';

describe('LoginFormAnimatedComponent', () => {
  let component: LoginFormAnimatedComponent;
  let fixture: ComponentFixture<LoginFormAnimatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormAnimatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
