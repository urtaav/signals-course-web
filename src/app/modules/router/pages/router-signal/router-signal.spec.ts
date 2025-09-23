import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterSignal } from './router-signal';

describe('RouterSignal', () => {
  let component: RouterSignal;
  let fixture: ComponentFixture<RouterSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
