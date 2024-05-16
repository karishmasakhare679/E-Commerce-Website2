import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ragister-lazy',
  templateUrl: './ragister-lazy.component.html',
  styleUrls: ['./ragister-lazy.component.css']
})
export class RagisterLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: any = ViewContainerRef;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

  async ngOnInit() {
    import('../ragister/ragister.component').then(
      ({ RagisterComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          RagisterComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );

  }

}
