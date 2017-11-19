import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class FileService {

    constructor(private _http:Http) { }

    getAllFilesList():Observable<any>{
        return this._http.get('http://localhost:7070/api/allFiles')
                .map((response:Response)=>{
                    return response.json();
                })
    }
    
    readFiles(data):Observable<any>{
        return this._http.post('http://localhost:7070/api/readFile',data)
            .map((response:Response)=>{
                    return response.json();
                })
    }
}