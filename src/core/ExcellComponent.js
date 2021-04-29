import {DOMListener} from '@core/DOMListener';

export class ExcellComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
  }

  //  Возвращает шаблон компонента
  toHTML() {
    return ''
  }
  init() {
    this.initDOMListeners();
  }
}
