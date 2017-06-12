import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { FormControlErrorComponent } from './form-control-error/form-control-error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormDebugComponent, FormControlErrorComponent]
})
export class FormsModule { }
