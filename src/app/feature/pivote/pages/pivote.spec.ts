import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivoteComponent } from './pivote';

describe('Pivote', () => {
  let component: PivoteComponent;
  let fixture: ComponentFixture<PivoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PivoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PivoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
