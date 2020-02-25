import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinerLoadingComponent } from './components/spiner-loading/spiner-loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupProductsPipe } from './pipes/groupProducts/group-products.pipe';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    SpinerLoadingComponent,
    GroupProductsPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatProgressSpinnerModule,
    MaterialModule, 
    ReactiveFormsModule
  ],
  exports : [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    SpinerLoadingComponent,
    ReactiveFormsModule,
    GroupProductsPipe
  ]
})
export class SharedModule { }
