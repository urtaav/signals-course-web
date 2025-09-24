import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteropOutput } from './interop-output';

describe('InteropOutput', () => {
  let component: InteropOutput;
  let fixture: ComponentFixture<InteropOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteropOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteropOutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
