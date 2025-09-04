import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onpush } from './onpush';

describe('Onpush', () => {
  let component: Onpush;
  let fixture: ComponentFixture<Onpush>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onpush]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onpush);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
