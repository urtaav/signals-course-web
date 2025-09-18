import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDecorator } from './child-decorator';

describe('ChildDecorator', () => {
  let component: ChildDecorator;
  let fixture: ComponentFixture<ChildDecorator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildDecorator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDecorator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
