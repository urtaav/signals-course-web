import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorePrimitives } from './core-primitives';

describe('CorePrimitives', () => {
  let component: CorePrimitives;
  let fixture: ComponentFixture<CorePrimitives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorePrimitives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorePrimitives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
