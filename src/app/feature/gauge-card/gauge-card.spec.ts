import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeCard } from './gauge-card';

describe('GaugeCard', () => {
  let component: GaugeCard;
  let fixture: ComponentFixture<GaugeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaugeCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaugeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
