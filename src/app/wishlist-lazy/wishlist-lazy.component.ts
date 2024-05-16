import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-wishlist-lazy',
  templateUrl: './wishlist-lazy.component.html',
  styleUrls: ['./wishlist-lazy.component.css']
})
export class WishlistLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: any = ViewContainerRef;
  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

  async ngOnInit() {
    import('../wishlist/wishlist.component').then(
      ({ WishlistComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          WishlistComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }

}
