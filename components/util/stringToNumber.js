const stringToNumber = function() {
  return {
    require: 'ngModel',
    link: (scope, element, attrs, ngModel) => {
      ngModel.$parsers.push((value) => {
        console.log('parse');
        console.log(value);
        console.log(parseInt(value.replace(/,/g, ''), 10));
        return parseInt(value.replace(/,/g, ''), 10);
        // return '' + value;
      });

      ngModel.$formatters.push((value) => {
        console.log('format');
        console.log(value);
        return parseInt(value, 10).toLocaleString();
        // return parseFloat(value);
      });
    }
  }
}

angular.module('mainApp.formatters.stringToNumber', [])
    .directive('stringToNumber', stringToNumber);
