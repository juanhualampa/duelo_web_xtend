'use strict';
var app = angular.module('duelosApp')
app.controller('DatosPersonajeController',function ($scope, DuelosService) {
	$scope.datos = DuelosService.datosDelJuego();
	$scope.jugadorSeleccionado = $scope.datos.jugadorSeleccionado;
	$scope.personajeSeleccionado = {};
	$scope.rivales = $scope.datos.rivalesPosibles
	$scope.estadisticasPersonajeSeleccionado = {};
	$scope.seleccionarPersonaje = function(personaje) {          
        $scope.personajeSeleccionado = personaje;
        $scope.hayUnPersonajeSeleccionado = true;
    };
    $scope.modal = null;
	$scope.hayUnPersonajeSeleccionado = false;
	$scope.dameUnModal = function() { 
        if ($scope.rivales[0] != null)
        {
        	$scope.modal = "#basicModal";
        }
        else{
        	$scope.modal = "#mrXModal";
        }        	
        $scope.modal = "#mrXModal";
    };
		
});
  