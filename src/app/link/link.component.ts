import { Component, HostBinding, Input } from '@angular/core';
import { Link } from './link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  
  @HostBinding('attr.class') cssClass = 'row';
  @Input() link: Link;
}
