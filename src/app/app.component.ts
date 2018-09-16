import { Component, OnInit } from '@angular/core';
import { ReposService } from './repos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  reposData: Array<any>;
  title = 'Repo Search App';
  imgUrl = '/src/assets/sharp-cloud-24px.svg'
  altText = 'Waddup'

  constructor(
    private reposService: ReposService,
  ) {}

  ngOnInit() {
  }

  onSearchRepos() {
    this.reposService.getRepos('angular')
      .subscribe(res => console.log(res));
  }

}
