import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://api.example.com/blog'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getPostBySlug(slug: string): Observable<any> {
    const url = `${this.apiUrl}/${slug}`;
    return this.http.get(url);
  }
}