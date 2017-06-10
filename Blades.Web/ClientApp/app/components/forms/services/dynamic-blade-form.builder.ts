import { Component, ComponentFactory, NgModule, Input, Injectable} from '@angular/core';
import { JitCompiler } from '@angular/compiler';
import * as _ from 'underscore';

import { EditorsModule } from '../../editors/editors.module';
import { BladeForm } from '../services/forms.service';

export interface DynamicBladeFormComponent { 
     entity: any;
     bladeForm:BladeForm,
     submit():void
}

@Injectable()
export class DynamicBladeFormBuilder {

  // wee need Dynamic component builder
  constructor(protected compiler: JitCompiler) {  }
    
  // this object is singleton - so we can use this as a cache
  private _cacheOfFactories: {[templateKey: string]: ComponentFactory<DynamicBladeFormComponent>} = {};
  
  public createComponentFactory(template: string) : Promise<ComponentFactory<DynamicBladeFormComponent>> {
    let factory = this._cacheOfFactories[template];
    if (factory) {
        console.log("Module and Type are returned from cache")
        return new Promise((resolve) => {
            resolve(factory);
        });
    }
    
    // unknown template ... let's create a Type for it
    let type   = this.createNewComponent(template);
    let module = this.createComponentModule(type);
    
    return new Promise((resolve) => {
        this.compiler
            .compileModuleAndAllComponentsAsync(module)
            .then((moduleWithFactories) =>
            {
                factory = _.find(moduleWithFactories.componentFactories, { componentType: type });
                this._cacheOfFactories[template] = factory;
                resolve(factory);
            });
    });
  }
  
  protected createNewComponent (tmpl:string) {
      @Component({
          selector: 'dynamic-blade-form',
          template: tmpl,
      })
      class DynamicBladeFormComponent implements DynamicBladeFormComponent {
          @Input() 
          bladeForm: BladeForm;
          @Input() 
          public entity: any;
      };
      // a component for this particular template
      return DynamicBladeFormComponent;
  }

  protected createComponentModule (componentType: any) {
      @NgModule({
        imports: [
          EditorsModule, // there are 'text-editor', 'string-editor'...
        ],
        declarations: [
          componentType
        ],
      })
      class RuntimeComponentModule
      {
      }
      // a module for just this Type
      return RuntimeComponentModule;
  }
}