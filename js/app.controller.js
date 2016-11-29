(function () {
    "use strict";
    
    angular.module('calcApp')
      .controller('MainController', ['$rootScope', '$scope', MainController]);
    
    function MainController($rootScope, $scope) {

      // Remember that $scope properties/methods should be declared as $scope properties/methods only if they are used in directives
      // If we need add some logic 
      $scope.headItemsTur = ["Punkty - Turośń", "Kwota - Turośń", "Prywatni - Turośń", "Suma"];
      $scope.headItemsBia = ["Punkty - Białystok", "Kwota - Białystok", "Prywatni - Białystok", "Suma"];
      $scope.pointsTur;
      $scope.pointsBia = 0;
      $scope.privateMoneyTur; 
      $scope.privateMoneyBia = 0;
      $scope.newPrivateMoneyTur = 0;
      $scope.newPrivateMoneyBia = 0;
      $scope.newPointsTur = 0;
      $scope.newPointsBia = 0;
      $scope.newPrivateTur = 0;
      $scope.newPrivateBia = 0;
      $scope.newValueTur = 0;
      $scope.newValueBia = 0;
      $scope.sumTur = 0;
      $scope.sumBia = 0;
      $scope.sum = 0;

      $scope.validMessage = {
        validPointsMessage: "Please enter any points value",
        validValueMessage: "Please enter any private money",
        validRequiredMessage: "Please fill required field"
      };

      /* .toFixedNumber() is highly recommended to use instead of .toFixed() 
      which converts numbers to strings for some purpose, please visit 
      http://stackoverflow.com/questions/2283566/tofixed-returns-a-string-in-javascript 
      to get more info*/

      Number.prototype.toFixedNumber = function(x, base) {
        var pow = Math.pow(base || 10, x);
        return + (Math.round(this * pow) / pow);
      }

      $scope.submit = function () {
          $scope.sumTur = 0;
          $scope.sumBia = 0;
          
          if ($scope.pointsTur) {
              $scope.pointsTur = parseFloat($scope.pointsTur); //typed value on input field is returning it as string, so it need to be parsed to number
              $scope.newPointsTur = $scope.newPointsTur + $scope.pointsTur;
              $scope.newValueTur = ($scope.newPointsTur * 0.38).toFixedNumber(2);
              $scope.pointsTur = ""; //empty string assigning here is needed to clear input field
          }
          
          if ($scope.pointsBia) {
              $scope.pointsBia = parseFloat($scope.pointsBia); //typed value on input field is returning it as string, so it need to be parsed to number
              $scope.newPointsBia = $scope.newPointsBia + $scope.pointsBia;
              $scope.newValueBia = ($scope.newPointsBia * 0.322).toFixedNumber(2);
              $scope.pointsBia = ""; //empty string assigning here is needed to clear input field
          }
          
          if ($scope.privateMoneyTur) {
              $scope.privateMoneyTur = parseFloat($scope.privateMoneyTur); //typed value on input field is returning it as string, so it need to be parsed to number
              $scope.newPrivateMoneyTur = $scope.newPrivateMoneyTur + $scope.privateMoneyTur;
              $scope.newPrivateTur = $scope.newPrivateTur + $scope.privateMoneyTur * 0.45;
              $scope.privateMoneyTur = ""; //empty string assigning here is needed to clear input field
          }
          
          if ($scope.privateMoneyBia) {
              $scope.privateMoneyBia = parseFloat($scope.privateMoneyBia); //typed value on input field is returning it as string, so it need to be parsed to number
              $scope.newPrivateMoneyBia = $scope.newPrivateMoneyBia + $scope.privateMoneyBia;
              $scope.newPrivateBia = $scope.newPrivateBia + $scope.privateMoneyBia * 0.40;
              $scope.privateMoneyBia = ""; //empty string assigning here is needed to clear input field
          }
          
          $scope.sumTur = ($scope.sumTur + $scope.newPrivateTur + $scope.newValueTur).toFixedNumber(2);
          $scope.sumBia = ($scope.sumBia + $scope.newPrivateBia + $scope.newValueBia).toFixedNumber(2);

          if(!$scope.userForm.$invalid) {
            alert("Brawo - poprawnie wypełniłeś formularz!");
          }
      }

      $scope.$watchGroup(["sumTur", "sumBia", "pointsTur", "newPointsTur"], function() {
        $scope.newPointsTur = $scope.newPointsTur + $scope.pointsTur;
        $scope.newValueTur = ($scope.newPointsTur * 0.38).toFixedNumber(2);
        $scope.sum = ($scope.sumTur + $scope.sumBia).toFixedNumber(2);
      });
    }
})();