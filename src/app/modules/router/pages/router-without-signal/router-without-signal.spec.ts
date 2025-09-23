import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterWithoutSignal } from './router-without-signal';

describe('RouterWithoutSignal', () => {
  let component: RouterWithoutSignal;
  let fixture: ComponentFixture<RouterWithoutSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterWithoutSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterWithoutSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
