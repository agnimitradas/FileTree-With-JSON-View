import { Component, ViewChild, OnInit,Input } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'angular4-jsoneditor/jsoneditor/jsoneditor.component';
import { ResponseService } from "../shared/response.service";


@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.css']
})
export class JsonFormatterComponent implements OnInit{

 public editorOptions: JsonEditorOptions;
 public payLoadData: any;
 public sequenceData: any;
 public responseData: any;

  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;
  @Input()
    public jsondata: any;

  constructor(private _responseService:ResponseService) { 
    this.editorOptions = new JsonEditorOptions()
  }

  ngOnInit() {
      this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
      console.log(this.jsondata);  
      this.payLoadData = this.jsondata[0];
      this.responseData = this.jsondata[1];
      this.sequenceData = this.jsondata[2];
  }

  submitSequence(){
    let data;
    this._responseService.getSequenceFromUrl(data)
        .subscribe(data=>{
            this.sequenceData = data;
        },
        error=>{
            console.error(error);
        })
  }

  generateResponse(){
    let data;
    this._responseService.generateResponseJSON(data)
        .subscribe(data=>{
            this.responseData = data;
        },
        error=>{
            console.error(error);
        })
  }


}
