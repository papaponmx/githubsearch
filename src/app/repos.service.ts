import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { pipe } from 'rxjs/operators';
import { environment as env} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(
    private http: HttpClient,
  ) { }

  getRepos(query: string): Observable<any>  {
    return this.http.get(`${env.apiURL}/search/repositories?q=${query}`);
    // .pipe(

    // )
  }
}
