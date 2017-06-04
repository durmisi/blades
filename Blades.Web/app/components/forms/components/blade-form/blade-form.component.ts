import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { FormsService } from '../../services/forms.service';
import { BladeForm } from '../../services/forms.service';

@Component({
    selector: 'blade-form',
    templateUrl: 'blade-form.component.html'
})
export class BladeFormComponent implements OnInit {
    private _formBuilder: FormBuilder;
    private _formsService: FormsService;
    private _formGroup: FormGroup;
    private _bladeForm:BladeForm;

    @Input('formId')
    public formId: string;
    
    constructor(private formBuilder:FormBuilder, private formsService:FormsService){
        this._formBuilder=formBuilder;
        this._formsService=formsService;
    }
    ngOnInit(): void {
          
          this._bladeForm = this._formsService.GetBladeForm(this.formId);

          //todo: map to formGroup
          this._formGroup = this._formBuilder.group({
      
                email: '',
                });
    }

    submit():void{
        
    }
}