import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncResources } from './async-resources';

describe('AsyncResources', () => {
  let component: AsyncResources;
  let fixture: ComponentFixture<AsyncResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncResources]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncResources);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
