import {createElement} from '../render';

function createPointListTemplate(items) {
  return `
    <ul class="trip-events__list">
      ${items.map((item) => `<li class="trip-events__item">${item}</li>`).join('')}
    </ul>
  `;
}

export default class PointListView {
  constructor({ items }) {
    this.items = items;
  }

  getTemplate() {
    return createPointListTemplate(this.items);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
