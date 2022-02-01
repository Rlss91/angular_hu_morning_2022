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
import { CustomHighLight1Directive } from './directives/custom-high-light1.directive';
import { CustomHighLight2Directive } from './directives/custom-high-light2.directive';
import { CustomHighLight3Directive } from './directives/custom-high-light3.directive';
import { CustomDirectiveComponentComponent } from './components/directives/custom-directive-component/custom-directive-component.component';
import { LifeCycleHooksContainerComponent } from './components/life-cycle-hooks-container/life-cycle-hooks-container.component';
import { LifeCycleHooksChildComponent } from './components/life-cycle-hooks-child/life-cycle-hooks-child.component';

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
    CustomHighLight1Directive,
    CustomHighLight2Directive,
    CustomHighLight3Directive,
    CustomDirectiveComponentComponent,
    LifeCycleHooksContainerComponent,
    LifeCycleHooksChildComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
