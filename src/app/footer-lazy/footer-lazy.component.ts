import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-footer-lazy',
  templateUrl: './footer-lazy.component.html',
  styleUrls: ['./footer-lazy.component.css']
})
export class FooterLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: any = ViewContainerRef;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

  async ngOnInit() {
    import('../footer/footer.component').then(
      ({ FooterComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          FooterComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }


}
