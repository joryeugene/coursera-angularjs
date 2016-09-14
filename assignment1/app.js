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
    // Mostly to check if the input box was even touched
    if ($scope.menuItems === undefined || $scope.menuItems.trim() === "") {
      $scope.message = 'Please enter data first';
      $scope.checkedMessage = 'checkedMessageInvalid';
      $scope.checkedBorder = 'checkedBorderInvalid';
    } else {
      $scope.checkNumOfItems();
    }
  };

  $scope.checkNumOfItems = function () {
    var itemsArray = $scope.menuItems.split(',');
    var verifiedArray = [];

    // Remove empty array elements
    for (var i = 0; i < itemsArray.length; i++) {
      var item = itemsArray[i].trim();
      verifiedArray.push(item);
    }

    var numberOfItems = verifiedArray.filter(Boolean).length;

    if (numberOfItems === 0) {
      $scope.message = 'Please enter data first';
      $scope.checkedMessage = 'checkedMessageInvalid';
      $scope.checkedBorder = 'checkedBorderInvalid';
    } else if (numberOfItems <= 3) {
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
