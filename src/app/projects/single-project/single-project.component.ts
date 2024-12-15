import {Component, Input} from '@angular/core';
import {Project} from "../models/project.model";
import {PageSectionNames} from "../../shared";
import * as url from "node:url";

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
})
export class SingleProjectComponent {
  @Input() project: Project;

  openInNewTab(event: MouseEvent | null, url: string): void {
    if (event) {
      event.preventDefault();
    }
    window.open(url, '_blank');
  }

}
