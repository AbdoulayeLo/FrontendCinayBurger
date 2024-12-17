import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img
          src="./assets/images/logos/burger-logo.svg"
          class="align-middle m-2"
          alt="logo"
          width="174"
          height="150"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
