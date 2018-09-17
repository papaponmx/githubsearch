import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ReposService } from './repos.service';

describe('ReposService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ReposService],
  }));

  it('should be created', () => {
    const service: ReposService = TestBed.get(ReposService);
    expect(service).toBeTruthy();
  });

  it('Should getRepos', inject(
     [HttpTestingController, ReposService],
     (httpMock: HttpTestingController,
      reposService: ReposService) => {
        reposService.getRepos('angular')
         .subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toBeDefined();
          }
        });
     }
  ));
});
