import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSignals } from './child-signals';

describe('ChildSignals', () => {
  let component: ChildSignals;
  let fixture: ComponentFixture<ChildSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildSignals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
