import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  slug: string = '';
  post: any = {};

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    this.fetchPost();
  }

  fetchPost() {
    this.blogService.getPostBySlug(this.slug).subscribe(
      post => {
        this.post = post;
      },
      error => {
        console.error('Error fetching blog post:', error);
      }
    );
  }
}