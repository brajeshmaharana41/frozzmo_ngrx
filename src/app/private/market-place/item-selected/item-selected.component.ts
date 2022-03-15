import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/services/market_services/market_modal';
import * as fromActions from '../../../store/product_store/actions';
import * as fromStore from '../../../store/product_store/reducer';
import * as fromSelector from '../../../store/product_store/selecter';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemSelectedComponent implements OnInit {
  item: string[] = ['Grey', 'Red', 'Yellow'];
  // id: any
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  productsid$: Product;
  ProductData: {}  

  constructor(
    private store: Store<fromStore.ProductState>,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('id'))
      )
    ).subscribe((id) => {
      this.store.dispatch(fromActions.Load_Product_detailes({id}))
    });
    this.store.select(fromSelector.getdetails$).subscribe(
      (Product_details: Product) => {
          this.productsid$ = Product_details;
      }
     );
  }
  description(){
    document.getElementById("description")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  options(){
    document.getElementById("options")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  pricelist(){
    document.getElementById("pricelist")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  overview(){
    document.getElementById("overview")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  reviews(){
    document.getElementById("reviews")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
