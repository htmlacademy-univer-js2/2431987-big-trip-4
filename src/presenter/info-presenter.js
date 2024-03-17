import {InfoView} from '../view';
import {render, RenderPosition} from '../render';

export default class InfoPresenter {
  infoView = new InfoView();

  constructor({infoContainer}) {
    this.infoContainer = infoContainer;
  }

  init() {
    render(this.infoView, this.infoContainer, RenderPosition.AFTERBEGIN);
  }
}
