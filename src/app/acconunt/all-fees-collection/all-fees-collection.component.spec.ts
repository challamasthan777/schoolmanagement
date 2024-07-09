import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFeesCollectionComponent } from './all-fees-collection.component';

describe('AllFeesCollectionComponent', () => {
  let component: AllFeesCollectionComponent;
  let fixture: ComponentFixture<AllFeesCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllFeesCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllFeesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
