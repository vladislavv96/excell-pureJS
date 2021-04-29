import {DOMListener} from '@core/DOMListener';

export class ExcellComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }

  //  Возвращает шаблон компонента
  toHTML() {
    return ''
  }
  init() {
    this.initDOMListeners();
  }
  destroy() {
    this.removeDOMListeners();
  }
}
