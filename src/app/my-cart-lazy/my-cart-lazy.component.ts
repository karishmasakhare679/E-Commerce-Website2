import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-my-cart-lazy',
  templateUrl: './my-cart-lazy.component.html',
  styleUrls: ['./my-cart-lazy.component.css']
})
export class MyCartLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef:any= ViewContainerRef;
  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

 async ngOnInit() {
    import('../my-cart/my-cart.component').then(
      ({ MyCartComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          MyCartComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }

}
