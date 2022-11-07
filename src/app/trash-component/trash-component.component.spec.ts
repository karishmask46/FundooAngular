import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashComponentComponent } from './trash-component.component';

describe('TrashComponentComponent', () => {
  let component: TrashComponentComponent;
  let fixture: ComponentFixture<TrashComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
