export default

(function() {
    "use strict";
    
    angular.module('calcApp')
    .component('app', 
    	{
    		restrict: 'E',
    		templateUrl: '../template.html',
    		controller: 'MainController'
    	}
    );
})();