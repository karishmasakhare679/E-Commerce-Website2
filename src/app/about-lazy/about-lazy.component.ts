import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-about-lazy',
  templateUrl: './about-lazy.component.html',
  styleUrls: ['./about-lazy.component.css']
})
export class AboutLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: any = ViewContainerRef;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

  // import lazy loaded component
  async ngOnInit() {
    import('../about/about.component').then(
      ({ AboutComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          AboutComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }

}
