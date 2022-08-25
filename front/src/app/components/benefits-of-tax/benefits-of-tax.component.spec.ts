import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsOfTaxComponent } from './benefits-of-tax.component';

describe('BenefitsOfTaxComponent', () => {
  let component: BenefitsOfTaxComponent;
  let fixture: ComponentFixture<BenefitsOfTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsOfTaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitsOfTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
