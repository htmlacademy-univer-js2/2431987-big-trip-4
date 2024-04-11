import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;
const DAY_IN_YEAR = 365;
const MIN_IN_DAY = MIN_IN_HOUR * HOUR_IN_DAY;
const MIN_IN_YEAR = MIN_IN_DAY * DAY_IN_YEAR;

function getRandomElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomInt(min, max) {
  return Math.round((max - min) * Math.random() + min);
}

function fullDate(date) {
  return date ? dayjs(date).format('DD/MM/YY HH:mm') : '';
}

function shortDate(date) {
  return date ? dayjs(date).format('MMM DD') : '';
}

function humanizeHHmm(date) {
  return date ? dayjs(date).format('HH:mm') : '';
}

function getDuration(dateFrom, dateTo) {
  const timeDiff = dayjs(dateTo).diff(dayjs(dateFrom), 'minute');

  if (timeDiff >= MIN_IN_YEAR) {
    return dayjs.duration(timeDiff, 'minutes').format('YY[Y] DD[D] HH[H] mm[M]');
  } else if (timeDiff >= MIN_IN_DAY) {
    return dayjs.duration(timeDiff, 'minutes').format('DD[D] HH[H] mm[M]');
  } else if (timeDiff >= MIN_IN_HOUR) {
    return dayjs.duration(timeDiff, 'minutes').format('HH[H] mm[M]');
  } else {
    return dayjs.duration(timeDiff, 'minutes').format('mm[M]');
  }
}

function getLastWord(string) {
  const words = string.split(' ');
  return words.at(-1);
}

function camelizer(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { getRandomElement, getRandomInt, fullDate, getDuration, shortDate, humanizeHHmm, getLastWord, camelizer};
