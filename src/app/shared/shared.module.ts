import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
const materialModules = [
  MatButtonModule, MatRadioModule, MatCardModule, MatInputModule
];


@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContentComponent],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [HeaderComponent, FooterComponent, ContentComponent]
})
export class SharedModule { }
