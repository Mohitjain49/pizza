import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavScreens } from './nav-screens.component';

describe('NavScreens', () => {
  let component: NavScreens;
  let fixture: ComponentFixture<NavScreens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavScreens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavScreens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
