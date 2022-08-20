import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigncomponentComponent } from './signcomponent.component';

describe('SigncomponentComponent', () => {
  let component: SigncomponentComponent;
  let fixture: ComponentFixture<SigncomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigncomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
