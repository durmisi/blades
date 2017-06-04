import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AfterViewInit, OnInit, OnDestroy, OnChanges }          from '@angular/core';
import { Input, SimpleChange, ComponentFactory } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import * as _ from 'underscore';

import { FormsService } from '../../services/forms.service';
import { BladeForm } from '../../services/forms.service';
import { DynamicTemplateBuilder } from '../../services/template.builder';
import { IHaveDynamicData,DynamicTypeBuilder } from '../../services/type.builder';

@Component({
    selector: 'blade-form',
    templateUrl: 'blade-form.component.html'
})
export class BladeFormComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit {
    private _formBuilder: FormBuilder;
    private _formsService: FormsService;
    private _formGroup: FormGroup;
    private _bladeForm:BladeForm;

    @Input('formId')
    public formId: string;
    
    constructor(
        private formBuilder:FormBuilder, 
        private formsService:FormsService,  
        protected typeBuilder: DynamicTypeBuilder,
        protected templateBuilder: DynamicTemplateBuilder)
    {
        this._formBuilder=formBuilder;
        this._formsService=formsService;
    }

      // reference for a <div> with #dynamicContentPlaceHolder
    @ViewChild('dynamicContentPlaceHolder', {read: ViewContainerRef}) 
    protected dynamicComponentTarget: ViewContainerRef;
    // this will be reference to dynamic content - to be able to destroy it
    protected componentRef: ComponentRef<IHaveDynamicData>;
    
    // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
    protected wasViewInitialized = false;

     // example entity ... to be recieved from other app parts
    // this is kind of candiate for @Input
    protected entity = { 
        code: "ABC123",
        description: "A description of this Entity" 
      };  

    ngOnInit(): void {
          
          this._bladeForm = this._formsService.GetBladeForm(this.formId);

          //todo: map to formGroup
          this._formGroup = this._formBuilder.group({
      
                email: '',
                });
    }

    submit():void{
        
    }
    

      protected refreshContent(useTextarea: boolean = false){
      
      if (this.componentRef) {
          this.componentRef.destroy();
      }
      
      // here we get a TEMPLATE with dynamic content === TODO
      var template = this.templateBuilder.prepareTemplate(this.entity, useTextarea);

      // here we get Factory (just compiled or from cache)
      this.typeBuilder
          .createComponentFactory(template)
          .then((factory: ComponentFactory<IHaveDynamicData>) =>
        {
            // Target will instantiate and inject component (we'll keep reference to it)
            this.componentRef = this
                .dynamicComponentTarget
                .createComponent(factory);

            // let's inject @Inputs to component instance
            let component = this.componentRef.instance;

            component.entity = this.entity;
            //...
        });
    }

      /** IN CASE WE WANT TO RE/Gerante - we need cean up */

    // this is the best moment where to start to process dynamic stuff
    public ngAfterViewInit(): void
    {
        this.wasViewInitialized = true; 
        this.refreshContent();
    }
    // wasViewInitialized is an IMPORTANT switch 
    // when this component would have its own changing @Input()
    // - then we have to wait till view is intialized - first OnChange is too soon
    public ngOnChanges(changes: {[key: string]: SimpleChange}): void
    {
        if (this.wasViewInitialized) {
            return;
        }
        this.refreshContent();
    }
    public ngOnDestroy(){
      if (this.componentRef) {
          this.componentRef.destroy();
          this.componentRef = null;
      }
    }
  
}