import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedsignalRace } from './linkedsignal-race';

describe('LinkedsignalRace', () => {
  let component: LinkedsignalRace;
  let fixture: ComponentFixture<LinkedsignalRace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedsignalRace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedsignalRace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
