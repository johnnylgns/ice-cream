import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSidenavContentComponent } from './main-sidenav-content.component';

describe('MainSidenavContentComponent', () => {
  let component: MainSidenavContentComponent;
  let fixture: ComponentFixture<MainSidenavContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSidenavContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSidenavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
