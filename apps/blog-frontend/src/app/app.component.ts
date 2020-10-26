import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '@blog-monorepo/shared';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'blog-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  public blogs: Blog;

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Blog>('/api/blogs').subscribe((data) => {
      this.blogs = data;
    });
  }

}
