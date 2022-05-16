import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ ProductDetailsComponent ]
  //   })
  //   .compileComponents()
  //   .then(() => {
  //     fixture = TestBed.createComponent(ProductDetailsComponent);
  //     component = fixture.componentInstance;
  //     fixture.detectChanges();
  //   });
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ProductDetailsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ProductDetailsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));



  it('Veifying EnableBuying Method', () => {
    expect(component).toBeTruthy();
    expect(component.isUnchanged).toBe(true);
    component.enableBuying();
    expect(component.isUnchanged).toBe(false);

  });

  it('Verify title of the Product-details Component', () => {

   const element : HTMLElement= fixture.nativeElement;
   const header = element.querySelector('h1');

   expect(header.textContent.trim()).toEqual(component.title);

  });

});