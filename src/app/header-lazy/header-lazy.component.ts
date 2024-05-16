import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header-lazy',
  templateUrl: './header-lazy.component.html',
  styleUrls: ['./header-lazy.component.css']
})
export class HeaderLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: any = ViewContainerRef;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

  async ngOnInit() {
    import('../header/header.component').then(
      ({ HeaderComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          HeaderComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }
}
