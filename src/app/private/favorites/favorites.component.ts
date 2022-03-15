import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { props, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/services/market_services/market_modal';
import * as fromActions from '../../store/product_store/actions';
import * as fromStore from '../../store/product_store/reducer';
import * as fromSelector from '../../store/product_store/selecter';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FavoritesComponent implements OnInit {

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  products$: Observable<Product[]>;
  totalRows$: number;
  pageSize$:  number;
  currentPage$: number;
  brandsid$: number;
  colorsid$: number;
  categorysid$: number;
  maxPrices$: number;
  miniPrices$: number; 
  pageSizeOptions: number[] = [1, 2, 5, 10, 50, 100];
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  
  constructor(private store: Store<fromStore.ProductState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.Load_All_Products({pageSize: 5, CurentPage: 0,     Brandsid: 0, 
      Colorsid: 0,
      MaximumPrice: 50,
      MinimumPrice: 100,
      Categoryid: 0,
    }));
    this.products$ = this.store.select(fromSelector.products);
    this.isLoading$ = this.store.select(fromSelector.isLoading);
    this.store.select(fromSelector.totalCount).subscribe(
      (totpage: number) => {
          this.totalRows$=totpage;
      }
     );
     this.store.select(fromSelector.pageCountSize).subscribe(
      (pagesiz: number) => {
          this.pageSize$=pagesiz;
      }
     );
  this.store.select(fromSelector.currentPageCount).subscribe(
    (curpage: number) => {
        this.currentPage$=curpage;
    }
   );
   this.store.select(fromSelector.brandCountId).subscribe(
    (brandid$: number) => {
        this.brandsid$ = brandid$
    }
   );
   this.store.select(fromSelector.colorcountId).subscribe(
    (colorid$: number) => {
        this.colorsid$ = colorid$;
    }
   );
   this.store.select(fromSelector.categoryCountId).subscribe(
    (category$: number) => {
        this.categorysid$=category$;
    }
   );
   this.store.select(fromSelector.MaxCountPrice).subscribe(
    (maxPrice$: number) => {
        this.maxPrices$=maxPrice$;
    }
   );
   this.store.select(fromSelector.MiniCountPrice).subscribe(
    (miniPrice$: number) => {
        this.miniPrices$=miniPrice$;
    }
   );
    this.error$ = this.store.select(fromSelector.error);
  }
  pageChanged(event: PageEvent) : void {
    console.log({ event });    
    this.store.dispatch(fromActions.Load_All_Products({pageSize: event.pageSize, 
                                                      CurentPage: event.pageIndex,
                                                      Brandsid: this.brandsid$, 
                                                      Colorsid: this.colorsid$,
                                                      MaximumPrice: this.categorysid$,
                                                      MinimumPrice: this.maxPrices$,
                                                      Categoryid: this.miniPrices$,
                                                    }));
                                                    console.log(this.brandsid$)    
  }
}
