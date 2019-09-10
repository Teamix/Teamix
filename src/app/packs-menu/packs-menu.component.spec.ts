import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksMenuComponent } from './packs-menu.component';

describe('PacksMenuComponent', () => {
  let component: PacksMenuComponent;
  let fixture: ComponentFixture<PacksMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacksMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacksMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
