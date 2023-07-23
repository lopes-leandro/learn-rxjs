import { CarrierPage } from './carrier.page';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('CarrierPage', () => {
  let component: CarrierPage;
  let fixture: ComponentFixture<CarrierPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
