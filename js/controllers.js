'use strict';
var app = angular.module('duelosApp')
app.controller('DatosPersonajeController',function ($scope, DuelosService) {
	$scope.datos = DuelosService.datosDelJuego();
	$scope.jugadorSeleccionado = $scope.datos.jugadorSeleccionado;
	$scope.personajeSeleccionado = {};
	$scope.estadisticasPersonajeSeleccionado = {};
	$scope.seleccionarPersonaje = function(personaje) {          
        $scope.personajeSeleccionado = personaje;
        $scope.hayUnPersonajeSeleccionado = true;
    }
	$scope.hayUnPersonajeSeleccionado = false;
});
  