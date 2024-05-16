import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-discription-lazy',
  templateUrl: './discription-lazy.component.html',
  styleUrls: ['./discription-lazy.component.css']
})
export class DiscriptionLazyComponent implements OnInit {

  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef:any= ViewContainerRef;
  
  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) { }

 async ngOnInit() {
    import('../discription/discription.component').then(
      ({ DiscriptionComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          DiscriptionComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }

}
