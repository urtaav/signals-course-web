import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsInterop } from './rxjs-interop';

describe('RxjsInterop', () => {
  let component: RxjsInterop;
  let fixture: ComponentFixture<RxjsInterop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsInterop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsInterop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
