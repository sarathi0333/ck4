import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UploadService } from "./../../../services/upload.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images;
  selectedImage: string;
  @Output() selectedImgGallery: EventEmitter<string> = new EventEmitter();  

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
    this.uploadService.getImages().subscribe(response => {
      this.images = response;
    });
  }
  listClick(event, newValue) {
    console.log(newValue);
    this.selectedImage = newValue;
    this.selectedImgGallery.emit(this.selectedImage);
  }

}
