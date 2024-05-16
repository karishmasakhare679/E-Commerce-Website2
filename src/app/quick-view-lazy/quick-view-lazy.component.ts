import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-quick-view-lazy',
  templateUrl: './quick-view-lazy.component.html',
  styleUrls: ['./quick-view-lazy.component.css']
})
export class QuickViewLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: any = ViewContainerRef;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

  async ngOnInit() {
    import('../quick-view/quick-view.component').then(
      ({ QuickViewComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          QuickViewComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }

}
