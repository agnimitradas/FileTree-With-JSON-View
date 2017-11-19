import { Component, ViewChild, OnInit,Input } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'angular4-jsoneditor/jsoneditor/jsoneditor.component';


@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.css']
})
export class JsonFormatterComponent implements OnInit{

 public editorOptions: JsonEditorOptions;
 public data: any;

  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;
  @Input()
    public jsondata: any;

  constructor() { 
    this.editorOptions = new JsonEditorOptions()
  }

  ngOnInit() {
      this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
      //this.options.mode = 'code'; //set only one mode
      this.data = {"name":"Arka","id": "13"}
      
      console.log(this.jsondata);  

  }


}
