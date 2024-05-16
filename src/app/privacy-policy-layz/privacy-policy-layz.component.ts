import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-privacy-policy-layz',
  templateUrl: './privacy-policy-layz.component.html',
  styleUrls: ['./privacy-policy-layz.component.css']
})
export class PrivacyPolicyLayzComponent implements OnInit {
  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef:any= ViewContainerRef;
  
  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

 async ngOnInit() {
    import('../privacy-policy/privacy-policy.component').then(
      ({ PrivacyPolicyComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          PrivacyPolicyComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );

 }
}
