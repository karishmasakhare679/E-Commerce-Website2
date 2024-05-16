import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-return-policy-lazy',
  templateUrl: './return-policy-lazy.component.html',
  styleUrls: ['./return-policy-lazy.component.css']
})
export class ReturnPolicyLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: any = ViewContainerRef;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

  async ngOnInit() {
    import('../return-policy/return-policy.component').then(
      ({ ReturnPolicyComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          ReturnPolicyComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );

  }

}
