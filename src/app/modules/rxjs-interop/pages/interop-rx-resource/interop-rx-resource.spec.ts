import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteropRxResource } from './interop-rx-resource';

describe('InteropRxResource', () => {
  let component: InteropRxResource;
  let fixture: ComponentFixture<InteropRxResource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteropRxResource]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteropRxResource);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
