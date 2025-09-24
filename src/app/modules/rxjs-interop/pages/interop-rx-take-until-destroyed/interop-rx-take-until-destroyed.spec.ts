import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteropRxTakeUntilDestroyed } from './interop-rx-take-until-destroyed';

describe('InteropRxTakeUntilDestroyed', () => {
  let component: InteropRxTakeUntilDestroyed;
  let fixture: ComponentFixture<InteropRxTakeUntilDestroyed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteropRxTakeUntilDestroyed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteropRxTakeUntilDestroyed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
