import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadComponent } from './components/upload/upload.component';
import { GalleryComponent } from './components/upload/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
