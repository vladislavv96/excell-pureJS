export class Excell {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || [];
  }
}