import {render} from '../render';
import {WaypointListView, SortView, EditPointView, WaypointView} from '../view';

export default class BoardPresenter {
  waypointListView = new WaypointListView();
  sortView = new SortView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.sortView, this.boardContainer);
    render(this.waypointListView, this.boardContainer);
    render(new EditPointView(), this.waypointListView.getElement());

    for (let i = 0; i < 3; i++) {
      render(new WaypointView(), this.waypointListView.getElement());
    }
  }
}
