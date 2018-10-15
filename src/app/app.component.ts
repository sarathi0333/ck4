import { Component, ViewChild, AfterViewChecked} from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ckeditorContent: string = '<p>Some html</p>';
  @ViewChild(CKEditorComponent) ckEditor: CKEditorComponent;

  ngAfterViewChecked(): void {
    let editor = this.ckEditor.instance;
    editor.config.toolbar = [
      { name: 'clipboard', items: [ 'Undo', 'Redo' ] },
      { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-'] },
      { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
      { name: 'links', items: [ 'Link', 'Unlink' ] },
      { name: 'insert', items: [ 'Image','Table'] },
      '/',
      { name: 'styles', items: [ 'Font', 'FontSize' ] },
      { name: 'colors', items: [ 'TextColor'] }
    ]
    editor.config.filebrowserBrowseUrl = 'javascript:void(0)';
  }
  getUrl(data) {
    console.log(data.image);
    this.ckEditor.instance.insertHtml(`<img src = ${data.image} />`)
  }
}
