import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrollTo(section: string) {
    const element = document.querySelector(`app-${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}