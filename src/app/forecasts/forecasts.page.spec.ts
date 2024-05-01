import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForecastsPage } from './forecasts.page';

describe('ForecastsPage', () => {
  let component: ForecastsPage;
  let fixture: ComponentFixture<ForecastsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
