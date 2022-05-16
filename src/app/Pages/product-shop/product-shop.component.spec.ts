import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { ProductShopComponent } from './product-shop.component';
import { Product } from '../../model/product'


let testProd: Product;

describe('ProductShopComponent', () => {
  let component: ProductShopComponent;
  let fixture: ComponentFixture<ProductShopComponent>;

  testProd = {
    id: 123,
    name: 'Test Product',
    price: 237,
    quantity: 2,
    status: 'available',
    description: 'Short description about test product',
    imgaddress : 'https://www.test-image.com/image.jpg'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShopComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: 123
              })
            }
          }
        }
      ]
    }).overrideComponent(ProductShopComponent, {
      set: {
        template: ''
      }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});