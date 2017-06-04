import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export class BladeFormGroup{
    public BladeFormGroups: Array<BladeFormGroup>;
    public BladeFormControls: Array<BladeFormControl>;
    public groupName:string;

    constructor(){
        this.BladeFormGroups = new Array<BladeFormGroup>();
        this.BladeFormControls = new Array<BladeFormControl>();
    }

    public AddBladeFormControl():void{
        
    }
}

export class BladeFormControl {
    public propertyName:string;
}

export class BladeForm{
    public Title:string
    public FormGroup:BladeFormGroup;

    constructor(){
        this.FormGroup = new BladeFormGroup();
    }
}

@Injectable()
export class FormsService {
    private _http:Http;
    
    constructor(private http:Http){
        this._http=http;
    }

    public GetBladeForm(formId:string):BladeForm{
        let bladeForm =  new BladeForm();
        bladeForm.Title = 'Blade Form Test';
        
        bladeForm.FormGroup.AddBladeFormControl();
        return bladeForm;
    }
}