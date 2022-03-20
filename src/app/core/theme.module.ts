import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const components =[HeaderComponent,SpinnerComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports:[...components]
})
export class ThemeModule { }
