import {render, replace} from '../framework/render';
import PointListView from '../view/point-list-view';
import SortView from '../view/sort-view';
import EditPointView from '../view/edit-point-view';
import PointView from '../view/point-view';
import EmptyPointView from '../view/empty-point-view';

export default class BoardPresenter {
  constructor({container, pointsModel }) {
    this.container = container;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    if (this.points.length) {
      this.pointsListComponent = new PointListView();
      this.sortComponent = new SortView();

      render(this.sortComponent, this.container);
      render(this.pointsListComponent, this.container);

      for (let i = 0; i < this.points.length; i++) {
        this.renderPoint(this.points[i]);
      }
    } else {
      render(new EmptyPointView(), this.container);
    }
  }

  renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.code === 'Escape') {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point,
      onEditClick: () => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEditComponent = new EditPointView({
      point,
      onFormSubmit: () => {
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceCardToForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToCard() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.pointsListComponent.element);
  }
}
