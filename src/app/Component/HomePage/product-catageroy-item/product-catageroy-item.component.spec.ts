import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatageroyItemComponent } from './product-catageroy-item.component';

describe('ProductCatageroyItemComponent', () => {
  let component: ProductCatageroyItemComponent;
  let fixture: ComponentFixture<ProductCatageroyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCatageroyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCatageroyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
