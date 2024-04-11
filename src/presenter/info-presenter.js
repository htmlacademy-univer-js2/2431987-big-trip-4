import {InfoView} from '../view';
import {render, RenderPosition} from '../render';

export default class InfoPresenter {
  infoView = new InfoView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.infoView, this.container, RenderPosition.AFTERBEGIN);
  }
}
