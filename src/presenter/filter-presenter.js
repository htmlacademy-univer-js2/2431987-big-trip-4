import {FilterView} from '../view';
import {render} from '../render';

export default class FilterPresenter {
  filterView = new FilterView();

  constructor({filterContainer}) {
    this.filterContainer = filterContainer;
  }

  init() {
    render(this.filterView, this.filterContainer);
  }
}
