import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Ng4JsonEditorModule } from 'angular4-jsoneditor'
import { AppComponent } from './app.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { FileTreeViewComponent } from './file-tree-view/file-tree-view.component';
import { FileService } from "./shared/file.service";


const route=[
      {path:' ', redirectTo: 'fileTreeView', pathMatch:'full'},
      {path:'fileTreeView', component:FileTreeViewComponent},
      {path:'jsonView', component:JsonFormatterComponent},
     {path:'**', redirectTo: 'fileTreeView', pathMatch:'full'}
    ];

@NgModule({
  declarations: [
    AppComponent,
    JsonFormatterComponent,
    FileTreeViewComponent
  ],
  imports: [
    BrowserModule,
    Ng4JsonEditorModule,
    HttpModule,
   RouterModule.forRoot(route)
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
