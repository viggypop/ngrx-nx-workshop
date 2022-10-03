import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ProductDetailsComponent } from './product-details.component';
import { StarsModule } from '../../common/stars/stars.module';
import { SpinnerModule } from '../../common/spinner/spinner.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    StarsModule,
    MatProgressBarModule,
    SpinnerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
