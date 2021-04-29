import {ExcellComponent} from '@core/ExcellComponent';

export class Formula extends ExcellComponent {
  static className = 'excell__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }
  toHTML() {
    return `
    <div class="info">⨍x</div>
    <div class="input" contenteditable="true" spellcheck="false"></div>
    `
  }
  onInput(event) {
    console.log(this.$root)
    console.log('Formula: onInput', event)
  }
  onClick(event) {

  }
}
