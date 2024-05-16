import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home-lazy',
  templateUrl: './home-lazy.component.html',
  styleUrls: ['./home-lazy.component.css']
})
export class HomeLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: any = ViewContainerRef;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

  async ngOnInit() {
    import('../home/home.component').then(
      ({ HomeComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          HomeComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }

}
