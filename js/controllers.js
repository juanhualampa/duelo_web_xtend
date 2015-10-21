'use strict';
var app = angular.module('duelosApp')
app.controller('DatosPersonajeController',function ($scope, DuelosService) {
	$scope.datos = DuelosService.datosDelJuego();
	$scope.personajeBindeado = {};
	$scope.estadisticasPersonajeBindeado = {};
	$scope.changeLink = function(personaje) {          
        $scope.personajeBindeado = personaje;
    }
});
  