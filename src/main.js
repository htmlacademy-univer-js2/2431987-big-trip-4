import BoardPresenter from './presenter/board-presenter';
import FilterPresenter from './presenter/filter-presenter';
import InfoPresenter from './presenter/info-presenter';

const header = document.querySelector('.page-header');
const infoHeader = document.querySelector('.trip-main');
const headerFilterElement = header.querySelector('.trip-controls__filters');

const main = document.querySelector('.page-main');
const containerElement = main.querySelector('.trip-events');

const infoPresenter = new InfoPresenter({infoContainer: infoHeader});
const filterPresenter = new FilterPresenter({filterContainer: headerFilterElement});
const boardPresenter = new BoardPresenter({boardContainer: containerElement});

infoPresenter.init();
filterPresenter.init();
boardPresenter.init();
