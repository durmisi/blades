import { NgModule }      from '@angular/core';
import { CommonModule }  from "@angular/common";
import { FormsModule }   from "@angular/forms";

// make all editors as one DYNAMIC_DIRECTIVES 
import { forwardRef }   from '@angular/core';
import { StringEditor } from './components/StringEditor';
import { TextEditor }   from './components/TextEditor';

export const DYNAMIC_DIRECTIVES = [
  forwardRef(() => StringEditor),
  forwardRef(() => TextEditor)
];

@NgModule({
  imports:      [ 
      CommonModule,
      FormsModule
  ],
  declarations: [
      DYNAMIC_DIRECTIVES
  ],
  exports: [
      DYNAMIC_DIRECTIVES,
      CommonModule,
      FormsModule
  ]
})
export class EditorsModule {

    static forRoot()
    {
        return {
            ngModule: EditorsModule,
        };
    }
}