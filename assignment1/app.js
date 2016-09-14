(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = '';
  $scope.checkedMessage = '';
  $scope.checkedBorder = '';

  $scope.validateInput = function () {
    if ($scope.menuItems === undefined || $scope.menuItems.trim() === "") {
      $scope.message = 'Please enter data first';
      $scope.checkedMessage = 'checkedMessageInvalid';
      $scope.checkedBorder = 'checkedBorderInvalid';
    } else {
      $scope.checkNumOfItems();
    }
  };

  $scope.checkNumOfItems = function () {
    var trimmed = $scope.menuItems.trim();
    var numOfCommas = 0;
    for (var i = 0; i < trimmed.length; i++) {
      if (trimmed[i] === ',') {
        numOfCommas++;
      }
    }
    if (numOfCommas <= 2) {
      $scope.message = 'Enjoy!';
      $scope.checkedMessage = 'checkedMessageValid';
      $scope.checkedBorder = 'checkedBorderValid';
    } else {
      $scope.message = 'Too much!';
      $scope.checkedMessage = 'checkedMessageValid';
      $scope.checkedBorder = 'checkedBorderValid';
    }

  };
}
})();
