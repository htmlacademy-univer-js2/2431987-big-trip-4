import {FilterView} from '../view';
import {render} from '../render';

export default class FilterPresenter {
  filterView = new FilterView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.filterView, this.container);
  }
}
