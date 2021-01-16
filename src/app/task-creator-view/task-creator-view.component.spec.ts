import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCreatorViewComponent } from './task-creator-view.component';

describe('TaskCreatorViewComponent', () => {
  let component: TaskCreatorViewComponent;
  let fixture: ComponentFixture<TaskCreatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCreatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCreatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
