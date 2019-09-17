import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjSetsComponent } from './dj-sets.component';

describe('DjSetsComponent', () => {
  let component: DjSetsComponent;
  let fixture: ComponentFixture<DjSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
