import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indirect } from './indirect';

describe('Indirect', () => {
  let component: Indirect;
  let fixture: ComponentFixture<Indirect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indirect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Indirect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
