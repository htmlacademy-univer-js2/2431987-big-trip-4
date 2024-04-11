import {render} from '../render';
import {PointListView, SortView, EditPointView, PointView} from '../view';

export default class BoardPresenter {
  constructor({container, pointsModel }) {
    this.container = container;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    this.itemsOfList = [new EditPointView({ point: this.points[0], offersOfThisType: this.pointsModel.offersModel.getOffersByType(this.points[0].type) }).getTemplate()];

    for (let i = 1; i < this.points.length; i++) {
      this.itemsOfList.push(new PointView({ point: this.points[i] }).getTemplate());
    }

    render(new SortView(), this.container);
    render(new PointListView({ items: this.itemsOfList }), this.container);
  }
}
