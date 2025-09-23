import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelIoSignals } from './model-io-signals';

describe('ModelIoSignals', () => {
  let component: ModelIoSignals;
  let fixture: ComponentFixture<ModelIoSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelIoSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelIoSignals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
