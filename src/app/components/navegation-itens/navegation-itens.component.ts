import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navegation-itens',
  standalone: false,
  templateUrl: './navegation-itens.component.html',
  styleUrl: './navegation-itens.component.scss'
})
export class NavegationItensComponent {
  @Input() listTitle?: string
  @Input() listItems: string[] = []
  @Input() isLightTheme: boolean = false;
  @Input() isDisplayDirection: boolean = false;
  @Input() isWithMargin: boolean = false;
}
