import { Component, OnInit, Renderer2 } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  cssBadePath: string = 'assets/css/';

  ngOnInit(): void {
    // css動的読み込み
    of('sample.css').subscribe((res) => {
      let cssLink: HTMLElement = this.renderer.createElement('link');
      this.renderer.setAttribute(cssLink, 'rel', 'stylesheet');
      this.renderer.setAttribute(cssLink, 'href', `${this.cssBadePath}${res}`);
      this.renderer.appendChild(document.head, cssLink);
    });
  }
}
