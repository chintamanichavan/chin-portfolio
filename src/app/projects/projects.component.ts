import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'assets/project1.jpg',
      link: 'https://example.com/project1'
    },
    {
      title: 'Project 2',
      description: 'Pellentesque eu metus sit amet nulla dignissim cursus.',
      image: 'assets/project2.jpg',
      link: 'https://example.com/project2'
    },
    // Add more projects as needed
  ];

  openProject(link: string) {
    window.open(link, '_blank');
  }
}