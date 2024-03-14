import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  posts = [
    {
      title: 'Blog Post 1',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'assets/post1.jpg',
      slug: 'blog-post-1'
    },
    {
      title: 'Blog Post 2',
      excerpt: 'Pellentesque eu metus sit amet nulla dignissim cursus.',
      image: 'assets/post2.jpg',
      slug: 'blog-post-2'
    },
    // Add more blog posts as needed
  ];

  constructor(private router: Router) {}

  openPost(slug: string) {
    this.router.navigate(['/blog', slug]);
  }
}