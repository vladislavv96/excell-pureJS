import {ExcellComponent} from '@core/ExcellComponent';

export class Header extends ExcellComponent {
  static className = 'excell__header'

  toHTML() {
    return `
    <input value="Новая таблица" type="text" class="input"/>
            <div>
                <div class="button">
                    <i class="material-icons">delete</i>
                </div>
                <div class="button">
                    <i class="material-icons">exit_to_app</i>
                </div>
            </div>
    `
  }
}
