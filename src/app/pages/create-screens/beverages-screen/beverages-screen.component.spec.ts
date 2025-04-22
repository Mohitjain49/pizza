import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesScreen } from './beverages-screen.component';

describe('BeveragesScreen', () => {
  let component: BeveragesScreen;
  let fixture: ComponentFixture<BeveragesScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeveragesScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeveragesScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
