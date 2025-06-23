import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAlert } from './display-alert';

describe('DisplayAlert', () => {
  let component: DisplayAlert;
  let fixture: ComponentFixture<DisplayAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayAlert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
