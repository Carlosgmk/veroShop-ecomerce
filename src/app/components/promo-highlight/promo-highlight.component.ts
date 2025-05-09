import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promo-highlight',
  standalone: false,
  templateUrl: './promo-highlight.component.html',
  styleUrl: './promo-highlight.component.scss'
})
export class PromoHighlightComponent {
  @Input() imageUrl: string = '';
}
