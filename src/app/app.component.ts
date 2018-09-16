import { ReposListComponent } from './repos-list/repos-list.component';
import { Component, OnInit } from '@angular/core';
import { ReposService } from './repos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  altText = 'Waddup';
  error: boolean;
  imgUrl = '/src/assets/sharp-cloud-24px.svg';
  queryTerm = '';
  reposData: Array<any>;
  title = 'Github Repos';

  constructor(
    private reposService: ReposService,
  ) {}

  ngOnInit() {
  }

  onSubmit() {
    this.reposService.getRepos(this.queryTerm)
      .subscribe(
        res => this.reposData = res.items,
        err => this.error = true,
      );
  }

}
