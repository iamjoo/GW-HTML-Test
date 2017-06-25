/**
 * Utility functions shared across multiple files.
 * @final
 */
const Util = {};

/**
 * Formats the age to 'ww years, xx days, yy hours and zz minutes'. Omits
 * years and days if zero.
 * @param {number} ageInSeconds
 * @return {string}
 */
Util.formatAge = function(ageInSeconds) {
  const secondsInMinute = 60;
  const minutesInHour = 60;
  const hoursInDay = 24;
  const daysInYear = 365;
  const secondsInHour = secondsInMinute * minutesInHour;
  const secondsInDay = secondsInHour * hoursInDay;
  const secondsInYear = secondsInDay * daysInYear;

  const numYears = Math.floor(ageInSeconds / secondsInYear);
  const numDays = Math.floor(ageInSeconds % secondsInYear / secondsInDay);
  const numHours = Math.floor(ageInSeconds % secondsInDay / secondsInHour);
  const numMinutes =
      Math.floor(ageInSeconds % secondsInHour / secondsInMinute);

  let formattedAge = '';
  formattedAge += numYears > 0 ? numYears + ' years, ' : '';
  formattedAge += numDays > 0 ? numDays + ' days, ' : '';
  formattedAge += numHours + ' hours and ' + numMinutes + ' minutes';

  return formattedAge;
}

/**
 * Formats the date to 'MONTH DAY, YEAR'.
 * @param {string} dateInput
 * @return {string}
 */
Util.formatDate = function(dateInput) {
  const date = new Date(dateInput);

  return getMonth(date.getMonth()) + ' ' + date.getDate() + ', ' +
      date.getFullYear();
}

/**
 * Returns the string representation of a zero-indexed month.
 * @param {number} monthNum
 * @return {string}
 */
const getMonth = function(monthNum) {
  let month = ''

  switch (monthNum) {
    case 0:
      month = 'Jan';
      break;
    case 1:
      month = 'Feb';
      break;
    case 2:
      month = 'Mar';
      break;
    case 3:
      month = 'Apr';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'Jun';
      break;
    case 6:
      month = 'Jul';
      break;
    case 7:
      month = 'Aug';
      break;
    case 8:
      month = 'Sep';
      break;
    case 9:
      month = 'Oct';
      break;
    case 10:
      month = 'Nov';
      break;
    default:
      month = 'Dec';
      break;
  }

  return month;
}
