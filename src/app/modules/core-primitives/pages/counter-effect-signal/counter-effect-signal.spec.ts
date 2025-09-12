import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterEffectSignal } from './counter-effect-signal';

describe('CounterEffectSignal', () => {
  let component: CounterEffectSignal;
  let fixture: ComponentFixture<CounterEffectSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterEffectSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterEffectSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
