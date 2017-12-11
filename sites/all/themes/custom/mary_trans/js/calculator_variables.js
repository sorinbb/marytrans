$(function () {

    var auction_js = {
        '1': {
            'name': 'Copart',
            'countries': {
                '1': {
                    'name': 'AK - ANCHORAGE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '2800'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '2100'
                        }
                    }
                },
                '2': {
                    'name': 'AL - BIRMINGHAM',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '600'
                        }
                    }
                },
                '3': {
                    'name': 'AL - MOBILE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '980'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '580'
                        }
                    }
                },
                '4': {
                    'name': 'AL - MONTGOMERY',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '980'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '580'
                        }
                    }
                },
                '5': {
                    'name': 'AL - TANNER',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '950'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '750'
                        }
                    }
                },
                '6': {
                    'name': 'AR - FAYETTEVILLE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '980'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '670'
                        }
                    }
                },
                '7': {
                    'name': 'AR - LITTLE ROCK',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '960'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '750'
                        }
                    }
                },
                '8': {
                    'name': 'AZ - PHOENIX',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1200'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '550'
                        }
                    }
                },
                '9': {
                    'name': 'AZ - TUCSON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1200'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '600'
                        }
                    }
                },
                '10': {
                    'name': 'CA - BAKERSFIELD',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '500'
                        }
                    }
                },
                '11': {
                    'name': 'CA - FRESNO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '500'
                        }
                    }
                },
                '12': {
                    'name': 'CA - HAYWARD',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '520'
                        }
                    }
                },
                '13': {
                    'name': 'CA - HAYWARD - DESERT VIEW',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '520'
                        }
                    }
                },
                '14': {
                    'name': 'CA - LOS ANGELES',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '420'
                        }
                    }
                },
                '15': {
                    'name': 'CA - MARTINEZ',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '530'
                        }
                    }
                },
                '16': {
                    'name': 'CA - RANCHO - DESERT VIEW',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '420'
                        }
                    }
                },
                '17': {
                    'name': 'CA - RANCHO CUCAMONGA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '420'
                        }
                    }
                },
                '18': {
                    'name': 'CA - SACRAMENTO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '500'
                        }
                    }
                },
                '19': {
                    'name': 'CA - SACRAMENTO - DESERT VIEW',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '500'
                        }
                    }
                },
                '20': {
                    'name': 'CA - SAN BERNARDINO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '400'
                        }
                    }
                },
                '21': {
                    'name': 'CA - SAN DIEGO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '400'
                        }
                    }
                },
                '22': {
                    'name': 'CA - SAN DIEGO - DESERT VIEW',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '400'
                        }
                    }
                },
                '23': {
                    'name': 'CA - SAN JOSE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '450'
                        }
                    }
                },
                '24': {
                    'name': 'CA - SANTA PAULA - DESERT VIEW',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '400'
                        }
                    }
                },
                '25': {
                    'name': 'CA - SO SACRAMENTO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '450'
                        }
                    }
                },
                '26': {
                    'name': 'CA - SUN VALLEY',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '450'
                        }
                    }
                },
                '27': {
                    'name': 'CA - VALLEJO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '450'
                        }
                    }
                },
                '28': {
                    'name': 'CA - VAN NUYS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '450'
                        }
                    }
                },
                '29': {
                    'name': 'CO - COLORADO SPRINGS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '760'
                        },
                        '3': {
                            'name': 'TX Texas',
                            'price': '760'
                        }
                    }
                },
                '30': {
                    'name': 'CO - DENVER',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '760'
                        },
                        '3': {
                            'name': 'TX Texas',
                            'price': '760'
                        }
                    }
                },
                '31': {
                    'name': 'CO - DENVER CENTRAL',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '760'
                        },
                        '3': {
                            'name': 'TX Texas',
                            'price': '760'
                        }
                    }
                },
                '32': {
                    'name': 'CO - DENVER SOUTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '760'
                        },
                        '3': {
                            'name': 'TX Texas',
                            'price': '760'
                        }
                    }
                },
                '33': {
                    'name': 'CT - HARTFORD',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '475'
                        }
                    }
                },
                '34': {
                    'name': 'DC - WASHINGTON DC-MD',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '520'
                        }
                    }
                },
                '35': {
                    'name': 'DE - SEAFORD',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '480'
                        }
                    }
                },
                '36': {
                    'name': 'FL - FT. PIERCE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        },
                        '2': {
                            'name': 'FL Maiami',
                            'price': '450'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '450'
                        }
                    }
                },
                '37': {
                    'name': 'FL - JACKSONVILLE EAST',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        },
                        '2': {
                            'name': 'FL Maiami',
                            'price': '375'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '350'
                        }
                    }
                },
                '38': {
                    'name': 'FL - JACKSONVILLE WEST',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        },
                        '2': {
                            'name': 'FL Maiami',
                            'price': '375'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '350'
                        }
                    }
                },
                '39': {
                    'name': 'FL - MIAMI CENTRAL',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'FL Maiami',
                            'price': '350'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '500'
                        }
                    }
                },
                '40': {
                    'name': 'FL - MIAMI NORTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'FL Maiami',
                            'price': '350'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '600'
                        }
                    }
                },
                '41': {
                    'name': 'FL - MIAMI SOUTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        },
                        '2': {
                            'name': 'FL Maiami',
                            'price': '280'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '475'
                        }
                    }
                },
                '42': {
                    'name': 'FL - OCALA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'FL Maiami',
                            'price': '300'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '420'
                        }
                    }
                },
                '43': {
                    'name': 'FL - ORLANDO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        },
                        '2': {
                            'name': 'FL Maiami',
                            'price': '380'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '380'
                        }
                    }
                },
                '44': {
                    'name': 'FL - ORLANDO NORTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        },
                        '2': {
                            'name': 'FL Maiami',
                            'price': '380'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '380'
                        }
                    }
                },
                '45': {
                    'name': 'FL - PUNTA GORDA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '890'
                        },
                        '2': {
                            'name': 'FL Maiami',
                            'price': '400'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '400'
                        }
                    }
                },
                '46': {
                    'name': 'FL - TALLAHASSEE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '910'
                        },
                        '2': {
                            'name': 'FL Maiami',
                            'price': '475'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '420'
                        }
                    }
                },
                '47': {
                    'name': 'FL - TAMPA SOUTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        },
                        '2': {
                            'name': 'FL Maiami',
                            'price': '420'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '420'
                        }
                    }
                },
                '48': {
                    'name': 'FL - WEST PALM BEACH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'FL Maiami',
                            'price': '320'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '580'
                        }
                    }
                },
                '49': {
                    'name': 'GA - ATLANTA EAST',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '300'
                        }
                    }
                },
                '50': {
                    'name': 'GA - ATLANTA NORTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '750'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '300'
                        }
                    }
                },
                '51': {
                    'name': 'GA - ATLANTA SOUTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '300'
                        }
                    }
                },
                '52': {
                    'name': 'GA - ATLANTA WEST',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '750'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '300'
                        }
                    }
                },
                '53': {
                    'name': 'GA - CARTERSVILLE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '750'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '500'
                        }
                    }
                },
                '54': {
                    'name': 'GA - SAVANNAH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '750'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '250'
                        }
                    }
                },
                '55': {
                    'name': 'GA - TIFTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '820'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '350'
                        }
                    }
                },
                '57': {
                    'name': 'IA - CRASHEDTOYS ELDRIDGE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '58': {
                    'name': 'IA - DAVENPORT',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '59': {
                    'name': 'IA - DES MOINES',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '60': {
                    'name': 'ID - BOISE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1350'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '800'
                        }
                    }
                },
                '61': {
                    'name': 'IL - CHICAGO NORTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '820'
                        }
                    }
                },
                '62': {
                    'name': 'IL - CHICAGO SOUTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '820'
                        }
                    }
                },
                '63': {
                    'name': 'IL - PEORIA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '820'
                        }
                    }
                },
                '64': {
                    'name': 'IL - SOUTHERN ILLINOIS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '65': {
                    'name': 'IL - WHEELING',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        }
                    }
                },
                '66': {
                    'name': 'IN - FORT WAYNE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        }
                    }
                },
                '67': {
                    'name': 'IN - HAMMOND',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '68': {
                    'name': 'IN - INDIANAPOLIS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '69': {
                    'name': 'KS - KANSAS CITY',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '875'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '700'
                        }
                    }
                },
                '70': {
                    'name': 'KS - WICHITA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '875'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '700'
                        }
                    }
                },
                '71': {
                    'name': 'KY - LEXINGTON EAST',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '830'
                        }
                    }
                },
                '72': {
                    'name': 'KY - LEXINGTON WEST',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        }
                    }
                },
                '73': {
                    'name': 'KY - LOUISVILLE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        }
                    }
                },
                '74': {
                    'name': 'KY - WALTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '75': {
                    'name': 'LA - BATON ROUGE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '980'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '480'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '500'
                        }
                    }
                },
                '76': {
                    'name': 'LA - NEW ORLEANS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '980'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '500'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '600'
                        }
                    }
                },
                '77': {
                    'name': 'LA - SHREVEPORT',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '980'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '500'
                        },
                        '3': {
                            'name': 'GA Georgia',
                            'price': '520'
                        }
                    }
                },
                '78': {
                    'name': 'MA - NORTH BOSTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '490'
                        }
                    }
                },
                '79': {
                    'name': 'MA - SOUTH BOSTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '490'
                        }
                    }
                },
                '80': {
                    'name': 'MA - WEST WARREN',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '490'
                        }
                    }
                },
                '81': {
                    'name': 'MD - BALTIMORE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '520'
                        }
                    }
                },
                '82': {
                    'name': 'ME - LYMAN',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '650'
                        }
                    }
                },
                '83': {
                    'name': 'ME - ORONO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '84': {
                    'name': 'MI - DETROIT',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '790'
                        }
                    }
                },
                '85': {
                    'name': 'MI - FLINT',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '86': {
                    'name': 'MI - IONIA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '87': {
                    'name': 'MI - KINCHELOE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        }
                    }
                },
                '88': {
                    'name': 'MI - LANSING',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '890'
                        }
                    }
                },
                '89': {
                    'name': 'MN - CRASHEDTOYS EAST BETHEL',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '890'
                        }
                    }
                },
                '90': {
                    'name': 'MN - MINNEAPOLIS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        }
                    }
                },
                '91': {
                    'name': 'MN - MINNEAPOLIS NORTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        }
                    }
                },
                '92': {
                    'name': 'MN - ST. CLOUD',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '93': {
                    'name': 'MO - COLUMBIA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        }
                    }
                },
                '94': {
                    'name': 'MO - SIKESTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        }
                    }
                },
                '95': {
                    'name': 'MO - SPRINGFIELD',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1200'
                        }
                    }
                },
                '96': {
                    'name': 'MO - ST. LOUIS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        }
                    }
                },
                '97': {
                    'name': 'MS - JACKSON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '700'
                        }
                    }
                },
                '98': {
                    'name': 'MT - BILLINGS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '900'
                        }
                    }
                },
                '99': {
                    'name': 'MT - HELENA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '1000'
                        }
                    }
                },
                '100': {
                    'name': 'NC - CHINA GROVE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '680'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '500'
                        }
                    }
                },
                '101': {
                    'name': 'NC - MEBANE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '680'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '500'
                        }
                    }
                },
                '102': {
                    'name': 'NC - RALEIGH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '680'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '525'
                        }
                    }
                },
                '103': {
                    'name': 'NE - LINCOLN',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '980'
                        }
                    }
                },
                '104': {
                    'name': 'NH - CANDIA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '700'
                        }
                    }
                },
                '105': {
                    'name': 'NH - WEBSTER',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '700'
                        }
                    }
                },
                '106': {
                    'name': 'NJ - GLASSBORO EAST',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '290'
                        }
                    }
                },
                '107': {
                    'name': 'NJ - SOMERVILLE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '290'
                        }
                    }
                },
                '108': {
                    'name': 'NJ - TRENTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '350'
                        }
                    }
                },
                '109': {
                    'name': 'NM - ALBUQUERQUE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1250'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '750'
                        },
                        '3': {
                            'name': 'TX Texas',
                            'price': '730'
                        }
                    }
                },
                '110': {
                    'name': 'NV - LAS VEGAS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '560'
                        }
                    }
                },
                '111': {
                    'name': 'NV - RENO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '760'
                        }
                    }
                },
                '112': {
                    'name': 'NY - ALBANY',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '480'
                        }
                    }
                },
                '113': {
                    'name': 'NY - LONG ISLAND',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '420'
                        }
                    }
                },
                '114': {
                    'name': 'NY - NEWBURGH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '390'
                        }
                    }
                },
                '115': {
                    'name': 'NY - ROCHESTER',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '550'
                        }
                    }
                },
                '116': {
                    'name': 'NY - SYRACUSE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '570'
                        }
                    }
                },
                '117': {
                    'name': 'OH - CLEVELAND EAST',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '118': {
                    'name': 'OH - CLEVELAND WEST',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '119': {
                    'name': 'OH - COLUMBUS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '120': {
                    'name': 'OH - DAYTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '121': {
                    'name': 'OK - OKLAHOMA CITY',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '740'
                        }
                    }
                },
                '122': {
                    'name': 'OK - TULSA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '870'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '700'
                        }
                    }
                },
                '123': {
                    'name': 'OR - EUGENE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '740'
                        }
                    }
                },
                '124': {
                    'name': 'OR - PORTLAND NORTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '720'
                        }
                    }
                },
                '125': {
                    'name': 'OR - PORTLAND SOUTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '730'
                        }
                    }
                },
                '126': {
                    'name': 'OR - WOODBURN',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '730'
                        }
                    }
                },
                '127': {
                    'name': 'PA - ALTOONA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '580'
                        }
                    }
                },
                '128': {
                    'name': 'PA - CHAMBERSBURG',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '570'
                        }
                    }
                },
                '129': {
                    'name': 'PA - HARRISBURG',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '550'
                        }
                    }
                },
                '130': {
                    'name': 'PA - PHILADELPHIA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '420'
                        }
                    }
                },
                '131': {
                    'name': 'PA - PHILADELPHIA EAST',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '420'
                        }
                    }
                },
                '132': {
                    'name': 'PA - PITTSBURGH NORTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '550'
                        }
                    }
                },
                '133': {
                    'name': 'PA - PITTSBURGH SOUTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '580'
                        }
                    }
                },
                '134': {
                    'name': 'PA - SCRANTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '580'
                        }
                    }
                },
                '135': {
                    'name': 'PA - YORK HAVEN',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '580'
                        }
                    }
                },
                '136': {
                    'name': 'SC - COLUMBIA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '840'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '325'
                        }
                    }
                },
                '137': {
                    'name': 'SC - GREER',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '875'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '325'
                        }
                    }
                },
                '138': {
                    'name': 'TN - KNOXVILLE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '860'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '500'
                        }
                    }
                },
                '139': {
                    'name': 'TN - MEMPHIS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '870'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '600'
                        }
                    }
                },
                '140': {
                    'name': 'TN - NASHVILLE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        },
                        '2': {
                            'name': 'GA Georgia',
                            'price': '600'
                        }
                    }
                },
                '141': {
                    'name': 'TX - ABILENE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '600'
                        }
                    }
                },
                '142': {
                    'name': 'TX - AMARILLO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '650'
                        }
                    }
                },
                '143': {
                    'name': 'TX - AUSTIN',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '520'
                        }
                    }
                },
                '144': {
                    'name': 'TX - CORPUS CHRISTI',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '530'
                        }
                    }
                },
                '145': {
                    'name': 'TX - CRASHEDTOYS DALLAS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '980'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '520'
                        }
                    }
                },
                '146': {
                    'name': 'TX - DALLAS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '980'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '520'
                        }
                    }
                },
                '147': {
                    'name': 'TX - DALLAS SOUTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1050'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '520'
                        }
                    }
                },
                '148': {
                    'name': 'TX - EL PASO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '600'
                        }
                    }
                },
                '149': {
                    'name': 'TX - FT. WORTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '510'
                        }
                    }
                },
                '150': {
                    'name': 'TX - HOUSTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '370'
                        }
                    }
                },
                '151': {
                    'name': 'TX - LONGVIEW',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '480'
                        }
                    }
                },
                '152': {
                    'name': 'TX - LUFKIN',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '480'
                        }
                    }
                },
                '153': {
                    'name': 'TX - MCALLEN',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1200'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '480'
                        }
                    }
                },
                '154': {
                    'name': 'TX - SAN ANTONIO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '480'
                        }
                    }
                },
                '155': {
                    'name': 'TX - WACO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'TX Texas',
                            'price': '520'
                        }
                    }
                },
                '156': {
                    'name': 'UT - SALT LAKE CITY',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '750'
                        }
                    }
                },
                '157': {
                    'name': 'VA - DANVILLE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '630'
                        }
                    }
                },
                '158': {
                    'name': 'VA - HAMPTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '630'
                        }
                    }
                },
                '159': {
                    'name': 'VA - RICHMOND',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '650'
                        }
                    }
                },
                '160': {
                    'name': 'VT - FAIR HAVEN',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        }
                    }
                },
                '161': {
                    'name': 'VT - ORLEANS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        }
                    }
                },
                '162': {
                    'name': 'VT - RUTLAND',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        }
                    }
                },
                '163': {
                    'name': 'WA - GRAHAM',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1250'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '780'
                        }
                    }
                },
                '164': {
                    'name': 'WA - NORTH SEATTLE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1450'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '780'
                        }
                    }
                },
                '165': {
                    'name': 'WA - PASCO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '900'
                        }
                    }
                },
                '166': {
                    'name': 'WA - SPOKANE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '930'
                        }
                    }
                },
                '167': {
                    'name': 'WI - MADISON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '970'
                        }
                    }
                },
                '168': {
                    'name': 'WI - MILWAUKEE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '970'
                        }
                    }
                },
                '169': {
                    'name': 'WV - CHARLESTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        }
                    }
                },
                '170': {
                    'name': 'WY - CASPER',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1450'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '1350'
                        }
                    }
                },
                '171': {
                    'name': 'UT - OGDEN',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1350'
                        },
                        '2': {
                            'name': 'CA California',
                            'price': '750'
                        }
                    }
                }
            }
        },
        '2': {
            'name': 'IAAI',
            'countries': {
                '1': {
                    'name': 'AK - ANCHORAGE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '2800'
                        }
                    }
                },
                '2': {
                    'name': 'AL - BIRMINGHAM',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '3': {
                    'name': 'AL - Dothan',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '500'
                        }
                    }
                },
                '4': {
                    'name': 'AL - Huntsville',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '500'
                        }
                    }
                },
                '5': {
                    'name': 'AR - FAYETTEVILLE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '980'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '850'
                        }
                    }
                },
                '6': {
                    'name': 'AR - LITTLE ROCK',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '960'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '850'
                        }
                    }
                },
                '7': {
                    'name': 'AZ - PHOENIX',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1200'
                        },
                        '2': {
                            'name': 'California',
                            'price': '560'
                        }
                    }
                },
                '8': {
                    'name': 'AZ - TUCSON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1200'
                        },
                        '2': {
                            'name': 'California',
                            'price': '650'
                        }
                    }
                },
                '9': {
                    'name': 'CA - Anaheim',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1250'
                        },
                        '2': {
                            'name': 'California',
                            'price': '350'
                        }
                    }
                },
                '10': {
                    'name': 'CA - Colton',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1250'
                        },
                        '2': {
                            'name': 'California',
                            'price': '360'
                        }
                    }
                },
                '11': {
                    'name': 'CA - East Bay',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1250'
                        },
                        '2': {
                            'name': 'California',
                            'price': '520'
                        }
                    }
                },
                '12': {
                    'name': 'CA - Fontana',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1250'
                        },
                        '2': {
                            'name': 'California',
                            'price': '450'
                        }
                    }
                },
                '13': {
                    'name': 'CA - Fremont',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1250'
                        },
                        '2': {
                            'name': 'California',
                            'price': '500'
                        }
                    }
                },
                '14': {
                    'name': 'CA - FRESNO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'California',
                            'price': '500'
                        }
                    }
                },
                '15': {
                    'name': 'CA - High Desert',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'California',
                            'price': '500'
                        }
                    }
                },
                '16': {
                    'name': 'CA - LOS ANGELES',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'California',
                            'price': '480'
                        }
                    }
                },
                '17': {
                    'name': 'CA - North Hollywood',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'California',
                            'price': '480'
                        }
                    }
                },
                '18': {
                    'name': 'CA - SACRAMENTO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'California',
                            'price': '520'
                        }
                    }
                },
                '19': {
                    'name': 'CA - SAN DIEGO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'California',
                            'price': '480'
                        }
                    }
                },
                '20': {
                    'name': 'CO - DENVER',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'California',
                            'price': '850'
                        },
                        '3': {
                            'name': 'Texas',
                            'price': '750'
                        }
                    }
                },
                '21': {
                    'name': 'CO - Denver East',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1000'
                        },
                        '2': {
                            'name': 'California',
                            'price': '780'
                        },
                        '3': {
                            'name': 'Texas',
                            'price': '780'
                        }
                    }
                },
                '22': {
                    'name': 'CO - Western Colorado',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1200'
                        },
                        '2': {
                            'name': 'California',
                            'price': '900'
                        },
                        '3': {
                            'name': 'Texas',
                            'price': '1250'
                        }
                    }
                },
                '23': {
                    'name': 'CT - HARTFORD',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '475'
                        }
                    }
                },
                '24': {
                    'name': 'CT - Hartford-South',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '475'
                        }
                    }
                },
                '25': {
                    'name': 'DE - New Castle',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '510'
                        }
                    }
                },
                '26': {
                    'name': 'FL - Clearwater',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        },
                        '2': {
                            'name': 'Miami',
                            'price': '480'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '530'
                        }
                    }
                },
                '27': {
                    'name': 'FL - Fort Myers',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        },
                        '2': {
                            'name': 'Miami',
                            'price': '500'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '500'
                        }
                    }
                },
                '28': {
                    'name': 'FL - Fort Pierce',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        },
                        '2': {
                            'name': 'Miami',
                            'price': '500'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '500'
                        }
                    }
                },
                '29': {
                    'name': 'FL - JACKSONVILLE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        },
                        '2': {
                            'name': 'Miami',
                            'price': '500'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '475'
                        }
                    }
                },
                '30': {
                    'name': 'FL - Miami',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'Miami',
                            'price': '300'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '550'
                        }
                    }
                },
                '31': {
                    'name': 'FL - MIAMI NORTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'Miami',
                            'price': '300'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '520'
                        }
                    }
                },
                '32': {
                    'name': 'FL - ORLANDO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        },
                        '2': {
                            'name': 'Miami',
                            'price': '400'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '400'
                        }
                    }
                },
                '33': {
                    'name': 'FL - ORLANDO NORTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        },
                        '2': {
                            'name': 'Miami',
                            'price': '400'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '400'
                        }
                    }
                },
                '34': {
                    'name': 'FL - Pensacola',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1000'
                        },
                        '2': {
                            'name': 'Miami',
                            'price': '675'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '675'
                        }
                    }
                },
                '35': {
                    'name': 'FL - TAMPA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        },
                        '2': {
                            'name': 'Miami',
                            'price': '500'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '500'
                        }
                    }
                },
                '36': {
                    'name': 'GA - ATLANTA EAST',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '380'
                        }
                    }
                },
                '37': {
                    'name': 'GA - ATLANTA NORTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '750'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '380'
                        }
                    }
                },
                '38': {
                    'name': 'GA - ATLANTA SOUTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '380'
                        }
                    }
                },
                '39': {
                    'name': 'GA - ATLANTA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '380'
                        }
                    }
                },
                '40': {
                    'name': 'GA - Macon',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '380'
                        }
                    }
                },
                '41': {
                    'name': 'GA - SAVANNAH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '750'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '320'
                        }
                    }
                },
                '42': {
                    'name': 'GA - TIFTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '820'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '400'
                        }
                    }
                },
                '44': {
                    'name': 'IA - DAVENPORT',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '45': {
                    'name': 'IA - DES MOINES',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '46': {
                    'name': 'ID - BOISE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1350'
                        },
                        '2': {
                            'name': 'California',
                            'price': '820'
                        }
                    }
                },
                '47': {
                    'name': 'IL - CHICAGO NORTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '820'
                        }
                    }
                },
                '48': {
                    'name': 'IL - CHICAGO SOUTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '820'
                        }
                    }
                },
                '49': {
                    'name': 'IL - Chicago-West',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '840'
                        }
                    }
                },
                '50': {
                    'name': 'IL - Lincoln',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '51': {
                    'name': 'IL - Specialty Division',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '52': {
                    'name': 'IL - St. Louis',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '840'
                        }
                    }
                },
                '53': {
                    'name': 'IN - INDIANAPOLIS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '54': {
                    'name': 'IN - South Bend',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '55': {
                    'name': 'KS - KANSAS CITY',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '875'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '770'
                        }
                    }
                },
                '56': {
                    'name': 'KS - WICHITA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '875'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '770'
                        }
                    }
                },
                '57': {
                    'name': 'KY - Ashland',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '58': {
                    'name': 'KY - Bowling Green',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '950'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '700'
                        }
                    }
                },
                '59': {
                    'name': 'KY - LOUISVILLE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        }
                    }
                },
                '60': {
                    'name': 'KY - Louisville North',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '61': {
                    'name': 'KY - Paducah',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1000'
                        }
                    }
                },
                '62': {
                    'name': 'LA - BATON ROUGE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '980'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '550'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '600'
                        }
                    }
                },
                '63': {
                    'name': 'LA - Lafayette',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '550'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '520'
                        }
                    }
                },
                '64': {
                    'name': 'LA - NEW ORLEANS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '980'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '520'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '600'
                        }
                    }
                },
                '65': {
                    'name': 'LA - New Orleans East',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '520'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '520'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '600'
                        }
                    }
                },
                '66': {
                    'name': 'LA - SHREVEPORT',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '980'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '520'
                        },
                        '3': {
                            'name': 'Georgia',
                            'price': '650'
                        }
                    }
                },
                '67': {
                    'name': 'MA - Boston - Shirley',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '520'
                        }
                    }
                },
                '68': {
                    'name': 'MA - Taunton',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '520'
                        }
                    }
                },
                '69': {
                    'name': 'MD - BALTIMORE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '520'
                        }
                    }
                },
                '70': {
                    'name': 'MD - Laurel',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '520'
                        }
                    }
                },
                '71': {
                    'name': 'MD - Metro DC',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '520'
                        }
                    }
                },
                '72': {
                    'name': 'MD - Rosedale',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '520'
                        }
                    }
                },
                '73': {
                    'name': 'ME - Portland - Gorham',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '680'
                        }
                    }
                },
                '74': {
                    'name': 'MI - DETROIT',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '790'
                        }
                    }
                },
                '75': {
                    'name': 'MI - Grand Rapids',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '780'
                        }
                    }
                },
                '76': {
                    'name': 'MI - Great Lakes',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        }
                    }
                },
                '77': {
                    'name': 'MN - Minneapolis/St. Paul',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        }
                    }
                },
                '78': {
                    'name': 'MO - SPRINGFIELD',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1200'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '850'
                        }
                    }
                },
                '79': {
                    'name': 'MS - Grenada',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '800'
                        }
                    }
                },
                '80': {
                    'name': 'MS - Gulf Coast',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '700'
                        }
                    }
                },
                '81': {
                    'name': 'MS - JACKSON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '720'
                        }
                    }
                },
                '82': {
                    'name': 'MT - BILLINGS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'California',
                            'price': '1000'
                        }
                    }
                },
                '83': {
                    'name': 'MT - Missoula',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1250'
                        },
                        '2': {
                            'name': 'California',
                            'price': '950'
                        }
                    }
                },
                '84': {
                    'name': 'NC - Asheville',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '650'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '520'
                        }
                    }
                },
                '85': {
                    'name': 'NC - Charlotte',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '700'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '520'
                        }
                    }
                },
                '86': {
                    'name': 'NC - Concord',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '600'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '520'
                        }
                    }
                },
                '87': {
                    'name': 'NC - Greensboro',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '700'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '520'
                        }
                    }
                },
                '88': {
                    'name': 'NC - RALEIGH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '680'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '520'
                        }
                    }
                },
                '89': {
                    'name': 'NC - Wilmington',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '600'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '550'
                        }
                    }
                },
                '90': {
                    'name': 'ND - Fargo',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        }
                    }
                },
                '91': {
                    'name': 'NE - Omaha',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        }
                    }
                },
                '92': {
                    'name': 'NH - Manchester',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '600'
                        }
                    }
                },
                '93': {
                    'name': 'NJ - Avenel New Jersey',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '300'
                        }
                    }
                },
                '94': {
                    'name': 'NJ - Central New Jersey',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '300'
                        }
                    }
                },
                '95': {
                    'name': 'NJ - Northern New Jersey',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '250'
                        }
                    }
                },
                '96': {
                    'name': 'NJ - Southern New Jersey',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '300'
                        }
                    }
                },
                '97': {
                    'name': 'NM - ALBUQUERQUE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1250'
                        },
                        '2': {
                            'name': 'California',
                            'price': '850'
                        },
                        '3': {
                            'name': 'Texas',
                            'price': '830'
                        }
                    }
                },
                '98': {
                    'name': 'NV - LAS VEGAS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'California',
                            'price': '600'
                        }
                    }
                },
                '99': {
                    'name': 'NV - RENO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'California',
                            'price': '600'
                        }
                    }
                },
                '100': {
                    'name': 'NY - ALBANY',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '480'
                        }
                    }
                },
                '101': {
                    'name': 'NY - Buffalo',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '600'
                        }
                    }
                },
                '102': {
                    'name': 'NY - LONG ISLAND',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '420'
                        }
                    }
                },
                '103': {
                    'name': 'NY - NEWBURGH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '390'
                        }
                    }
                },
                '104': {
                    'name': 'NY - ROCHESTER',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '550'
                        }
                    }
                },
                '105': {
                    'name': 'NY - SYRACUSE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '570'
                        }
                    }
                },
                '106': {
                    'name': 'OH - Akron-Canton',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '680'
                        }
                    }
                },
                '107': {
                    'name': 'OH - Cincinnati',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '750'
                        }
                    }
                },
                '108': {
                    'name': 'OH - Cincinnati-South',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '750'
                        }
                    }
                },
                '109': {
                    'name': 'OH - CLEVELAND',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '110': {
                    'name': 'OH - COLUMBUS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '111': {
                    'name': 'OH - DAYTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        }
                    }
                },
                '112': {
                    'name': 'OK - OKLAHOMA CITY',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '750'
                        }
                    }
                },
                '113': {
                    'name': 'OK - TULSA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '870'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '800'
                        }
                    }
                },
                '114': {
                    'name': 'OP - Portland West',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1250'
                        },
                        '2': {
                            'name': 'California',
                            'price': '820'
                        }
                    }
                },
                '115': {
                    'name': 'OR - EUGENE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'California',
                            'price': '840'
                        }
                    }
                },
                '116': {
                    'name': 'OR - PORTLAND',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1250'
                        },
                        '2': {
                            'name': 'California',
                            'price': '820'
                        }
                    }
                },
                '117': {
                    'name': 'PA - ALTOONA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '580'
                        }
                    }
                },
                '118': {
                    'name': 'PA - Bridgeport',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '420'
                        }
                    }
                },
                '119': {
                    'name': 'PA - Erie',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '620'
                        }
                    }
                },
                '120': {
                    'name': 'PA - PHILADELPHIA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '420'
                        }
                    }
                },
                '121': {
                    'name': 'PA - PITTSBURGH NORTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '550'
                        }
                    }
                },
                '122': {
                    'name': 'PA - PITTSBURGH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '620'
                        }
                    }
                },
                '123': {
                    'name': 'PA - SCRANTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '580'
                        }
                    }
                },
                '124': {
                    'name': 'PA - York Springs',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '580'
                        }
                    }
                },
                '125': {
                    'name': 'RI - Providence',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '520'
                        }
                    }
                },
                '126': {
                    'name': 'SC - Charleston',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '350'
                        }
                    }
                },
                '127': {
                    'name': 'SC - COLUMBIA',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '840'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '380'
                        }
                    }
                },
                '128': {
                    'name': 'SC - Greenville',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '850'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '320'
                        }
                    }
                },
                '129': {
                    'name': 'SD - Sioux Falls',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1250'
                        }
                    }
                },
                '130': {
                    'name': 'TN - Chattanooga',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '520'
                        }
                    }
                },
                '131': {
                    'name': 'TN - KNOXVILLE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '860'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '600'
                        }
                    }
                },
                '132': {
                    'name': 'TN - MEMPHIS',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '870'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '600'
                        }
                    }
                },
                '133': {
                    'name': 'TN - NASHVILLE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        },
                        '2': {
                            'name': 'Georgia',
                            'price': '650'
                        }
                    }
                },
                '134': {
                    'name': 'TX - ABILENE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '520'
                        }
                    }
                },
                '135': {
                    'name': 'TX - AMARILLO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '650'
                        }
                    }
                },
                '136': {
                    'name': 'TX - AUSTIN',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '500'
                        }
                    }
                },
                '137': {
                    'name': 'TX - CORPUS CHRISTI',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '500'
                        }
                    }
                },
                '138': {
                    'name': 'TX - EL PASO',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '600'
                        }
                    }
                },
                '139': {
                    'name': 'TX - DALLAS/FT. WORTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '880'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '500'
                        }
                    }
                },
                '140': {
                    'name': 'TX - HOUSTON',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '350'
                        }
                    }
                },
                '141': {
                    'name': 'TX - Houston-North',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '350'
                        }
                    }
                },
                '142': {
                    'name': 'TX - LONGVIEW',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '550'
                        }
                    }
                },
                '143': {
                    'name': 'TX - Lubbock',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1150'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '800'
                        }
                    }
                },
                '144': {
                    'name': 'TX - MCALLEN',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1200'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '550'
                        }
                    }
                },
                '145': {
                    'name': 'TX - Permian Basin',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1150'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '600'
                        }
                    }
                },
                '146': {
                    'name': 'TX - SAN ANTONIO SOUTH',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1100'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '550'
                        }
                    }
                },
                '147': {
                    'name': 'TX - Dallas',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1000'
                        },
                        '2': {
                            'name': 'Texas',
                            'price': '550'
                        }
                    }
                },
                '148': {
                    'name': 'UT - SALT LAKE CITY',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'California',
                            'price': '850'
                        }
                    }
                },
                '149': {
                    'name': 'VA - Culpeper',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '600'
                        }
                    }
                },
                '150': {
                    'name': 'VA - Northern Virginia',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '600'
                        }
                    }
                },
                '151': {
                    'name': 'VA - Pulaski',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '650'
                        }
                    }
                },
                '152': {
                    'name': 'VA - RICHMOND',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '650'
                        }
                    }
                },
                '153': {
                    'name': 'VA - Suffolk',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '700'
                        }
                    }
                },
                '154': {
                    'name': 'VA - Tidewater',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '700'
                        }
                    }
                },
                '155': {
                    'name': 'VT - Burlington',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '700'
                        }
                    }
                },
                '156': {
                    'name': 'WA - Seattle',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'California',
                            'price': '900'
                        }
                    }
                },
                '157': {
                    'name': 'WA - Seattle South',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'California',
                            'price': '900'
                        }
                    }
                },
                '158': {
                    'name': 'WA - SPOKANE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '1300'
                        },
                        '2': {
                            'name': 'California',
                            'price': '900'
                        }
                    }
                },
                '159': {
                    'name': 'WI - Appleton',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        }
                    }
                },
                '160': {
                    'name': 'WI - MILWAUKEE',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '970'
                        }
                    }
                },
                '161': {
                    'name': 'WI - Portage',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        }
                    }
                },
                '162': {
                    'name': 'WV - Buckhannon',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        }
                    }
                },
                '163': {
                    'name': 'WV - Shady Spring',
                    'exit_ports': {
                        '1': {
                            'name': 'NJ New Jersey',
                            'price': '900'
                        }
                    }
                }
            }
        }
    };

    var countries_js = {
        '1': {
            'name': 'Romania',
            'ports': {
                '1': {
                    'name': 'Constanta',
                    'price': '1900'
                }
            }
        },
        '2': {
            'name': 'Lithuania',
            'ports': {
                '1': {
                    'name': 'Klaipeda',
                    'price': '321'
                }
            }
        }
    };

    var auction_inner_html = '<option disabled="disabled" selected="selected">Choose auction</option>';

    $.each(auction_js, function (key, value) {
        auction_inner_html += '<option value="' + key + '">' + value.name + '</option>';
    });

    $('.fast-calculator select.choose-auction').html(auction_inner_html)

    $('.fast-calculator select.choose-auction').on('change', function (e) {
        $('.fast-calculator .ground-rate .rate-price').text('-');
        $('.fast-calculator .ground-rate .rate-price').data('price', '')
        calc_total_price();
        var selected_auction = $(this).find('option:selected').val();
        var location_inner_html = '<option disabled="disabled" selected="selected">Choose location</option>';

        if (auction_js[selected_auction] != 'undefined') {
            $.each(auction_js[selected_auction]['countries'], function (key, value) {
                location_inner_html += '<option value="' + key + '">' + value.name + '</option>';
            });

            $('.fast-calculator select.choose-location').html(location_inner_html);
        }
    });

    $('.fast-calculator select.choose-location').on('change', function (e) {
        $('.fast-calculator .ground-rate .rate-price').text('-');
        $('.fast-calculator .ground-rate .rate-price').data('price', '')
        calc_total_price();
        var selected_auction = $('.fast-calculator select.choose-auction').find('option:selected').val();
        var selected_location = $(this).find('option:selected').val();
        var exit_port_inner_html = '<option disabled="disabled" selected="selected">Select exit port</option>';

        if ((auction_js[selected_auction] != 'undefined') && (auction_js[selected_auction]['countries'][selected_location] != 'undefined')) {
            $.each(auction_js[selected_auction]['countries'][selected_location]['exit_ports'], function (key, value) {
                exit_port_inner_html += '<option value="' + key + '">' + value.name + '</option>';
            });

            $('.fast-calculator select.choose-exit-port').html(exit_port_inner_html);
        }
    });

    $('.fast-calculator select.choose-exit-port').on('change', function (e) {
        var ground_price = '-';
        $('.fast-calculator .ground-rate .rate-price').data('price', '')
        var selected_auction = $('.fast-calculator select.choose-auction').find('option:selected').val();
        var selected_location = $('.fast-calculator select.choose-location').find('option:selected').val();
        var selected_exit_port = $(this).find('option:selected').val();

        if ((auction_js[selected_auction] != 'undefined') && (auction_js[selected_auction]['countries'][selected_location]) && (auction_js[selected_auction]['countries'][selected_location]['exit_ports'][selected_exit_port])) {
            ground_price = '$' + auction_js[selected_auction]['countries'][selected_location]['exit_ports'][selected_exit_port]['price'];
            $('.fast-calculator .ground-rate .rate-price').data('price', auction_js[selected_auction]['countries'][selected_location]['exit_ports'][selected_exit_port]['price'])
        }

        $('.fast-calculator .ground-rate .rate-price').text(ground_price);
        calc_total_price();
    });

    var country_inner_html = '<option disabled="disabled" selected="selected">Select country</option>';

    $.each(countries_js, function (key, value) {
        country_inner_html += '<option value="' + key + '">' + value.name + '</option>';
    });

    $('.fast-calculator select.choose-country').html(country_inner_html);

    $('.fast-calculator select.choose-country').on('change', function (e) {
        $('.fast-calculator .ocean-rate .rate-price').text('-');
        $('.fast-calculator .ocean-rate .rate-price').data('price', '')
        calc_total_price();
        var selected_country = $(this).find('option:selected').val();
        var port_inner_html = '<option disabled="disabled" selected="selected">Select Port/City</option>';

        $.each(countries_js[selected_country]['ports'], function (key, value) {
            port_inner_html += '<option value="' + key + '">' + value.name + '</option>';
        });

        $('.fast-calculator select.choose-port').html(port_inner_html);
    });

    $('.fast-calculator select.choose-port').on('change', function (e) {
        var ocean_price = '-';
        $('.fast-calculator .ocean-rate .rate-price').data('price', '')
        var selected_country = $('.fast-calculator select.choose-country').find('option:selected').val();
        var selected_port = $(this).find('option:selected').val();
        var selected_exit_port = $('.fast-calculator select.choose-exit-port').find('option:selected').text();
        var selected_country_text = $('.fast-calculator select.choose-country').find('option:selected').text()

        if ((selected_exit_port == 'NJ New Jersey') && (selected_country_text == 'Romania')) {
            if ((countries_js[selected_country] != 'undefined') && (countries_js[selected_country]['ports'][selected_port])) {
                ocean_price = '$' + countries_js[selected_country]['ports'][selected_port]['price'];
                $('.fast-calculator .ocean-rate .rate-price').data('price', countries_js[selected_country]['ports'][selected_port]['price']);
            }
        }

        $('.fast-calculator .ocean-rate .rate-price').text(ocean_price);
        calc_total_price();
    });

    function calc_total_price() {
        $('.fast-calculator .total-rate .rate-price').text('-');
        var ground_price = $('.fast-calculator .ground-rate .rate-price').data('price')
        var ocean_price = $('.fast-calculator .ocean-rate .rate-price').data('price')

        if ((ground_price != 'undefined') && (ocean_price != 'undefined') && (ground_price != '') && (ocean_price != '')) {
            var total_price = parseInt(ground_price) + parseInt(ocean_price)
            $('.fast-calculator .total-rate .rate-price').text('$' + total_price);
        }
    }
});