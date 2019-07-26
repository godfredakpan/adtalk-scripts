
        (function(window, document, $, undefined) {
            "use strict";
            $(function() {

                if ($('#chartjs_videoview').length) {
                    var ctx = document.getElementById("chartjs_videoview").getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ["All Video View",],
                            datasets: [{
                                label: 'All Video Views for Survey {{ $survey_id->title }}',
                                data: [ {{Auth::user()->videoViews($survey_id)->count()}}],
                                backgroundColor: "rgba(89, 105, 255,0.5)",
                                borderColor: "rgba(89, 105, 255,0.7)",
                                borderWidth: 1
                            },

                            ]
                        },
                        options: {
                            scales: {
                                yAxes: [{

                                }]
                            },
                            legend: {
                                display: true,
                                position: 'bottom',

                                labels: {
                                    fontColor: '#71748d',
                                    fontFamily: 'Circular Std Book',
                                    fontSize: 14,
                                }
                            },

                            scales: {
                                xAxes: [{
                                    ticks: {
                                        fontSize: 14,
                                        fontFamily: 'Circular Std Book',
                                        fontColor: '#71748d',
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        fontSize: 14,
                                        fontFamily: 'Circular Std Book',
                                        fontColor: '#71748d',
                                    }
                                }]
                            }
                        }


                    });
                }

                if ($('#chartjs_bar').length) {
                    var ctx = document.getElementById("chartjs_bar").getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ["All RATINGS",],
                            datasets: [{
                                label: 'Excellent',
                                data: [ {{count($excellent)}}],
                                backgroundColor: "#73fa54",
                                borderColor: "#73fa54",
                                borderWidth: 1
                            }, {
                                label: 'Very Good',
                                data: [{{count($verygood)}}],
                                backgroundColor: "#499a34",
                                borderColor: "#499a34",
                                borderWidth: 1
                            },{
                                label: 'Good',
                                data: [{{count($good)}}],
                                backgroundColor: "#2e9a6f",
                                borderColor: "#2e9a6f",
                                borderWidth: 1
                            },
                                {
                                label: 'Poor',
                                data: [{{count($poor)}}],
                                backgroundColor: "#8d7d6f",
                                borderColor: "#8d7d6f",
                                borderWidth: 1
                            },
                                {
                                    label: 'Very Poor',
                                    data: [{{count($verypoor)}}],
                                    backgroundColor: "#8d220f",
                                    borderColor: "#8d220f",
                                    borderWidth: 1
                                }


                            ]
                        },
                        options: {
                            scales: {
                                yAxes: [{

                                }]
                            },
                            legend: {
                                display: true,
                                position: 'bottom',

                                labels: {
                                    fontColor: '#71748d',
                                    fontFamily: 'Circular Std Book',
                                    fontSize: 14,
                                }
                            },

                            scales: {
                                xAxes: [{
                                    ticks: {
                                        fontSize: 14,
                                        fontFamily: 'Circular Std Book',
                                        fontColor: '#71748d',
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        fontSize: 14,
                                        fontFamily: 'Circular Std Book',
                                        fontColor: '#71748d',
                                    }
                                }]
                            }
                        }


                    });
                }

                if ($('#chartjs_videocomment').length) {
                    var ctx = document.getElementById("chartjs_videocomment").getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ["All Video Comments ",],
                            datasets: [{
                                label: 'All Video Comments for Survey {{ $survey_id->title }}',
                                data: [ {{Auth::user()->videoComments($survey_id)->count()}}],
                                backgroundColor: "rgba(89, 105, 255,0.5)",
                                borderColor: "rgba(89, 105, 255,0.7)",
                                borderWidth: 1
                            },

                            ]
                        },
                        options: {
                            scales: {
                                yAxes: [{

                                }]
                            },
                            legend: {
                                display: true,
                                position: 'bottom',

                                labels: {
                                    fontColor: '#71748d',
                                    fontFamily: 'Circular Std Book',
                                    fontSize: 14,
                                }
                            },

                            scales: {
                                xAxes: [{
                                    ticks: {
                                        fontSize: 14,
                                        fontFamily: 'Circular Std Book',
                                        fontColor: '#71748d',
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        fontSize: 14,
                                        fontFamily: 'Circular Std Book',
                                        fontColor: '#71748d',
                                    }
                                }]
                            }
                        }


                    });
                }

                if ($('#chartjs_state').length) {
                    var ctx = document.getElementById("chartjs_state").getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ["Users From States",],
                            datasets: [{
                                label: 'Abuja',
                                data: [ {{count($abuja)}}],
                                backgroundColor: "#628d79",
                                borderColor: "#628d79",
                                borderWidth: 1
                            }, {
                                label: 'Abia',
                                data: [{{count($abia)}}],
                                backgroundColor: "#268d43",
                                borderColor: "#628d79",
                                borderWidth: 1
                            }, {
                                label: 'Akwa Ibom',
                                data: [{{count($akwaibom)}}],
                                backgroundColor: "#71748d",
                                borderColor: "#71748d",
                                borderWidth: 1
                            },{
                                label: 'Bauchi',
                                data: [ {{count($bauchi)}}],
                                backgroundColor: "#628d35",
                                borderColor: "#628d35",
                                borderWidth: 1
                            }, {
                                label: 'Bayelsa',
                                data: [{{count($bayelsa)}}],
                                backgroundColor: "#00418d",
                                borderColor: "#00418d",
                                borderWidth: 1
                            }, {
                                label: 'Benue',
                                data: [{{count($benue)}}],
                                backgroundColor: "#edc8ab",
                                borderColor: "#edc8ab",
                                borderWidth: 1
                            },{
                                label: 'Borno',
                                data: [{{count($borno)}}],
                                backgroundColor: "#9b65ed",
                                borderColor: "rgba(255, 64, 123,0.7)",
                                borderWidth: 1
                            }, {
                                label: 'Cross River',
                                data: [{{count($crossriver)}}],
                                backgroundColor: "#d6d765",
                                borderColor: "#71748d",
                                borderWidth: 1
                            },{
                                label: 'Delta',
                                data: [ {{count($delta)}}],
                                backgroundColor: "#ffa64c",
                                borderColor: "#ffa64c",
                                borderWidth: 1
                            }, {
                                label: 'Ebonyi',
                                data: [{{count($ebonyi)}}],
                                backgroundColor: "#ffa0b2",
                                borderColor: "#a3ecff",
                                borderWidth: 1
                            }, {
                                label: 'Edo',
                                data: [{{count($edo)}}],
                                backgroundColor: "#ff4002",
                                borderColor: "#ff4002",
                                borderWidth: 1
                            },{
                                label: 'Ekiti',
                                data: [{{count($ekiti)}}],
                                backgroundColor: "#1224ff",
                                borderColor: "#1224ff",
                                borderWidth: 1
                            }, {
                                label: 'Enugu',
                                data: [{{count($enugu)}}],
                                backgroundColor: "#ff9aa6",
                                borderColor: "#ff9aa6",
                                borderWidth: 1
                            },{
                                label: 'Gombe',
                                data: [ {{count($gombe)}}],
                                backgroundColor: "#9fff75",
                                borderColor: "#9fff75",
                                borderWidth: 1
                            }, {
                                label: 'Imo',
                                data: [{{count($imo)}}],
                                backgroundColor: "#ffb259",
                                borderColor: "#ffb259",
                                borderWidth: 1
                            }, {
                                label: 'Jigawa',
                                data: [{{count($jigawa)}}],
                                backgroundColor: "#83478d",
                                borderColor: "#83478d",
                                borderWidth: 1
                            },{
                                label: 'Kaduna',
                                data: [{{count($kaduna)}}],
                                backgroundColor: "#788d6c",
                                borderColor: "#788d6c",
                                borderWidth: 1
                            }, {
                                label: 'Kano',
                                data: [{{count($kano)}}],
                                backgroundColor: "#8d2467",
                                borderColor: "#8d2467",
                                borderWidth: 1
                            },{
                                label: 'Katsina',
                                data: [ {{count($katsina)}}],
                                backgroundColor: "#588d5c",
                                borderColor: "#588d5c",
                                borderWidth: 1
                            }, {
                                label: 'Kebbi',
                                data: [{{count($kebbi)}}],
                                backgroundColor: "#34fff0",
                                borderColor: "#e0ff62",
                                borderWidth: 1
                            }, {
                                label: 'Kogi',
                                data: [{{count($kogi)}}],
                                backgroundColor: "#1c8d3a",
                                borderColor: "#1c8d3a",
                                borderWidth: 1
                            },{
                                label: 'Kwara',
                                data: [{{count($kwara)}}],
                                backgroundColor: "#738d07",
                                borderColor: "#738d07",
                                borderWidth: 1
                            },{
                                label: 'Lagos',
                                data: [{{count($lagos)}}],
                                backgroundColor: "#00778d",
                                borderColor: "#00778d",
                                borderWidth: 1
                            }, {
                                label: 'Nasarawa',
                                data: [{{count($nasarawa)}}],
                                backgroundColor: "#380030",
                                borderColor: "#380030",
                                borderWidth: 1
                            },{
                                label: 'Niger',
                                data: [ {{count($niger)}}],
                                backgroundColor: "#382a20",
                                borderColor: "#382a20",
                                borderWidth: 1
                            }, {
                                label: 'Ogun',
                                data: [{{count($ogun)}}],
                                backgroundColor: "#8f2d2b",
                                borderColor: "#8f2d2b",
                                borderWidth: 1
                            }, {
                                label: 'Ondo',
                                data: [{{count($ondo)}}],
                                backgroundColor: "#14758d",
                                borderColor: "#14758d",
                                borderWidth: 1
                            },{
                                label: 'Osun',
                                data: [{{count($osun)}}],
                                backgroundColor: "#008a63",
                                borderColor: "#008a63",
                                borderWidth: 1
                            }, {
                                label: 'Oyo',
                                data: [{{count($oyo)}}],
                                backgroundColor: "#883e8d",
                                borderColor: "#883e8d",
                                borderWidth: 1
                            },{
                                label: 'Plateau',
                                data: [ {{count($plateau)}}],
                                backgroundColor: "#6ba848",
                                borderColor: "#6ba848",
                                borderWidth: 1
                            }, {
                                label: 'Rivers',
                                data: [{{count($rivers)}}],
                                backgroundColor: "#0f0838",
                                borderColor: "#0f0838",
                                borderWidth: 1
                            }, {
                                label: 'Sokoto',
                                data: [{{count($sokoto)}}],
                                backgroundColor: "#f7ffbc",
                                borderColor: "#f7ffbc",
                                borderWidth: 1
                            },{
                                label: 'Taraba',
                                data: [{{count($taraba)}}],
                                backgroundColor: "#8d220f",
                                borderColor: "#8d220f",
                                borderWidth: 1
                            },{
                                label: 'Yobe',
                                data: [ {{count($yobe)}}],
                                backgroundColor: "#62b49b",
                                borderColor: "#62b49b",
                                borderWidth: 1
                            }, {
                                label: 'Zamfara',
                                data: [{{count($zamfara)}}],
                                backgroundColor: "#2f8d34",
                                borderColor: "#2f8d34",
                                borderWidth: 1
                            },
                            ]
                        },
                        options: {
                            scales: {
                                yAxes: [{

                                }]
                            },
                            legend: {
                                display: true,
                                position: 'bottom',

                                labels: {
                                    fontColor: '#71748d',
                                    fontFamily: 'Circular Std Book',
                                    fontSize: 14,
                                }
                            },

                            scales: {
                                xAxes: [{
                                    ticks: {
                                        fontSize: 14,
                                        fontFamily: 'Circular Std Book',
                                        fontColor: '#71748d',
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        fontSize: 14,
                                        fontFamily: 'Circular Std Book',
                                        fontColor: '#71748d',
                                    }
                                }]
                            }
                        }


                    });
                }

                if ($('#chartjs_radar').length) {
                    var ctx = document.getElementById("chartjs_radar");
                    var myChart = new Chart(ctx, {
                        type: 'radar',
                        data: {
                            labels: ["M", "T", "W", "T", "F", "S", "S"],
                            datasets: [{
                                label: 'Almonds',
                                backgroundColor: "rgba(89, 105, 255,0.5)",
                                borderColor: "rgba(89, 105, 255,0.7)",
                                data: [12, 19, 3, 17, 28, 24, 7],
                                borderWidth: 2
                            }, {
                                label: 'Cashew',
                                backgroundColor: "rgba(255, 64, 123,0.5)",
                                borderColor: "rgba(255, 64, 123,0.7)",
                                data: [30, 29, 5, 5, 20, 3, 10],
                                borderWidth: 2
                            }]
                        },
                        options: {

                            legend: {
                                display: true,
                                position: 'bottom',

                                labels: {
                                    fontColor: '#71748d',
                                    fontFamily: 'Circular Std Book',
                                    fontSize: 14,
                                }
                            },


                        }

                    });
                }


                if ($('#chartjs_polar').length) {
                    var ctx = document.getElementById("chartjs_polar").getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'polarArea',
                        data: {
                            labels: ["M", "T", "W", "T", "F", "S", "S"],
                            datasets: [{
                                backgroundColor: [
                                    "#5969ff",
                                    "#ff407b",
                                    "#25d5f2",
                                    "#ffc750",
                                    "#2ec551",
                                    "#7040fa",
                                    "#ff004e"
                                ],
                                data: [12, 19, 3, 17, 28, 24, 7]
                            }]
                        },
                        options: {

                            legend: {
                                display: true,
                                position: 'bottom',

                                labels: {
                                    fontColor: '#71748d',
                                    fontFamily: 'Circular Std Book',
                                    fontSize: 14,
                                }
                            },


                        }
                    });
                }


                if ($('#chartjs_pie').length) {
                    var ctx = document.getElementById("chartjs_pie").getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'pie',
                        data: {
                            labels: ["FEMALE", "MALE"],
                            datasets: [{
                                backgroundColor: [
                                    "#5969ff",
                                    "#ff407b",
                                ],
                                data: [{{count($femaleUser)}}, {{count($maleUser)}},]
                            }]
                        },
                        options: {
                            legend: {
                                display: true,
                                position: 'bottom',

                                labels: {
                                    fontColor: '#71748d',
                                    fontFamily: 'Circular Std Book',
                                    fontSize: 14,
                                }
                            },


                        }
                    });
                }


                if ($('#chartjs_doughnut').length) {
                    var ctx = document.getElementById("chartjs_doughnut").getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'doughnut',
                        data: {
                            labels: ["Texts", "Videos", "Audio Files", "Banners"],
                            datasets: [{
                                backgroundColor: [
                                    "#5969ff",
                                    "#ff407b",
                                    "#25d5f2",
                                    "#7bf25e",

                                ],
                                data: [{{count($text)}}, {{count($video)}}, {{count($audio)}}, {{count($banner)}}]
                            }]
                        },
                        options: {

                            legend: {
                                display: true,
                                position: 'bottom',

                                labels: {
                                    fontColor: '#71748d',
                                    fontFamily: 'Circular Std Book',
                                    fontSize: 14,
                                }
                            },


                        }

                    });
                }


            });

        })(window, document, window.jQuery);
  