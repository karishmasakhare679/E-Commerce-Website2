import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-login-lazy',
  templateUrl: './login-lazy.component.html',
  styleUrls: ['./login-lazy.component.css']
})
export class LoginLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: any = ViewContainerRef;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

  async ngOnInit() {
    import('../login/login.component').then(
      ({ LoginComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          LoginComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }

}
