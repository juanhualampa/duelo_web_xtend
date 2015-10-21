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
	$scope.imagenSeleccionada = {}
	$scope.images = [
	 						{id:'amumu',source:'assets/images/amumu.png'},
	 						{id:'ahri',source:'assets/images/ahri.png'},
	 						{id:'olaf',source:'assets/images/olaf.png'},
	 						{id:'pudge',source:'assets/images/pudge.png'},
	 						{id:'witchdoctor',source:'assets/images/witchdoctor.png'},
	 						{id:'viper',source:'assets/images/viper.png'}
	 					 ];



	/*
	
	['http://www.w3schools.com/angular/pic_angular.jpg',
					'http://www.w3schools.com/angular/pic_angular.jpg'
					];


	this.datosDelJuego=function(idParticipante){
	return {posicionesDuelos:[
	                  {nombre:'TOP'},
	                  {nombre:'BOT'},
	                  {nombre:'JUNGLE'},
	                  {nombre:'MID'}]	     
	       ]}
	*/
});