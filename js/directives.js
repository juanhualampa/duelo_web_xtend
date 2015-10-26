angular.module("duelosApp")


.directive('footerData', function() {
	  return {
	    templateUrl: 'footer-data.html'
	  };
	})

.directive('selectedElementData', function() {
	  return {
	    templateUrl: 'selectedElement-data.html'
	  };
	});