import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product={};
  categories$;
  id;
  constructor(
    private router:Router,
      private route:ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {

    this.categories$ = categoryService.getCategories();
    
    
  }
  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);

  }
  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    if(id){
      this.productService.get(id).valueChanges().take(1).subscribe(p=>this.product=p);

    }

  }

} 
