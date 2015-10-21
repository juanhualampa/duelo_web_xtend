'use strict';

var app = angular.module('duelosApp', [])

/* Controllers */
app.controller('DatosPersonajeController', function ($scope) {
	/* scope */
	
	$scope.personajeBindeado = 
		{'Especialidades':['unaEspecialidad','otraEspecialidad'],
		 'Debilidades' : ['unaDebilidad','otraDebilidad'],
		 'MejorPosicion' : ['unaPosicion']
		};
		
	
	$scope.posiciones = [ 'TOP','BOTTOM','JUNGLE','MID'];
	$scope.estadisticasPersonajeBindeado = 
						{
	                                'Jugadas':'3',
	                                'Ganadas':'2',
	                                'Kills':'1',
	                                'Deads':'1',
	                                'Assists':'1',
	                                'MejorUbicacion':'TOP',
	                                'Puntaje':'RAMPAGE'                              
						};
	
	$scope.images = {'/home/luciano/git/duelo_web_xtend/assets/images/amumu.png'};
	/*
	
	this.datosDelJuego=function(idParticipante){
	return {posicionesDuelos:[
	                  {nombre:'TOP'},
	                  {nombre:'BOT'},
	                  {nombre:'JUNGLE'},
	                  {nombre:'MID'}]	     
	       ]}
	*/
});