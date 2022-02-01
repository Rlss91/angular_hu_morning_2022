import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ClassDirectiveComponent } from './components/directives/attribute/class-directive/class-directive.component';
import { StyleDirectiveComponent } from './components/directives/attribute/style-directive/style-directive.component';
import { NgifDirectiveComponent } from './components/directives/structural/ngif-directive/ngif-directive.component';
import { NgforDirectiveComponent } from './components/directives/structural/ngfor-directive/ngfor-directive.component';
import { Calculator2Component } from './components/calculator2/calculator2.component';
import { NgswitchDirectiveComponent } from './components/directives/structural/ngswitch-directive/ngswitch-directive.component';
import { FatherComponent } from './components/fcc/father/father.component';
import { ChildComponent } from './components/fcc/child/child.component';
import { MybuttonComponent } from './components/mybutton/mybutton.component';
import { T1fatherComponent } from './components/targil1/t1father/t1father.component';
import { T1childComponent } from './components/targil1/t1child/t1child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalculatorComponent,
    ClassDirectiveComponent,
    StyleDirectiveComponent,
    NgifDirectiveComponent,
    NgforDirectiveComponent,
    Calculator2Component,
    NgswitchDirectiveComponent,
    FatherComponent,
    ChildComponent,
    MybuttonComponent,
    T1fatherComponent,
    T1childComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
