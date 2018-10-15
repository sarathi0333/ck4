import { Component, ViewChild, Output, EventEmitter } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UploadService } from "../../services/upload.service";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"],
  providers: [UploadService]
})
export class UploadComponent  {
  @ViewChild("file") file;
  @Output() event: EventEmitter<string> = new EventEmitter();
  selectedImage;
  fileToUpload: File = null;
  modalReference: any;
  constructor(
    private modalService: NgbModal,
    public uploadService: UploadService
  ) {}

  openPop(content) {
    this.modalReference = this.modalService.open(content, { size: "lg", centered: true });
  }

  chooseFile() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    this.fileToUpload = this.file.nativeElement.files.item(0);
    console.log(this.fileToUpload);
    this.uploadService.upload(this.fileToUpload).subscribe(response => {
      this.file.nativeElement.value = "";
      this.fileToUpload = null;
      this.selectedImage = response;
    });
  }
  selectedImgGallery(data) {
    console.log("data received" , data);
    this.selectedImage = data;
  }

  attachImage() {
    this.event.emit(this.selectedImage);
  }
  okFunction() {
    this.event.emit(this.selectedImage);
    this.modalReference.close();
  }

}
