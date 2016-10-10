(function () {
    "use strict";
    
    angular.module('calcApp')
      .controller('MainController', MainController)
      .controller('DatepickerDemoCtrl', DatepickerDemoCtrl);
    
    function MainController($rootScope, $scope) {
      $scope.headItemsTur = ["Punkty - Turośń", "Kwota - Turośń", "Prywatni - Turośń", "Suma"];
      $scope.headItemsBia = ["Punkty - Białystok", "Kwota - Białystok", "Prywatni - Białystok", "Suma"];
      $scope.pointsTur = 0;
      $scope.pointsBia = 0;
      $scope.privateMoneyTur = 0; 
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
      $scope.regFloat = /[0-9]|[.]/,
      $scope.regInteger = /[0-9]/;
      $scope.openContent = true;

      // $rootScope.select = function(data) {
      //   console.log(data + "lalalala");
      // };

      $scope.allowKey = function ($event, reg) {
          var accessKeys = $event.key !== "Enter" && $event.key !== "Backspace" && $event.key !== "Shift" && $event.key !== "Tab";

          if(!reg.test($event.key) && accessKeys) {
              $event.returnValue = false;
          }
      }

      $scope.submit = function () {
          $scope.sumTur = 0;
          $scope.sumBia = 0;
          $scope.sum = 0;
          
          if ($scope.pointsTur) {
              $scope.newPointsTur = parseFloat($scope.newPointsTur) + parseFloat(this.pointsTur);
              $scope.newValueTur = (parseFloat($scope.newPointsTur) * 0.38).toFixed(2);
              $scope.pointsTur = "";
          }
          
          if ($scope.pointsBia) {
              $scope.newPointsBia = parseFloat($scope.newPointsBia) + parseFloat(this.pointsBia);
              $scope.newValueBia = (parseFloat($scope.newPointsBia) * 0.322).toFixed(2);
              $scope.pointsBia = "";
          }
          
          if ($scope.privateMoneyTur) {
              $scope.newPrivateMoneyTur = parseFloat($scope.newPrivateMoneyTur) + parseFloat(this.privateMoneyTur);
              $scope.newPrivateTur = $scope.newPrivateTur + parseFloat(this.privateMoneyTur) * 0.45;
              $scope.privateMoneyTur = "";
          }
          
          if ($scope.privateMoneyBia) {
              $scope.newPrivateMoneyBia = parseFloat($scope.newPrivateMoneyBia) + parseFloat(this.privateMoneyBia);
              $scope.newPrivateBia = $scope.newPrivateBia + parseFloat(this.privateMoneyBia) * 0.40;
              $scope.privateMoneyBia = "";
          }
          
          $scope.sumTur = (parseFloat(this.sumTur) + parseFloat($scope.newPrivateTur) + parseFloat($scope.newValueTur)).toFixed(2);
          $scope.sumBia = (parseFloat(this.sumBia) + parseFloat($scope.newPrivateBia) + parseFloat($scope.newValueBia)).toFixed(2);

          $scope.sum = (parseFloat($scope.sumTur) + parseFloat($scope.sumBia)).toFixed(2);
      }
    }

    // Custom datepicker from https://angular-ui.github.io/bootstrap/#/getting_started

    function DatepickerDemoCtrl($rootScope, $scope) {

      $scope.today = function() {
        $scope.dt = new Date();
      };
      $scope.today();

      $scope.clear = function() {
        $scope.dt = null;
      };

      $scope.options = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
      };

      // Disable weekend selection
      function disabled(data) {
        var date = data.date,
          mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
      }

      $scope.toggleMin = function() {
        $scope.options.minDate = $scope.options.minDate ? null : new Date();
      };

      $scope.toggleMin();

      $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
      };

      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var afterTomorrow = new Date(tomorrow);
      afterTomorrow.setDate(tomorrow.getDate() + 1);
      $scope.events = [
        {
          date: tomorrow,
          status: 'full'
        },
        {
          date: afterTomorrow,
          status: 'partially'
        }
      ];

      function getDayClass(data) {
        var date = data.date,
          mode = data.mode;
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0,0,0,0);

          for (var i = 0; i < $scope.events.length; i++) {
            var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

            if (dayToCheck === currentDay) {
              return $scope.events[i].status;
            }
          }
        }

        return '';
      }
    }
})();