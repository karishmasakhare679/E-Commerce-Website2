import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-categories-lazy',
  templateUrl: './categories-lazy.component.html',
  styleUrls: ['./categories-lazy.component.css']
})
export class CategoriesLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef:any= ViewContainerRef;
  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

 async ngOnInit() {
    import('../categories/categories.component').then(
      ({ CategoriesComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          CategoriesComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }

}
