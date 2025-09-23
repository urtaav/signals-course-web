import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSpinner } from './navigation-spinner';

describe('NavigationSpinner', () => {
  let component: NavigationSpinner;
  let fixture: ComponentFixture<NavigationSpinner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationSpinner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationSpinner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
