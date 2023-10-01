import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

const materi=[MatIconModule,MatInputModule];

@NgModule({
  imports: [materi],
  exports:[materi]
})
export class MatModuleModule { }
