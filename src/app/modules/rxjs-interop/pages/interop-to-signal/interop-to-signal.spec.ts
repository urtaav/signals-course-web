import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteropToSignal } from './interop-to-signal';

describe('InteropToSignal', () => {
  let component: InteropToSignal;
  let fixture: ComponentFixture<InteropToSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteropToSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteropToSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
