import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  public products: Product[];
  tableResource: DataTableResource<Product>;
  items: Product[]=[];
  itemCount: number;

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
      .subscribe(products => {
         this.products = products;
        this.initializeTable(products);
      });
  }
  private initializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count)
  }
reloadItems(params){
  if(!this.tableResource) return;
  this.tableResource.query(params)
      .then(items => this.items = items);
}


  filter(query: string) {
    let filteredProducts = (query) ?
      this.products.filter(p => p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) :
      this.products;
      this.initializeTable(filteredProducts);

  }

  ngOnInit() {
  }

}
