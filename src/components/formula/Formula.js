import {ExcellComponent} from '@core/ExcellComponent';

export class Formula extends ExcellComponent {
  static className = 'excell__formula'
  toHTML() {
    return `
    <div class="info">⨍x</div>
    <div class="input" contenteditable="true" spellcheck="false"></div>
    `
  }
}
