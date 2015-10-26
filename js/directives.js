angular.module("duelosApp")

/*
.directive('footerData', function(){
	return { restrict: 'E', templateUrl: 'footer-data.html' };
});
*/

.directive('footerData', function() {
	  return {
	    templateUrl: 'footer-data.html'
	  };
	})

.directive('centerData', function() {
	  return {
	    templateUrl: 'center-data.html'
	  };
	});