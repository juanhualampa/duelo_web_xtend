angular.module('duelosApp')
.service('DuelosService',function(){
	this.datosDelJuego=function(){
		return {
			posicionesDuelos: [ {nombre:'TOP'}, {nombre:'BOT'}, {nombre:'JUNGLE'},{nombre:'MID'}]

		
		,
	        personajes:[ 
		              {id:1, 
		    		   nombre: 'amumu',
		    		   source: 'assets/images/amumu.png',
		               estadisticas: 
		               {
	                       'Jugadas':'3',
	                       'Ganadas':'2',
	                       'Kills':'1',
	                       'Deads':'1',
	                       'Assists':'1',
	                       'MejorUbicacion':'TOP',
	                       'Puntaje':'NI-IDEA'                              
		               },
		               caracteristicas: 
		               {	'Especialidades':['unaEspecialidad','otraEspecialidad'],
		          		 	'Debilidades' : ['unaDebilidad','otraDebilidad'],
		          		 	'MejorPosicion' : ['unaPosicion']
		        		}
	                   }
		              
	                 
	                  ,
		              {id:2, 
			    		   nombre: 'ahri',
			    		   source: 'assets/images/ahri.png',
			               estadisticas: 
			               {
		                       'Jugadas':'3',
		                       'Ganadas':'2',
		                       'Kills':'1',
		                       'Deads':'1',
		                       'Assists':'1',
		                       'MejorUbicacion':'TOP',
		                       'Puntaje':'MANCO'                              
			               },
			               caracteristicas: 
			               {	'Especialidades':['unaEspecialidad','otraEspecialidad'],
			          		 	'Debilidades' : ['unaDebilidad','otraDebilidad'],
			          		 	'MejorPosicion' : ['unaPosicion']
			        		}
		                   },
		              
		              
		              {id:3, 
			    		   nombre: 'olaf',
			    		   source: 'assets/images/olaf.png',
			               estadisticas: 
			               {
		                       'Jugadas':'3',
		                       'Ganadas':'2',
		                       'Kills':'1',
		                       'Deads':'1',
		                       'Assists':'1',
		                       'MejorUbicacion':'TOP',
		                       'Puntaje':'RAMPAGE'                              
			               },
			               caracteristicas: 
			               {	'Especialidades':['unaEspecialidad','otraEspecialidad'],
			          		 	'Debilidades' : ['unaDebilidad','otraDebilidad'],
			          		 	'MejorPosicion' : ['unaPosicion']
			        		}
		                   },
		              
		              
		              {id:4, 
			    		   nombre: 'pudge',
			    		   source: 'assets/images/pudge.png',
			               estadisticas: 
			               {
		                       'Jugadas':'3',
		                       'Ganadas':'2',
		                       'Kills':'1',
		                       'Deads':'1',
		                       'Assists':'1',
		                       'MejorUbicacion':'TOP',
		                       'Puntaje':'DOMINADOR'                              
			               },
			               caracteristicas: 
			               {	'Especialidades':['unaEspecialidad','otraEspecialidad'],
			          		 	'Debilidades' : ['unaDebilidad','otraDebilidad'],
			          		 	'MejorPosicion' : ['unaPosicion']
			        		}
		                   },
		              
		              
		              {id:5, 
			    		   nombre: 'witchdoctor',
			    		   source: 'assets/images/witchdoctor.png',
			               estadisticas: 
			               {
		                       'Jugadas':'3',
		                       'Ganadas':'2',
		                       'Kills':'1',
		                       'Deads':'1',
		                       'Assists':'1',
		                       'MejorUbicacion':'TOP',
		                       'Puntaje':'KILLING-SPREAD'                              
			               },
			               caracteristicas: 
			               {	'Especialidades':['unaEspecialidad','otraEspecialidad'],
			          		 	'Debilidades' : ['unaDebilidad','otraDebilidad'],
			          		 	'MejorPosicion' : ['unaPosicion']
			        		}
		                   },
		              
		              {id:6, 
			    		   nombre: 'viper',
			    		   source: 'assets/images/viper.png',
			               estadisticas: 
			               {
		                       'Jugadas':'3',
		                       'Ganadas':'2',
		                       'Kills':'1',
		                       'Deads':'1',
		                       'Assists':'1',
		                       'MejorUbicacion':'TOP',
		                       'Puntaje':'NOOB'                              
			               },
			               caracteristicas: 
			               {	'Especialidades':['unaEspecialidad','otraEspecialidad'],
			          		 	'Debilidades' : ['unaDebilidad','otraDebilidad'],
			          		 	'MejorPosicion' : ['unaPosicion']
			        		}
		               }
		              
		             ]
			}
		}
	}
);
