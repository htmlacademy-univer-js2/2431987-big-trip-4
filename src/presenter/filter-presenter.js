import FilterView from '../view/filter-view';
import {render} from '../framework/render';

export default class FilterPresenter {
  filterView = new FilterView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.filterView, this.container);
  }
}
