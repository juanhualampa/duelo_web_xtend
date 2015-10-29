angular.module("duelosApp")


.directive('footerData', function() {
	  return {
	    templateUrl: 'partials/footer-data.html'
	  };
	})

.directive('selectedElementData', function() {
	  return {
	    templateUrl: 'partials/selectedElement-data.html'
	  };
	})
	
.directive('encontreRivalData', function() {
	  return {
	    templateUrl: 'partials/encontre-rival.html'
	  };
	})	
	;
