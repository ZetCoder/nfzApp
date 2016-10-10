(function () {
    "use strict";
    
    angular.module('calcApp').controller('MainController', MainController);
    
    function MainController($scope) {
        $scope.headItemsTur = ["Punkty - Turośń", "Kwota - Turośń", "Prywatni - Turośń", "Suma"];
        $scope.headItemsBia = ["Punkty - Białystok", "Kwota - Białystok", "Prywatni - Białystok", "Suma"];
        $scope.pointsTur = 0;
        $scope.pointsBia = 0;
        $scope.privateMoneyTur = 0;
        $scope.privateMoneyBia = 0;
        $scope.newPointsTur = 0;
        $scope.newPointsBia = 0;
        $scope.newPrivateTur = 0;
        $scope.newPrivateBia = 0;
        $scope.newValueTur = 0;
        $scope.newValueBia = 0;
        $scope.sumTur = 0;
        $scope.sumBia = 0;
        $scope.regFloat = /[0-9]|[.]/,
        $scope.regInteger = /[0-9]/;

        

        $scope.allowKey = function ($event, reg) {
            var accessKeys = $event.key !== "Enter" && $event.key !== "Backspace" && $event.key !== "Shift" && $event.key !== "Tab";

            if(!reg.test($event.key) && accessKeys) {
                $event.returnValue = false;
            }
        }

        $scope.submit = function () {
            $scope.sumTur = 0;
            $scope.sumBia = 0;
            
            if ($scope.pointsTur) {
                $scope.newPointsTur = parseFloat($scope.newPointsTur) + parseFloat(this.pointsTur);
                $scope.newValueTur = (parseFloat($scope.newPointsTur) * 0.38).toFixed(2);
                $scope.pointsTur = 0;
            }
            
            if ($scope.pointsBia) {
                $scope.newPointsBia = parseFloat($scope.newPointsBia) + parseFloat(this.pointsBia);
                $scope.newValueBia = (parseFloat($scope.newPointsBia) * 0.322).toFixed(2);
                $scope.pointsBia = 0;
            }
            
            if ($scope.privateMoneyTur) {
                $scope.newPrivateTur = parseFloat(this.privateMoneyTur) * 0.45;
                $scope.privateMoneyTur = 0;
            }
            
            if ($scope.privateMoneyBia) {
                $scope.newPrivateBia = parseFloat(this.privateMoneyBia) * 0.40;
                $scope.privateMoneyBia = 0;
            }
            
            $scope.sumTur = (parseFloat(this.sumTur) + parseFloat($scope.newPrivateTur) + parseFloat($scope.newValueTur)).toFixed(2);
            $scope.sumBia = (parseFloat(this.sumBia) + parseFloat($scope.newPrivateBia) + parseFloat($scope.newValueBia)).toFixed(2);
        }
    }
})();