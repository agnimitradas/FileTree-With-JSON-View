import { Component, OnInit } from '@angular/core';
import { FileService } from "../shared/file.service";

@Component({
  selector: 'app-file-tree-view',
  templateUrl: './file-tree-view.component.html',
  styleUrls: ['./file-tree-view.component.css']
})
export class FileTreeViewComponent implements OnInit {

  constructor(private _fileService:FileService) { }

  fileData:any={};
  readFileData:any;
  loadChild:boolean = false;

  ngOnInit() {
    this._fileService.getAllFilesList()
        .subscribe(data=>{
          console.log(data);
          this.fileData = data;
        },error=>{
          console.log(error);
        });
  }

  folderClicked(file){
    this._fileService.readFiles(file.children)
        .subscribe(data=>{
            console.log(data);
            this.loadChild = true;
            this.readFileData = data;
        });
  }

}
