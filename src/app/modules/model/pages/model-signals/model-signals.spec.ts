import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSignals } from './model-signals';

describe('ModelSignals', () => {
  let component: ModelSignals;
  let fixture: ComponentFixture<ModelSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelSignals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
