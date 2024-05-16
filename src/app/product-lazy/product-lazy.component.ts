import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-product-lazy',
  templateUrl: './product-lazy.component.html',
  styleUrls: ['./product-lazy.component.css']
})
export class ProductLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef:any= ViewContainerRef;

  constructor( private readonly componentFactoryResolver: ComponentFactoryResolver) { }

  async ngOnInit() {
    import('../product/product.component').then(
      ({ ProductComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          ProductComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );

 }

}
