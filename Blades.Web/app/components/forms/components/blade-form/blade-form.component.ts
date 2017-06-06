import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AfterViewInit, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Input, SimpleChange, ComponentFactory } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import * as _ from 'underscore';

import { FormsService } from '../../services/forms.service';
import { BladeForm } from '../../services/forms.service';
import { DynamicBladeFormComponent, DynamicBladeFormBuilder } from '../../services/dynamic-blade-form.builder';
@Component({
    selector: 'blade-form',
    templateUrl: 'blade-form.component.html',
    providers: [DynamicBladeFormBuilder]
})
export class BladeFormComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit {

    private _formsService: FormsService;
    private _bladeForm: BladeForm;
    private _formTemplate: string;

    @Input('formId')
    public formId: string;

    constructor(
        private formsService: FormsService,
        protected dynamicBladeFormBuilder: DynamicBladeFormBuilder) {
    }

    // reference for a <div> with #dynamicContentPlaceHolder
    @ViewChild('dynamicBladeFormPlaceHolder', { read: ViewContainerRef })
    protected dynamicComponentTarget: ViewContainerRef;

    // this will be reference to dynamic content - to be able to destroy it
    protected componentRef: ComponentRef<DynamicBladeFormComponent>;

    // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
    protected wasViewInitialized = false;

    // example entity ... to be recieved from other app parts
    // this is kind of candiate for @Input
    protected entity = {
        code: "ABC123",
        description: "A description of this Entity"
    };

    ngOnInit(): void { }

    submit(): void {
        console.log('on submit');
    }

    protected refreshContent() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }

        this._bladeForm = this.formsService.GetBladeForm(this.formId);
        this._formTemplate = this.prepareFormTemplate(this._bladeForm, this.entity);

        // here we get Factory (just compiled or from cache)
        this.dynamicBladeFormBuilder
            .createComponentFactory(this._formTemplate)
            .then((factory: ComponentFactory<DynamicBladeFormComponent>) => {
                // Target will instantiate and inject component (we'll keep reference to it)
                this.componentRef = this
                    .dynamicComponentTarget
                    .createComponent(factory);

                // let's inject @Inputs to component instance
                let component = this.componentRef.instance;

                component.entity = this.entity;
                component.bladeForm = this._bladeForm;

                component.submit = function(){
                    console.log('component.submit');
                };
            });
    }

    private prepareFormTemplate(bladeForm: BladeForm, entity: any): string {
        let properties = Object.keys(entity);

        let template: string = '';

        if (bladeForm.Title != null) {
            template += '<h3>{{bladeForm.Title}}</h3>';
        }

        //template += "<form [formGroup]=\"_formGroup\" (ngSubmit)=\"submit()\">";
        template += "<form (ngSubmit)=\"submit()\">";
        //  template += " <hr /> entity: <pre>{{entity | json}}</pre>";
        //  template += " <hr /> bladeForm: <pre>{{bladeForm | json}}</pre>";
        let editorName = "text-editor";

        properties.forEach((propertyName) => {
            template += `
                <${editorName}
                    [propertyName]="'${propertyName}'"
                    [entity]="entity"
                ></${editorName}>`;
        });

        template += "<button type=\"submit\">Submit</button>";
        return template + "</form>";
    }


    /** IN CASE WE WANT TO RE/Gerante - we need cean up */

    // this is the best moment where to start to process dynamic stuff
    public ngAfterViewInit(): void {
        this.wasViewInitialized = true;
        //this.refreshContent();
    }
    // wasViewInitialized is an IMPORTANT switch 
    // when this component would have its own changing @Input()
    // - then we have to wait till view is intialized - first OnChange is too soon
    public ngOnChanges(changes: { [key: string]: SimpleChange }): void {
        if (this.wasViewInitialized) {
            return;
        }
        this.refreshContent();
    }

    public ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}