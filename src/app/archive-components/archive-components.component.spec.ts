import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveComponentsComponent } from './archive-components.component';

describe('ArchiveComponentsComponent', () => {
  let component: ArchiveComponentsComponent;
  let fixture: ComponentFixture<ArchiveComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
