import { Component } from '@angular/core';
import { IProduct } from './model';
import { products } from './products';
import { iMinMaxFilter } from './product-filter/product-filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-junior-test';
  dataList: IProduct[] = products;
  activeFilter?: iMinMaxFilter;

  filterProducts(e: iMinMaxFilter) {
    this.activeFilter = e;
    this.dataList = products.filter(
      ({ price }) => price >= e.min && price <= e.max
    );
  }
}
