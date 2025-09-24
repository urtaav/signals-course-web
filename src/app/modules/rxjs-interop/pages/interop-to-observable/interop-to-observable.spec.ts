import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteropToObservable } from './interop-to-observable';

describe('InteropToObservable', () => {
  let component: InteropToObservable;
  let fixture: ComponentFixture<InteropToObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteropToObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteropToObservable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
