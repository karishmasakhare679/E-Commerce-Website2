import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-compare-lazy',
  templateUrl: './compare-lazy.component.html',
  styleUrls: ['./compare-lazy.component.css']
})
export class CompareLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: any = ViewContainerRef;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

  // import lazy loaded component
  async ngOnInit() {
    import('../compare/compare.component').then(
      ({ CompareComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          CompareComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }

}
