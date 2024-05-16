import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-contact-lazy',
  templateUrl: './contact-lazy.component.html',
  styleUrls: ['./contact-lazy.component.css']
})
export class ContactLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: any = ViewContainerRef;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

  // import lazy loaded component
  async ngOnInit() {
    import('../contact/contact.component').then(
      ({ ContactComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          ContactComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }
}
