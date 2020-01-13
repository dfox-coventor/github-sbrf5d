import { Component } from '@angular/core';

// selectors should have hyphens in them!
@Component({
  selector: 'benefits-search',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Benefits Functionality</span>
        <div>Search for Employee Benefits Records</div>
        <search-box></search-box>
      </div>
    </div>
  `
})
export class BenefitsSearchComponent {}
