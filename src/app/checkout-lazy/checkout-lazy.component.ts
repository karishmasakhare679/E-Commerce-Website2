import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-checkout-lazy',
  templateUrl: './checkout-lazy.component.html',
  styleUrls: ['./checkout-lazy.component.css']
})
export class CheckoutLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef:any= ViewContainerRef;
  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

 async ngOnInit() {
    import('../checkout/checkout.component').then(
      ({ CheckoutComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          CheckoutComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }

}
