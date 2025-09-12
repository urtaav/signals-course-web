import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Linkedsignal } from './linkedsignal';

describe('Linkedsignal', () => {
  let component: Linkedsignal;
  let fixture: ComponentFixture<Linkedsignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Linkedsignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Linkedsignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
