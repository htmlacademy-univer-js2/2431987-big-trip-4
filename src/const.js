import {isFutureDate, isPastDate, isPresentDate} from './utils';

const POINT_TYPES = ['taxi', 'flight', 'bus', 'train', 'ship', 'drive', 'check-in', 'sightseeing', 'restaurant'];

const FILTER_TYPES = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const FILTER_DATA_DETECTION = {
  [FILTER_TYPES.EVERYTHING]: (points) => points,
  [FILTER_TYPES.FUTURE]: (points) => points.filter((point) => isFutureDate(point.dateFrom)),
  [FILTER_TYPES.PRESENT]: (points) => points.filter((point) => isPresentDate(point.dateFrom, point.dateTo)),
  [FILTER_TYPES.PAST]: (points) => points.filter((point) => isPastDate(point.dateTo)),
};

const SORT_TYPE = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price',
};

const USER_ACTION = {
  UPDATE_POINT: 'UPDATE',
  ADD_POINT: 'ADD',
  DELETE_POINT: 'DELETE',
};

const UPDATE_TYPE = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

const EDITING_TYPE = {
  UPDATE: 'UPDATE',
  NEW: 'NEW'
};

const API_METHOD = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

const TIME_LIMIT = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

const MODE = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export { POINT_TYPES, FILTER_TYPES, FILTER_DATA_DETECTION, USER_ACTION,
  EDITING_TYPE, UPDATE_TYPE, SORT_TYPE, API_METHOD, TIME_LIMIT, MODE };
