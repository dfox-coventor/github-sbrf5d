import { Component } from '@angular/core';

// always put in slashes as the names of components to 
// distinguish them from html components/modules(?) that have no hyphen
@Component({
  selector: 'app-root',
  template: `
    <payroll-search></payroll-search>
    <hr-files-search></hr-files-search>
    <benefits-search></benefits-search>
  `
})
export class AppComponent {}
