angular.module('duelosApp')
.service('DuelosService',function(){
    this.datosDelJuego=function(){
        return {
            {
                posicionesDuelos: [ { nombre: "TOP" }, { nombre: "BOTTOM" }, { nombre: "JUNGLE" }, { nombre: "MIDDLE" } ],
                jugadorSeleccionado: {
                    // nombre: "pepe",
                    personajes: [
                    {
                        id: 1,
                        nombre: "amumu",
                        source: "assets/images/amumu.png",
                        estadisticas: {
                            "Jugadas": "3",
                            "Ganadas": "2",
                            "Kills": "1",
                            "Deads": "1",
                            "Assists": "1",
                            "MejorUbicacion": "TOP",
                            "Puntaje": "NI-IDEA"
                        },
                        caracteristicas: {
                            "Especialidades": [
                            "amumu",
                            "otraEspecialidad"
                            ],
                            "Debilidades": [
                            "unaDebilidad",
                            "otraDebilidad"
                            ],
                            "MejorPosicion": [
                            "TOP"
                            ]
                        }
                    },
                    {
                        id: 2,
                        nombre: "ahri",
                        source: "assets/images/ahri.png",
                        estadisticas: {
                            "Jugadas": "3",
                            "Ganadas": "2",
                            "Kills": "1",
                            "Deads": "1",
                            "Assists": "1",
                            "MejorUbicacion": "BOTTOM",
                            "Puntaje": "MANCO"
                        },
                        caracteristicas: {
                            "Especialidades": [
                            "ahri",
                            "otraEspecialidad"
                            ],
                            "Debilidades": [
                            "unaDebilidad",
                            "otraDebilidad"
                            ],
                            "MejorPosicion": [
                            "BOTTOM"
                            ]
                        }
                    },
                    {
                        id: 3,
                        nombre: "olaf",
                        source: "assets/images/olaf.png",
                        estadisticas: {
                            "Jugadas": "3",
                            "Ganadas": "2",
                            "Kills": "1",
                            "Deads": "1",
                            "Assists": "1",
                            "MejorUbicacion": "TOP",
                            "Puntaje": "RAMPAGE"
                        },
                        caracteristicas: {
                            "Especialidades": [
                            "olaf",
                            "otraEspecialidad"
                            ],
                            "Debilidades": [
                            "unaDebilidad",
                            "otraDebilidad"
                            ],
                            "MejorPosicion": [
                            "TOP"
                            ]
                        }
                    },
                    {
                        id: 4,
                        nombre: "pudge",
                        source: "assets/images/pudge.png",
                        estadisticas: {
                            "Jugadas": "3",
                            "Ganadas": "2",
                            "Kills": "1",
                            "Deads": "1",
                            "Assists": "1",
                            "MejorUbicacion": "JUNGLE",
                            "Puntaje": "DOMINADOR"
                        },
                        caracteristicas: {
                            "Especialidades": [
                            "pudge",
                            "otraEspecialidad"
                            ],
                            "Debilidades": [
                            "unaDebilidad",
                            "otraDebilidad"
                            ],
                            "MejorPosicion": [
                            "JUNGLE"
                            ]
                        }
                    },
                    {
                        id: 5,
                        nombre: "witchdoctor",
                        source: "assets/images/witchdoctor.png",
                        estadisticas: {
                            "Jugadas": "3",
                            "Ganadas": "2",
                            "Kills": "1",
                            "Deads": "1",
                            "Assists": "1",
                            "MejorUbicacion": "MIDDLE",
                            "Puntaje": "KILLING-SPREAD"
                        },
                        caracteristicas: {
                            "Especialidades": [
                            "witch",
                            "otraEspecialidad"
                            ],
                            "Debilidades": [
                            "unaDebilidad",
                            "otraDebilidad"
                            ],
                            "MejorPosicion": [
                            "MIDDLE"
                            ]
                        }
                    },
                    {
                        id: 6,
                        nombre: "viper",
                        source: "assets/images/viper.png",
                        estadisticas: {
                            "Jugadas": "3",
                            "Ganadas": "2",
                            "Kills": "1",
                            "Deads": "1",
                            "Assists": "1",
                            "MejorUbicacion": "BOTTOM",
                            "Puntaje": "NOOB"
                        },
                        caracteristicas: {
                            "Especialidades": [
                            "viper",
                            "otraEspecialidad"
                            ],
                            "Debilidades": [
                            "unaDebilidad",
                            "otraDebilidad"
                            ],
                            "MejorPosicion": [
                            "BOTTOM"
                            ]
                        }
                    }
                    ]
                },
                rivalesPosibles: [
                {
                    rivalUno: {
                        nombre: "pepe",
                        personajes: [
                        {
                            id: 7,
                            nombre: "amumu",
                            source: "assets/images/amumu.png",
                            estadisticas: {
                                "Jugadas": "6",
                                "Ganadas": "4",
                                "Kills": "3",
                                "Deads": "1",
                                "Assists": "1",
                                "MejorUbicacion": "BOTTOM",
                                "Puntaje": "alguno"
                            },
                            caracteristicas: {
                                "Especialidades": [
                                "amumu",
                                "otraEspecialidad"
                                ],
                                "Debilidades": [
                                "unaDebilidad",
                                "otraDebilidad"
                                ],
                                "MejorPosicion": [
                                "BOTTOM"
                                ]
                            }
                        },
                        {
                            id: 8,
                            nombre: "ahri",
                            source: "assets/images/ahri.png",
                            estadisticas: {
                                "Jugadas": "7",
                                "Ganadas": "2",
                                "Kills": "1",
                                "Deads": "0",
                                "Assists": "0",
                                "MejorUbicacion": "JUNGLE",
                                "Puntaje": "MANCO"
                            },
                            caracteristicas: {
                                "Especialidades": [
                                "ahri",
                                "otraEspecialidad"
                                ],
                                "Debilidades": [
                                "unaDebilidad",
                                "otraDebilidad"
                                ],
                                "MejorPosicion": [
                                "JUNGLE"
                                ]
                            }
                        },
                        {
                            id: 9,
                            nombre: "olaf",
                            source: "assets/images/olaf.png",
                            estadisticas: {
                                "Jugadas": "5",
                                "Ganadas": "2",
                                "Kills": "2",
                                "Deads": "3",
                                "Assists": "0",
                                "MejorUbicacion": "BOTTOM",
                                "Puntaje": "RAMPAGE"
                            },
                            caracteristicas: {
                                "Especialidades": [
                                "olaf",
                                "otraEspecialidad"
                                ],
                                "Debilidades": [
                                "unaDebilidad",
                                "otraDebilidad"
                                ],
                                "MejorPosicion": [
                                "BOTTOM"
                                ]
                            }
                        },
                        {
                            id: 10,
                            nombre: "pudge",
                            source: "assets/images/pudge.png",
                            estadisticas: {
                                "Jugadas": "8",
                                "Ganadas": "8",
                                "Kills": "7",
                                "Deads": "0",
                                "Assists": "1",
                                "MejorUbicacion": "MIDDLE",
                                "Puntaje": "DOMINADOR"
                            },
                            caracteristicas: {
                                "Especialidades": [
                                "pudge",
                                "otraEspecialidad"
                                ],
                                "Debilidades": [
                                "unaDebilidad",
                                "otraDebilidad"
                                ],
                                "MejorPosicion": [
                                "MIDDLE"
                                ]
                            }
                        },
                        {
                            id: 11,
                            nombre: "witchdoctor",
                            source: "assets/images/witchdoctor.png",
                            estadisticas: {
                                "Jugadas": "4",
                                "Ganadas": "2",
                                "Kills": "2",
                                "Deads": "1",
                                "Assists": "1",
                                "MejorUbicacion": "TOP",
                                "Puntaje": "KILLING-SPREAD"
                            },
                            caracteristicas: {
                                "Especialidades": [
                                "witch",
                                "otraEspecialidad"
                                ],
                                "Debilidades": [
                                "unaDebilidad",
                                "otraDebilidad"
                                ],
                                "MejorPosicion": [
                                "TOP"
                                ]
                            }
                        },
                        {
                            id: 12,
                            nombre: "viper",
                            source: "assets/images/viper.png",
                            estadisticas: {
                                "Jugadas": "2",
                                "Ganadas": "0",
                                "Kills": "0",
                                "Deads": "2",
                                "Assists": "0",
                                "MejorUbicacion": "JUNGLE",
                                "Puntaje": "NOOB"
                            },
                            caracteristicas: {
                                "Especialidades": [
                                "viper",
                                "otraEspecialidad"
                                ],
                                "Debilidades": [
                                "unaDebilidad",
                                "otraDebilidad"
                                ],
                                "MejorPosicion": [
                                "BOTTOM"
                                ]
                            }
                        }
                        ]
                    }
                }
                ]
            }
        }
    }
}):