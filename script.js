const FOTO_ANON = "./icons/avatar-anon.png";

const FOTOS = [
  "Benjamín Alexander Vásquez Zolorsa.png",
  "Bárbara Elizabeth González Salazar.png",
  "Cristopher Bastian Jofré Campos.png",
  "Edgardo José Abarca Neira.png",
  "Eduardo David Enrique Naranjo Gutiérrez.png",
  "Graciela Del Carmen Arpe Torres.png",
  "Isabella Esperanza Illanes Arpe.png",
  "José Manuel Illanes Ceballos.png",
  "Julio Anibal Ramírez Soto.png",
  "Mario Alejandro Rossel Poblete.png",
  "Martina Francisca Escalante Cornejo.png",
  "Matias Ignacio Vega Abarca.png",
  "Matías Alejandro Fuentes Martinez.png",
  "Matías Valentín Leyes Campos.png",
  "Nahuel Nicolás Leyes Campos.png",
  "Omar Ramon Ayala Roman.png",
  "Roberto Pablo Illanes Postigo.png",
  "Rosales Sánchez, Héctor Manuel.png",
  "Támara Elizabeth González León.png",
  "Walther Ivaniet Urbina Peña.png",
  "Wladimir Antonio Sepúlveda Fuentes.png",
];

const hermanos = [
  {
    nombre: "Benjamín Alexander Vásquez Zolorsa",
    organizacion: "Primaria - Valientes",
    nacimiento: "21 ene 2017",
    sexo: "Varón",
    telefono: "9 5051 3322",
    correo: "Caritofuentes561@gmail.com",
    direccion: "Lidia González 734 Llolleo, San Antonio\nSan Antonio\nVALPARAÍSO",
    coords: "-33,618904, -71,60485",
    llamamiento: "Sin llamamiento",
    familia: "Carolina Andrea Fuentes Inayao — 29 abr 1991 (35)\nBenjamín Alexander Vásquez Zolorsa — 21 ene 2017 (9)",
  },
  {
    nombre: "Wladimir Antonio Sepúlveda Fuentes",
    organizacion: "Cuórum sacerdocio Aarónico",
    nacimiento: "8 jun 2009",
    sexo: "Varón",
    telefono: "9 2161 1327",
    correo: "Caritofuentes561@gmail.com",
    direccion: "Lidia Gonzales #734 Llolleo\n266000 Llo Lleo\nVALPARAÍSO",
    coords: "-33.6189, -71.60484",
    llamamiento: "Sin llamamiento",
    familia: "Wladimir Antonio Sepulveda Fuentes — Varón (17)",
  },
  {
    nombre: "Matias Ignacio Vega Abarca",
    organizacion: "Escuela Dominical, Quórum de élderes",
    nacimiento: "2 nov 2005",
    sexo: "Varón",
    oficio: "Presbítero",
    telefono: "9 7735 4687",
    correo: "219679890@gmail.com",
    direccion: "1870 Los Cóndores\n2660344 Llo Lleo\nVALPARAÍSO",
    coords: "-33,619923, -71,59591",
    llamamiento: "Sin llamamiento",
    familia: "Isabella e Ignacio",
  },
  {
    nombre: "Martina Francisca Escalante Cornejo",
    organizacion: "Mujeres Jóvenes, Escuela Dominical",
    nacimiento: "24 mar 2011",
    sexo: "Mujer",
    telefono: "9 2932 4923",
    correo: "martina.escalante.co@gmail.com",
    coords: "-33,619087, -71,599434",
    llamamiento: "Sin llamamiento",
    familia: "Martina Francisca Escalante Cornejo — Mujer (15)",
  },
  {
    nombre: "Héctor Manuel Rosales Sanchez",
    organizacion: "Quórum de élderes, Escuela Dominical",
    nacimiento: "3 sep 1973",
    sexo: "Varón",
    oficio: "Presbítero",
    telefono: "9 7774 8796",
    correo: "Hectormanuelrosalez0@gmail.com",
    direccion: "Los Vantros 1061 San Antonio VALPARAÍSO\n266000 Llo Lleo\nVALPARAÍSO",
    coords: "-33.620552, -71.598694",
    llamamiento: "Sin llamamientos",
    familia: "Tamara y Joel",
  },
  {
    nombre: "Mario Alejandro Rossel Poblete",
    sexo: "Varón",
    nacimiento: "15 jul 1981",
    telefono: "9 7940 8276",
    correo: "mrossel154@gmail.com",
    direccion: "Santa Ines 35 Rafael Moreno\n2660000 Santo Domingo\nVALPARAÍSO",
    familia: "Mario Alejandro Rossel Poblete — Varón",
  },
  {
    nombre: "Graciela Del Carmen Arpe Torres",
    sexo: "Mujer",
    nacimiento: "29 sep 1990",
    telefono: "9 5689 9962",
    correo: "graciela.arpe.t@gmail.com",
    direccion: "Los Manantiales 19, Santo Domingo\n2660000 Santo Domingo\nVALPARAÍSO",
    familia: "Graciela del Carmen Arpe Torres — Mujer",
  },
  {
    nombre: "Isabella Esperanza Illanes Arpe",
    sexo: "Mujer",
    nacimiento: "29 mar 2017",
    telefono: "9 9496 0907",
    familia: "Isabella Esperanza Illanes Arpe — Mujer (9)",
  },
  {
    nombre: "José Manuel Illanes Ceballos",
    sexo: "Varón",
    nacimiento: "31 dic 1979",
    telefono: "9 9821 4887",
    correo: "jose@dynamo.cl",
    direccion: "Los Manantiles Parcela 19\n2660000 Santo Domingo\nVALPARAÍSO",
    familia: "José Manuel Illanes Ceballos — Varón",
  },
  {
    nombre: "Roberto Pablo Illanes Postigo",
    sexo: "Varón",
    nacimiento: "14 jun 1947",
    direccion: "2660000 Santo Domingo\nVALPARAÍSO",
    familia: "Roberto Pablo Illanes Postigo — Varón",
  },
  {
    nombre: "María Laura Farias Fuentes",
    sexo: "Mujer",
    nacimiento: "6 feb 2008",
    telefono: "9 9193 6753",
    correo: "lauraaf963@gmail.com",
    direccion: "Horacio Larraín parcela 5, sector 2\n2660000 LloLleo\nVALPARAÍSO",
    familia: "María Laura Farias Fuentes — Mujer",
  },
  {
    nombre: "Matías Alejandro Fuentes Martinez",
    sexo: "Varón",
    nacimiento: "3 sep 2004",
    telefono: "9 8296 5108",
    correo: "fmatias045@gmail.com",
    direccion: "Los Maitenes 41\n2660000 San Antonio\nVALPARAÍSO",
    familia: "Matías Alejandro Fuentes Martinez — Varón",
  },
  {
    nombre: "Matias Valentin Leyes Campos",
    sexo: "Varón",
    nacimiento: "4 mar 2011",
    direccion: "02622 15-27-3988\nLos Halcones 1649\n2660449 San Antonio\nVALPARAÍSO",
    familia: "Matias Valentin Leyes Campos — Varón (15)",
  },
  {
    nombre: "Nahuel Nicolás Leyes Campos",
    sexo: "Varón",
    nacimiento: "26 dic 2007",
    telefono: "02622 57-1879",
    correo: "nahuelcampos089@gmail.com",
    direccion: "Los Halcones 1649\n2660449 San Antonio\nVALPARAÍSO",
    familia: "Nahuel Nicolás Leyes Campos — Varón (18)",
  },
  {
    nombre: "Edgardo Jose Abarca Neira",
    sexo: "Varón",
    nacimiento: "4 ago 1978",
    telefono: "9 7886 1099",
    correo: "edgardoabarca2023@gmail.com",
    direccion: "Las Alpacas 1536\nRafael De La Presa 814\n2660487 San Antonio",
    familia: "Edgardo Jose Abarca Neira — Varón",
  },
  {
    nombre: "Omar Ramon Ayala Roman",
    sexo: "Varón",
    nacimiento: "13 oct 1966",
    telefono: "9 5844 8180",
    correo: "omar.ramon.ayala42@gmail.com",
    direccion: "La Vertiente 49 Santo Domingo\nLa Vertiente Sin Número, Parcela, Santo\n3330000 San Antonio",
    familia: "Omar Ramon Ayala Roman — Varón",
  },
  {
    nombre: "Eduardo David Enrique Naranjo Gutierrez",
    sexo: "Varón",
    nacimiento: "14 jul 2004",
    telefono: "9 3737 2864",
    correo: "eduardonaranjo595@gmail.com",
    direccion: "Los Cóndores 1717\n2660437 San Antonio\nVALPARAÍSO",
    familia: "Eduardo David Enrique Naranjo Gutierrez — Varón",
  },
  {
    nombre: "Alicia Cecilia Meza Pizarro",
    sexo: "Mujer",
    nacimiento: "28 sep 1966",
    telefono: "9 7715 7307",
    correo: "aliciaceciliameza@gmail.com",
    direccion: "VALPARAÍSO",
    familia: "Alicia Cecilia Meza Pizarro — Mujer\nDavid Alejandro Quintanilla Meza — Varón",
  },
  {
    nombre: "Cristopher Bastian Jofré Campos",
    sexo: "Varón",
    nacimiento: "23 abr 1991",
    telefono: "9 6163 9998",
    correo: "cristopherjcampos@gmail.com",
    direccion: "Los Cóndores 1864\n2660000 LloLleo\nVALPARAÍSO",
    familia: "Cristopher Bastian Jofré Campos — Varón",
  },
  {
    nombre: "Barbara Elizabeth Gonzalez Salazar",
    sexo: "Mujer",
    nacimiento: "26 mar 1985",
    telefono: "9 9700 3987",
    direccion: "Los Alerces 2006 Parcela 101 Llolleo\nSan Antonio\nREGIÓN METROPOLITANA",
    familia: "Barbara Elizabeth Gonzalez Salazar — Mujer",
  },
  {
    nombre: "Mateo Ignacio León Silva",
    sexo: "Varón",
    nacimiento: "12 sep 2012",
    telefono: "9 8927 4940",
    direccion: "Aerodromo Poniente\nParcela 68\nSanto Domingo",
    familia: "Hector Ignacio León Pinto — Varón\nMateo Ignacio León Silva — Varón (13)",
  },
  {
    nombre: "Támara Elizabeth Gonzalez Leon",
    sexo: "Mujer",
    nacimiento: "3 ene 1981",
    telefono: "9 6293 0636",
    correo: "Elizabethleon0301@gmail.com",
    direccion: "Los Vantros 1061\nSan Antonio\nLlo Lleo",
    familia: "Támara Elizabeth Gonzalez Leon — Mujer",
  },
  {
    nombre: "Julio Anibal Ramírez Soto",
    sexo: "Varón",
    nacimiento: "2 feb 1969",
    telefono: "9 6670 3077",
    direccion: "Madre selva 103\nPob. Maitenes II\nSan Antonio , Santo Dgo.",
    familia: "Julio Anibal Ramírez Soto — Varón",
  },
  {
    nombre: "Walther Ivaniet Urbina Peña",
    sexo: "Varón",
    nacimiento: "11 jun 1989",
    telefono: "9 5905 1253",
    correo: "wurbina22211@gmail.com",
    direccion: "arturo phillips 89\nllolleo\nsan antonio",
    familia: "Walther Ivaniet Urbina Peña — Varón",
  },
  {
    nombre: "Fernando Alonso Cerda Poblete",
    sexo: "Varón",
    nacimiento: "26 ago 2005",
    telefono: "9 6648 0250",
    correo: "fernandoalonzo@gmail.com",
    familia: "Fernando Alonso Cerda Poblete — Varón",
  },
  {
    nombre: "Hector Ignacio León Pinto",
    sexo: "Varón",
    nacimiento: "10 ene 1965",
    telefono: "9 9345 7055",
    direccion: "Aerodromo Poniente\nParcela 68\nSanto Domingo",
    familia: "Hector Ignacio León Pinto — Varón\nMateo Ignacio León Silva — Varón (13)",
  },
  {
    nombre: "Yoel Alejandro Córdova González",
    sexo: "Varón",
    nacimiento: "24 ago 2001",
    telefono: "9 4975 2671",
    correo: "Yoelcordova2408@gmail.com",
    direccion: "Los Vantros 1061\nSan Antonio\nVALPARAÍSO",
    familia: "Yoel Alejandro Córdova González — Varón",
  },
  {
    nombre: "Tomas Alejandro Cortez Daza",
    sexo: "Varón",
    nacimiento: "2 jun 2017",
    telefono: "9 6138 9801",
    direccion: "El Sauce 1501\nSan Antonio\nLlo-Lleo",
    familia: "Nancy del Carmen Varas Nitor — Mujer\nTomas Alejandro Cortez Daza — Varón (9)",
  },
  {
    nombre: "Gabriela Soledad Contreras Zuñiga",
    sexo: "Mujer",
    nacimiento: "2 jun 1970",
    telefono: "9 6537 9570",
    correo: "gabrielasoledadcontreraszuniga@gmail.com",
    direccion: "Pasaje Uno , N° 671\nSan Antonio\nVALPARAÍSO",
    familia: "Gabriela Soledad Contreras Zuñiga — Mujer\nDavid Francisco Flores Contreras — Varón",
  },
  {
    nombre: "Josefa Paz Diaz Jeria",
    sexo: "Mujer",
    nacimiento: "27 dic 2010",
    telefono: "9 2639 0279",
    direccion: "Los Espinos 915\nLlolleo\nSan Antonio",
    familia: "Josefa Paz Diaz Jeria — Mujer (15)",
  },
  {
    nombre: "Felipe Esteban Pinto Jauregui",
    sexo: "Varón",
    nacimiento: "3 dic 2013",
    direccion: "Llolleo\nSan Antonio",
    familia: "Felipe Esteban Pinto Jauregui — Varón (12)",
  },
  {
    nombre: "José Miguel Diaz Muñoz",
    sexo: "Varón",
    nacimiento: "17 ago 1961",
    telefono: "9 5943 2931",
    direccion: "las rocas 120\nsan antonio\nlsanto domingo",
    familia: "José Miguel Diaz Muñoz — Varón",
  },
  {
    nombre: "Thiare Andrea Donoso Vilches",
    sexo: "Mujer",
    nacimiento: "7 ago 2006",
    telefono: "9 3051 9836",
    direccion: "El Sauce 1741\nPoblacion Campiña 1\nSan Antonio",
    familia: "Claudia Maricel Vilches Arenas — Mujer\nThiare Andrea Donoso Vilches — Mujer\nDominique Dayanet Donoso Vilches — Mujer (10)",
  },
  {
    nombre: "Dominique Dayanet Donoso Vilches",
    sexo: "Mujer",
    nacimiento: "5 mayo 2016",
    telefono: "9 3051 9836",
    direccion: "El Sauce 1741\nPoblacion Campiña 1\nSan Antonio",
    familia: "Claudia Maricel Vilches Arenas — Mujer\nThiare Andrea Donoso Vilches — Mujer\nDominique Dayanet Donoso Vilches — Mujer (10)",
  },
  {
    nombre: "Claudia Maricel Vilches Arenas",
    sexo: "Mujer",
    nacimiento: "4 mayo 1982",
    telefono: "9 3051 9836",
    direccion: "El Sauce 1741\nPoblacion Campiña 1\nSan Antonio",
    familia: "Claudia Maricel Vilches Arenas — Mujer\nThiare Andrea Donoso Vilches — Mujer\nDominique Dayanet Donoso Vilches — Mujer (10)",
  },
  {
    nombre: "Pedro Leon Walker Ramirez",
    sexo: "Varón",
    nacimiento: "3 nov 2004",
    telefono: "9 2380 3709",
    correo: "walkerleon444@gmail.com",
    direccion: "los espinos 150\nRocas de Santo Domingo\nSan Antonio",
    familia: "Pedro Leon Walker Ramirez — Varón",
  },
  {
    nombre: "David Francisco Flores Contreras",
    sexo: "Varón",
    nacimiento: "20 jul 1994",
    telefono: "9 9860 3392",
    correo: "davidflorescontreras20@gmail.com",
    direccion: "Pasaje Uno , N° 671\nSan Antonio\nVALPARAÍSO",
    familia: "Gabriela Soledad Contreras Zuñiga — Mujer\nDavid Francisco Flores Contreras — Varón",
  },
  {
    nombre: "Nancy Del Carmen Varas Nitor",
    sexo: "Mujer",
    nacimiento: "11 sep 1949",
    telefono: "9 6138 9801",
    direccion: "El Sauce 1501\nSan Antonio\nLlo-Lleo",
    familia: "Nancy del Carmen Varas Nitor — Mujer\nTomas Alejandro Cortez Daza — Varón (9)",
  },
  {
    nombre: "Pascuala Blanca Arratia Zambrano",
    sexo: "Mujer",
    nacimiento: "24 dic 1955",
    telefono: "9 9948 3691",
    correo: "arratiazambranopaz@gmail.com",
    direccion: "Jason 1603 Viuda Llo Lleo\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Carlos Fernando Soto Godoy — Varón\nPascuala Blanca Arratia Zambrano — Mujer",
  },
  {
    nombre: "Javiera Antonia Núñez Pineda",
    sexo: "Mujer",
    nacimiento: "28 dic 2009",
    correo: "javieranunez843@gmail.com",
    direccion: "san antonio\njason 1614\nsan antonio",
    familia: "Javiera Antonia Núñez Pineda — Mujer (16)",
  },
  {
    nombre: "Rosa del Carmen Pardo Basaure",
    sexo: "Mujer",
    nacimiento: "15 mar 1978",
    telefono: "9 7350 1505",
    correo: "rosicollins7@gmail.com",
    direccion: "parinacota 1933\nviuda 10\nsan antonio , llo lleo",
    familia: "Rosa del Carmen Pardo Basaure — Mujer",
  },
  {
    nombre: "Hernan Enrique Aravena Martínez",
    sexo: "Varón",
    nacimiento: "25 feb 1968",
    telefono: "9 7724 4826",
    correo: "Catalinaaravena95@gmail.com",
    direccion: "san antonio\nLos Helechos 41\nSanto Domingo",
    familia: "Hernan Enrique Aravena Martínez — Varón\nPilar de Lourdes Toro Pontigo — Mujer\nCatalina Ignacia Aravena Toro — Mujer",
  },
  {
    nombre: "Catalina Ignacia Aravena Toro",
    sexo: "Mujer",
    nacimiento: "25 abr 2003",
    telefono: "9 7345 1521",
    direccion: "san antonio\nLos Helechos 41\nSanto Domingo",
    familia: "Hernan Enrique Aravena Martínez — Varón\nPilar de Lourdes Toro Pontigo — Mujer\nCatalina Ignacia Aravena Toro — Mujer",
  },
  {
    nombre: "Carlos Fernando Soto Godoy",
    sexo: "Varón",
    nacimiento: "2 dic 1960",
    telefono: "9 9080 4157",
    correo: "proyecta.sanantonio@gmail.com",
    direccion: "Jason 1603 Viuda Llo Lleo\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Carlos Fernando Soto Godoy — Varón\nPascuala Blanca Arratia Zambrano — Mujer",
  },
  {
    nombre: "Pilar De Lourdes Toro Pontigo",
    sexo: "Mujer",
    nacimiento: "11 feb 1971",
    telefono: "9 9149 6534",
    correo: "catalinaaravena95@gmail.com",
    direccion: "san antonio\nLos Helechos 41\nSanto Domingo",
    familia: "Hernan Enrique Aravena Martínez — Varón\nPilar de Lourdes Toro Pontigo — Mujer\nCatalina Ignacia Aravena Toro — Mujer",
  },
  {
    nombre: "Alejandro Luis Castro Silva",
    sexo: "Varón",
    nacimiento: "5 dic 1968",
    telefono: "9 4851 1203",
    correo: "laca.atala832@gmail.com",
    direccion: "los Halcones esquina Baquedano s/ n°\nSan Antonio , llolleo\nVALPARAÍSO",
    familia: "Alejandro Luis Castro Silva — Varón",
  },
  {
    nombre: "Camilo Andrés Farias Ortega",
    sexo: "Varón",
    nacimiento: "15 ago 1975",
    telefono: "9 9079 1316",
    direccion: "el convento\nsan antonio\nVALPARAÍSO",
    familia: "Camilo Andrés Farias Ortega — Varón",
  },
  {
    nombre: "Manuel Antonio Pailamilla Abarza",
    sexo: "Varón",
    nacimiento: "31 oct 1960",
    telefono: "9 5611 2013",
    correo: "manuelpailamilla.38@gmail.com",
    direccion: "CALLE LLO LLEO 129\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Manuel Antonio Pailamilla Abarza — Varón",
  },
  {
    nombre: "Juan Eduardo Acevedo Mendoza",
    sexo: "Varón",
    nacimiento: "17 nov 1985",
    telefono: "9 7946 5500",
    correo: "sniper_m4t6@hotmail.com",
    direccion: "Las Alpacas 1767\nsan antonio , llo-lleo\nVALPARAÍSO",
    familia: "Juan Eduardo Acevedo Mendoza — Varón",
  },
  {
    nombre: "Silvia Del Carmen Delgado Abarzua",
    sexo: "Mujer",
    nacimiento: "13 dic 1954",
    telefono: "9 9013 5168",
    direccion: "Las Vizcachas 1426\nSan antonio\nVALPARAÍSO",
    familia: "Silvia del Carmen Delgado Abarzua — Mujer",
  },
  {
    nombre: "Isidora Ignacia Riquelme Jofre",
    sexo: "Mujer",
    nacimiento: "6 jul 2009",
    correo: "isi.riquelme.jo@gmail.com",
    telefono: "9 6525 6965",
    direccion: "PASA JE LOS HELECHOS 27\n2720000 SANTO DOMINGO\nVALPARAÍSO",
    familia: "Felipe Ignacio Riquelme Cornejo — Varón\nAndrea Jaqueline Jofre Aravena — Mujer\nIsidora Ignacia Riquelme Jofre — Mujer (17)",
  },
  {
    nombre: "Nicolas Gabriel Hauser Rogget",
    sexo: "Varón",
    nacimiento: "26 ene 2004",
    telefono: "9 2779 0572",
    correo: "nicolashauser2004@gmail.com",
    direccion: "Parcela 137, Sector La Media Luna,\nEl Convento, Santo Domingo\nsan antonio",
    familia: "Nicolas Gabriel Hauser Rogget — Varón",
  },
  {
    nombre: "Felipe Octavio Caceres Olivera",
    sexo: "Varón",
    nacimiento: "2 mar 2015",
    direccion: "San Antonio\nVALPARAÍSO",
    familia: "Silvia Georgina Olivera Delgado — Mujer\nIgnacio Juan Caceres Olivera — Varón\nFelipe Octavio Caceres Olivera — Varón (11)",
  },
  {
    nombre: "Andres Felipe Erazo Salgado",
    sexo: "Varón",
    nacimiento: "4 dic 1999",
    telefono: "9 3281 0061",
    direccion: "539 Larraín Gandarillas\n2660752 San Antonio\nVALPARAÍSO",
    familia: "Andres Felipe Erazo Salgado — Varón",
  },
  {
    nombre: "Abel del Transito Meza Toro",
    sexo: "Varón",
    nacimiento: "1 nov 1948",
    direccion: "SAN ANTONIO\nVALPARAÍSO",
    familia: "Abel del Transito Meza Toro — Varón\nCristina del Carmen de Meza Soto — Mujer",
  },
  {
    nombre: "Agustin Facundo Flores Martinez",
    sexo: "Varón",
    nacimiento: "7 ene 2014",
    telefono: "(35) 236 7135",
    direccion: "Miguel Hernández 837\nSan Antonio\nVALPARAÍSO",
    familia: "Mauricio Fernando Flores Rojas — Varón\nMaritza Viviana Martinez de Flores — Mujer\nAgustin Facundo Flores Martinez — Varón (12)\nCarlos Horacio Flores Martínez — Varón (10)\nFlores Martinez Consuelo Rosario — Mujer (8)",
  },
  {
    nombre: "Agustin Javier Ignacio Berrios Berrios",
    sexo: "Varón",
    nacimiento: "13 sep 2007",
    direccion: "calle el sauce , san antonio\nsan antonio\nVALPARAÍSO",
    familia: "Paulina de los Angeles Berrios Meza — Mujer\nAgustin Javier Ignacio Berrios Berrios — Varón (18)",
  },
  {
    nombre: "Ahiza Lía Pizarro Hernández",
    sexo: "Mujer",
    nacimiento: "25 dic 2009",
    telefono: "9 7809 3231",
    direccion: "Los Espinos 939\nsan antonio\nVALPARAÍSO",
    familia: "Bernarda Cristina Hernandez Fuentes — Mujer\nAhiza Lía Pizarro Hernández — Mujer (16)\nFélix Francisco Julian Pizarro Hernández — Varón (14)",
  },
  {
    nombre: "Alejandro Alberto Sanchez Celis",
    sexo: "Varón",
    nacimiento: "30 ene 1992",
    telefono: "9897771781",
    direccion: "Los Condores 1620\nSan Antonio\nVALPARAÍSO",
    familia: "Marta Irene Celis Gongora — Mujer\nAlejandro Alberto Sanchez Celis — Varón",
  },
  {
    nombre: "Alejandro Ignacio Bugueño Hormazábal",
    sexo: "Varón",
    nacimiento: "19 nov 1995",
    telefono: "64927811",
    direccion: "Ginebra 1901\nLlo Lleo\nSan Antonio",
    familia: "Margarita Elizabeth de Bugueño Hormazabal — Mujer\nAlejandro Ignacio Bugueño Hormazabal — Varón",
  },
  {
    nombre: "Alfredo Elias Mondaca Riveros",
    sexo: "Varón",
    nacimiento: "31 ago 1968",
    telefono: "91538658",
    correo: "gen_io@hotmail.com",
    direccion: "El Sauce 711 ,Llo-lleo\nSan Antonio\nVALPARAÍSO",
    familia: "Alfredo Elias Mondaca Riveros — Varón",
  },
  {
    nombre: "Alicia del Carmen de Peña Jerez",
    sexo: "Mujer",
    nacimiento: "19 dic 1964",
    telefono: "9 5774 2342",
    correo: "a.valeskavasquez.o@gmail.com",
    direccion: "Los Algarrobos 1065\nLlo Lleo Alto\nSan Antonio, Chile",
    familia: "Alicia del Carmen de Peña Jerez — Mujer",
  },
  {
    nombre: "Alina Yolanda de Soto Gazul",
    sexo: "Mujer",
    nacimiento: "5 nov 1965",
    telefono: "9 3080 1220",
    correo: "mundophp68@gmail.com",
    direccion: "LOS CONDORES 1876\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Jose Miguel Soto Soto — Varón\nAlina Yolanda de Soto Gazul — Mujer\nJose Miguel Soto Gazul — Varón\nFernando Andres Soto Gazul — Varón",
  },
  {
    nombre: "Alvaro Alejandro Claudio Da Viá Campbell",
    sexo: "Varón",
    nacimiento: "25 ago 1979",
    telefono: "9 8817 2378",
    correo: "alvaro_2846@hotmail.com",
    direccion: "Socoroma 1875, viuda 10\nSan Antonio\nVALPARAÍSO",
    familia: "Alvaro Alejandro Claudio Da Viá Campbell — Varón\nRomina Rubio Luna — Mujer\nFrancesco Alejandro Da-Via Rubio — Varón (4)\nDa Via Rubio Lucas Maximiliano — Varón (3)",
  },
  {
    nombre: "Amanda Carolina Castillo Silva",
    sexo: "Mujer",
    nacimiento: "20 oct 2011",
    telefono: "9 9820 2164",
    direccion: "santo domingo\n0520000 San Antonio\nVALPARAÍSO",
    familia: "Eduardo Alberto Castillo Fuentes — Varón\nPaola Andrea de Castillo Silva — Mujer\nPilar Catherine Castillo Silva — Mujer (17)\nAmanda Carolina Castillo Silva — Mujer (14)\nAndrea Eloísa Castillo Silva — Mujer (12)",
  },
  {
    nombre: "Ana Maria Vicencio Munita",
    sexo: "Mujer",
    nacimiento: "24 oct 1947",
    direccion: "Camino Las Salinas\nParcelación 58, Lote 67\nSanto Domingo",
    familia: "Carlos Ivan Cárdenas Sanchez — Varón\nBernarda de Lourdes Cárdenas Sanchez — Mujer\nAna Maria Vicencio Munita — Mujer\nThiago Cárdenas Zenteno — Mujer",
  },
  {
    nombre: "Andrea Eloísa Castillo Silva",
    sexo: "Mujer",
    nacimiento: "23 oct 2013",
    telefono: "9 9820 2164",
    direccion: "santo domingo\n0520000 San Antonio\nVALPARAÍSO",
    familia: "Eduardo Alberto Castillo Fuentes — Varón\nPaola Andrea de Castillo Silva — Mujer\nPilar Catherine Castillo Silva — Mujer (17)\nAmanda Carolina Castillo Silva — Mujer (14)\nAndrea Eloísa Castillo Silva — Mujer (12)",
  },
  {
    nombre: "Andrea Francisca de Fuentes Molina",
    sexo: "Mujer",
    nacimiento: "30 nov 1974",
    telefono: "2114181",
    direccion: "Los Limites 1262\nLlo Lleo\n2660000 San Antonio",
    familia: "Wilhermina Francisca de Molina Zuñiga — Mujer\nAndrea Francisca de Fuentes Molina — Mujer",
  },
  {
    nombre: "Andrea Jaqueline Jofre Aravena",
    sexo: "Mujer",
    nacimiento: "13 ago 1992",
    telefono: "9 6525 6965",
    correo: "Jofre.aravena.an@gmail.com",
    direccion: "PASA JE LOS HELECHOS 27\n2720000 SANTO DOMINGO\nVALPARAÍSO",
    familia: "Felipe Ignacio Riquelme Cornejo — Varón\nAndrea Jaqueline Jofre Aravena — Mujer\nIsidora Ignacia Riquelme Jofre — Mujer (17)",
  },
  {
    nombre: "Andres Rolando Gonzalez Salazar",
    sexo: "Varón",
    nacimiento: "23 sep 1947",
    direccion: "San Antonio\nVALPARAÍSO",
    familia: "Andres Rolando Gonzalez Salazar — Varón",
  },
  {
    nombre: "Angelica de las Nieves Naranjo Gallardo",
    sexo: "Mujer",
    nacimiento: "13 nov 1976",
    direccion: "LAS PERDISES 1775\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Segundo Andres Naranjo Alvarez — Varón\nGloria Virginia de Naranjo Gallardo — Mujer\nAngelica de las Nieves Naranjo Gallardo — Mujer",
  },
  {
    nombre: "Antonia Pascal Torres Silva",
    sexo: "Mujer",
    nacimiento: "24 dic 2011",
    direccion: "San Antonio\nVALPARAÍSO",
    familia: "Evelyn Romina Silva Aguilar — Mujer\nAntonia Pascal Torres Silva — Mujer (14)",
  },
  {
    nombre: "Barbara de las Mercedes Santis Figueroa",
    sexo: "Mujer",
    nacimiento: "28 ene 1992",
    telefono: "035289483",
    direccion: "SOCOROMA 1959\nLLO-LLEO\nSAN ANTONIO",
    familia: "ELIANA de las MERCEDES FIGUEROA BERRIOS — Mujer\nBARBARA de las MERCEDES SANTIS FIGUEROA — Mujer",
  },
  {
    nombre: "Bernarda Cristina Hernandez Fuentes",
    sexo: "Mujer",
    nacimiento: "14 ago 1990",
    telefono: "9 5764 8833",
    correo: "berny.hernandez@gmail.com",
    direccion: "Los Espinos 939\nsan antonio\nVALPARAÍSO",
    familia: "Bernarda Cristina Hernandez Fuentes — Mujer\nAhiza Lía Pizarro Hernández — Mujer (16)\nFélix Francisco Julian Pizarro Hernández — Varón (14)",
  },
  {
    nombre: "Bernarda de Lourdes Cardenas Zenteno",
    sexo: "Mujer",
    nacimiento: "4 ago 1976",
    telefono: "9 6433 3199",
    correo: "bernarda76zenteno@gmail.com",
    direccion: "Camino Las Salinas\nParcelación 58, Lote 67\nSanto Domingo",
    familia: "Carlos Ivan Cárdenas Sanchez — Varón\nBernarda de Lourdes Cardenas Zenteno — Mujer\nAna Maria Vicencio Munita — Mujer\nThiago Cárdenas Zenteno — Mujer",
  },
  {
    nombre: "Byron Broderyk Oroz Ravanal",
    sexo: "Varón",
    nacimiento: "4 ago 1999",
    direccion: "Camino rapel kilometro 4\nParcela 3 el convento\nSanto domingo",
    familia: "Byron Broderyk Oroz Ravanal — Varón",
  },
  {
    nombre: "Camila Fernanda Farias Alvarez",
    sexo: "Mujer",
    nacimiento: "29 nov 1988",
    telefono: "9 8767 1422",
    correo: "camiferal@hotmail.com",
    direccion: "Av. Cristo Rey 787\nLlolleo\nSan Antonio",
    familia: "Camila Fernanda Farias Alvarez — Mujer\nMateo Alonso Bustos Farias — Varón (12)\nIsabella Aurora Bustos Farias — Mujer (10)",
  },
  {
    nombre: "Carla Belen Fajardo Lara",
    sexo: "Mujer",
    nacimiento: "6 nov 2000",
    direccion: "VALPARAÍSO",
    familia: "Teresita del Carmen de Fajardo Lara — Mujer\nNicolas Rodrigo Fajardo Lara — Varón\nCarla Belen Fajardo Lara — Mujer",
  },
  {
    nombre: "Carla Belén Oroz Ravanal",
    sexo: "Mujer",
    nacimiento: "3 ene 2012",
    telefono: "035369133",
    direccion: "Camino Rapel Kilometro 4, Parcela 3\nEl Convento Santo Domingo\nSan Antonio",
    familia: "Juan Carlos Oroz Caceres — Varón\nCarla Belén Oroz Ravanal — Mujer (14)\nFrancisca Fernanda Oroz Ravanal — Mujer (13)",
  },
  {
    nombre: "Carlos Francisco Martinez Martinez",
    sexo: "Varón",
    nacimiento: "21 mar 1994",
    direccion: "San Antonio\nVALPARAÍSO",
    familia: "Carlos Francisco Martinez Martinez — Varón",
  },
  {
    nombre: "Carlos Horacio Flores Martínez",
    sexo: "Varón",
    nacimiento: "24 sep 2015",
    telefono: "9 8295 1847",
    direccion: "Miguel Hernández 837\nSan Antonio\nVALPARAÍSO",
    familia: "Mauricio Fernando Flores Rojas — Varón\nMaritza Viviana Martinez de Flores — Mujer\nAgustin Facundo Flores Martinez — Varón (12)\nCarlos Horacio Flores Martínez — Varón (10)\nFlores Martinez Consuelo Rosario — Mujer (8)",
  },
  {
    nombre: "Carlos Ivan Cárdenas Sanchez",
    sexo: "Varón",
    nacimiento: "26 ene 1973",
    direccion: "Camino Las Salinas\nParcelación 58, Lote 67\nSanto Domingo",
    familia: "Carlos Ivan Cárdenas Sanchez — Varón\nBernarda de Lourdes Cárdenas Sanchez — Mujer\nAna Maria Vicencio Munita — Mujer\nThiago Cárdenas Zenteno — Mujer",
  },
  {
    nombre: "Carlos Samuel Contreras Gaona",
    sexo: "Varón",
    nacimiento: "22 oct 2000",
    direccion: "San Antonio",
    familia: "Carlos Samuel Contreras Gaona — Varón\nMaría Alejandra Gaona Quintanilla — Mujer",
  },
  {
    nombre: "Carmen Gloria Tapia Melendez",
    sexo: "Mujer",
    nacimiento: "16 jul 1967",
    direccion: "Parcela 17 camino a Campo Alegre Santo D\nValparaiso San Antonio\n2720000 San Antonio Valparaiso",
    familia: "Carmen Gloria Tapia Melendez — Mujer",
  },
  {
    nombre: "Carolina Andrea Fuentes Inayao",
    sexo: "Mujer",
    nacimiento: "29 abr 1991",
    direccion: "Lidia Gonzalez 734 Llolleo, San Antonio\nSan Antonio\nVALPARAÍSO",
    familia: "Carolina Andrea Fuentes Inayao — Mujer\nBenjamin Alexander Vasquez Zolorsa — Varón (9)",
  },
  {
    nombre: "Caroline Pallan Rojas Koneffke",
    sexo: "Mujer",
    nacimiento: "29 oct 1985",
    direccion: "VALPARAÍSO",
    familia: "Caroline Pallan Rojas Koneffke — Mujer",
  },
  {
    nombre: "Catalina Belen Gana Luna",
    sexo: "Mujer",
    nacimiento: "16 feb 1989",
    telefono: "87137032",
    correo: "cataganaluna@gmail.com",
    direccion: "Los Romeros 1832\nSan Antonio\nVALPARAÍSO",
    familia: "Rene Alberto Gana Gatica — Varón\nSilvana del Carmen de Gana Luna — Mujer\nRene Axel Gana Luna — Varón\nCatalina Belen Gana Luna — Mujer\nGustavo Adolfo Gana Luna — Varón",
  },
  {
    nombre: "Catherine Estrella de Carrasco Felix",
    sexo: "Mujer",
    nacimiento: "11 dic 1973",
    correo: "cathyfv@gmail.com",
    telefono: "9 8512 7587",
    direccion: "Los Lingues 1122, torre 8, dpto 303\n0520000 San Antonio\nVALPARAÍSO",
    familia: "Ivan Marcelo Carrasco Carrasco — Varón\nCatherine Estrella de Carrasco Felix — Mujer\nMayte Belen Carrasco Felix — Mujer\nIvan Lev-Aaron Carrasco Felix — Varón",
  },
  {
    nombre: "Cesar Aaron Miranda Cabello",
    sexo: "Varón",
    nacimiento: "15 sep 1985",
    telefono: "9 6141 6040",
    correo: "cesarm.sud@gmail.com",
    direccion: "Av. Cristo Rey 1012\nSan Antonio\nVALPARAÍSO",
    familia: "Cesar Aaron Miranda Cabello — Varón\nLaura Elizabeth de Miranda Acevedo — Mujer\nIgnacio Aaron Miranda Acevedo — Varón (15)\nDiego Aaron Miranda Acevedo — Varón (11)\nGonzalo Aaron Miranda Acevedo — Varón (7)\nNicolás Aaron Miranda Acevedo — Varón (4)",
  },
  {
    nombre: "Cesar Alejandro Contreras Toro",
    sexo: "Varón",
    nacimiento: "29 mar 1966",
    telefono: "9 8368 9145",
    direccion: "Pje. El Estero 250 Lo Gallardo\nLlolleo\nSAN ANTONIO",
    familia: "Cesar Alejandro Contreras Toro — Varón",
  },
  {
    nombre: "César Antonio Chavez Figueroa",
    sexo: "Varón",
    nacimiento: "26 feb 1975",
    telefono: "9 5518 3228",
    correo: "bercalion@hotmail.com",
    direccion: "Rafael De La Presa 576\nsan antonio\nVALPARAÍSO",
    familia: "Cesar Antonio Chavez Figueroa — Varón",
  },
  {
    nombre: "Clemira Ester Gonzalez Gonzalez",
    sexo: "Mujer",
    nacimiento: "21 dic 1974",
    telefono: "81712096",
    direccion: "Av San Juan 4610\nSan Antonio\nVALPARAÍSO",
    familia: "Clemira Ester Gonzalez Gonzalez — Mujer\nGerardo Andres Quijada Gonzalez — Varón\nJesus Antonio Quijada Gonzalez — Varón",
  },
  {
    nombre: "Constanza Alexandra Arce Vidal",
    sexo: "Mujer",
    nacimiento: "16 jun 1997",
    telefono: "9 9241 3505",
    correo: "coni16_amiguiss@hotmail.com",
    direccion: "La Vertiente 42 Los Maitenes Santo Domin\nVALPARAÍSO",
    familia: "Constanza Alexandra Arce Vidal — Mujer",
  },
  {
    nombre: "Constanza Antonia Astorga Hernandez",
    sexo: "Mujer",
    nacimiento: "20 jun 2009",
    correo: "cony.anto.2023@gmail.com",
    telefono: "9 7632 5132",
    direccion: "Los Alces 1405\nSan Antonio\nVALPARAÍSO",
    familia: "Victor Orlando Acevedo Nacaratte — Varón\nNancy de Lourdes de Acevedo Rojas — Mujer\nYasna Karen Hernandez Rojas — Mujer\nConstanza Antonia Astorga Hernandez — Mujer (17)",
  },
  {
    nombre: "Cristian Alexander Cortez Benavente",
    sexo: "Varón",
    nacimiento: "22 sep 2013",
    telefono: "9 6511 0607",
    direccion: "Las Vertientes, Pasaje El Sauce 12\nSan Antonio\nVALPARAÍSO",
    familia: "Cristian Alexander Cortez Benavente — Varón (12)",
  },
  {
    nombre: "Cristian Ignacio Ampuero Ampuero",
    sexo: "Varón",
    nacimiento: "21 oct 1974",
    telefono: "9 7567 9989",
    correo: "campuero33@gmail.com",
    direccion: "fundo la princesa\n26000000 santo domingo\nVALPARAÍSO",
    familia: "Cristian Ignacio Ampuero Ampuero — Varón",
  },
  {
    nombre: "Cristian Pablo Ortega Silva",
    sexo: "Varón",
    nacimiento: "9 nov 1987",
    direccion: "San Antonio\nVALPARAÍSO",
    familia: "Cristian Pablo Ortega Silva — Varón",
  },
  {
    nombre: "Cristina del Carmen de Meza Soto",
    sexo: "Mujer",
    nacimiento: "1 dic 1953",
    direccion: "SAN ANTONIO\nVALPARAÍSO",
    familia: "Abel del Transito Meza Toro — Varón\nCristina del Carmen de Meza Soto — Mujer",
  },
  {
    nombre: "Da Via Rubio Lucas Maximiliano",
    sexo: "Varón",
    nacimiento: "31 mayo 2023",
    telefono: "9 8817 2378",
    direccion: "Socoroma 1875, viuda 10\nSan Antonio\nVALPARAÍSO",
    familia: "Alvaro Alejandro Claudio Da Viá Campbell — Varón\nRomina Rubio Luna — Mujer\nFrancesco Alejandro Da-Via Rubio — Varón (4)\nDa Via Rubio Lucas Maximiliano — Varón (3)",
  },
  {
    nombre: "Dafnhe Monserrat Echaniz Maripangui",
    sexo: "Mujer",
    nacimiento: "11 dic 2003",
    correo: "yoongichiquibaby37@gmail.com",
    telefono: "9 8696 3235",
    direccion: "Las Vertientes, Pasaje El Sauce 04\nSan Antonio\nVALPARAÍSO",
    familia: "Melissa Andrea Maripangui Vidal — Mujer\nMaria Enriqueta Vidal Diaz — Mujer\nDafnhe Monserrat Echaniz Maripangui — Mujer\nYhanela Danaee Echaniz Maripangui — Mujer\nIan Aaron Cobarrubia Maripangui — Varón (14)\nYeiko Leon Cobarrubia Maripangui — Varón (12)",
  },
  {
    nombre: "Daniel Andres Delgado Atenas",
    sexo: "Varón",
    nacimiento: "20 mar 1986",
    telefono: "9 9946 8464",
    direccion: "Larrain Gandarillas 1147\nSan Antonio",
    familia: "Daniel Andres Delgado Atenas — Varón\nDiego Cristobal Delgado Atenas — Varón",
  },
  {
    nombre: "Daniel Ignacio Wilches Martinez",
    sexo: "Varón",
    nacimiento: "8 nov 2001",
    telefono: "9 8584 7923",
    correo: "Daniel.wilches001@gmail.com",
    direccion: "Los Alerces 1026\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Leonardo Nelson Wilches Santibañez — Varón\nEugenia Margarita de Wilches Martinez — Mujer\nDaniel Ignacio Wilches Martinez — Varón",
  },
  {
    nombre: "Daniela Beatriz Jeria Nuñez",
    sexo: "Mujer",
    nacimiento: "21 ene 1986",
    direccion: "San Antonio\nVALPARAÍSO",
    familia: "Daniela Beatriz Jeria Nuñez — Mujer",
  },
  {
    nombre: "Daniela Francisca Vera Trincado",
    sexo: "Mujer",
    nacimiento: "22 dic 1985",
    direccion: "Llo-Lleo\nSan Antonio",
    familia: "Daniela Francisca Vera Trincado — Mujer",
  },
  {
    nombre: "David Alejandro Quintanilla Meza",
    sexo: "Varón",
    nacimiento: "22 mar 2005",
    telefono: "9 3261 5152",
    correo: "davidquintanillabmxing@gmail.com",
    direccion: "VALPARAÍSO",
    familia: "Alicia Cecilia Meza Pizarro — Mujer\nDavid Alejandro Quintanilla Meza — Varón",
  },
  {
    nombre: "David Joel Ramos Torres",
    sexo: "Varón",
    nacimiento: "31 oct 1998",
    direccion: "Convento, Parcela 17\nSanto Domingo",
    familia: "David Joel Ramos Torres — Varón",
  },
  {
    nombre: "Diego Aaron Miranda Acevedo",
    sexo: "Varón",
    nacimiento: "6 nov 2014",
    telefono: "9 6141 6040",
    direccion: "Av. Cristo Rey 1012\nSan Antonio\nVALPARAÍSO",
    familia: "Cesar Aaron Miranda Cabello — Varón\nLaura Elizabeth de Miranda Acevedo — Mujer\nIgnacio Aaron Miranda Acevedo — Varón (15)\nDiego Aaron Miranda Acevedo — Varón (11)\nGonzalo Aaron Miranda Acevedo — Varón (7)\nNicolás Aaron Miranda Acevedo — Varón (4)",
  },
  {
    nombre: "Diego Cristobal Delgado Atenas",
    sexo: "Varón",
    nacimiento: "20 mar 1991",
    telefono: "9 9946 8464",
    direccion: "Larrain Gandarillas 1147\nSan Antonio",
    familia: "Daniel Andres Delgado Atenas — Varón\nDiego Cristobal Delgado Atenas — Varón",
  },
  {
    nombre: "Eduardo Alberto Castillo Fuentes",
    sexo: "Varón",
    nacimiento: "23 mayo 1975",
    telefono: "9 9820 2164",
    correo: "educastifue@gmail.com",
    direccion: "santo domingo\n0520000 San Antonio\nVALPARAÍSO",
    familia: "Eduardo Alberto Castillo Fuentes — Varón\nPaola Andrea de Castillo Silva — Mujer\nPilar Catherine Castillo Silva — Mujer (17)\nAmanda Carolina Castillo Silva — Mujer (14)\nAndrea Eloísa Castillo Silva — Mujer (12)",
  },
  {
    nombre: "Eliana de las Mercedes Figueroa Berrios",
    sexo: "Mujer",
    nacimiento: "6 jul 1967",
    telefono: "035289483",
    direccion: "SOCOROMA 1959\nLLO-LLEO\nSAN ANTONIO",
    familia: "ELIANA de las MERCEDES FIGUEROA BERRIOS — Mujer\nBARBARA de las MERCEDES SANTIS FIGUEROA — Mujer",
  },
  {
    nombre: "Elias Benjamin Torres Jimenez",
    sexo: "Varón",
    nacimiento: "2 sep 2021",
    telefono: "9 3073 0796",
    direccion: "LOS CUERVOS 969\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Jesus Alberto Torres Benavente — Varón\nMaria Cristina Jimenez Ramirez — Mujer\nJoaquin Ignacio Torres Jimenez — Varón (13)\nElias Benjamin Torres Jimenez — Varón (4)",
  },
  {
    nombre: "Eliette Belen Martez Hernadez",
    sexo: "Mujer",
    nacimiento: "11 feb 2016",
    telefono: "9 4214 2771",
    direccion: "CAMINO A EL CONVENTO 22\n2720000 SANTO DOMINGO\nVALPARAÍSO",
    familia: "Marjorie Andrea Hernández Arellano — Mujer\nEliette Belen Martez Hernadez — Mujer (10)",
  },
  {
    nombre: "Elizabeth Macarena Jeria Zuñiga",
    sexo: "Mujer",
    nacimiento: "31 dic 1964",
    telefono: "9 5979 4446",
    direccion: "Arturo Phillips\nSanto Domingo\nVALPARAÍSO",
    familia: "Elizabeth Macarena Jeria Zuñiga — Mujer",
  },
  {
    nombre: "Elvira del Carmen Nuñez Ureta",
    sexo: "Mujer",
    nacimiento: "15 jul 1948",
    telefono: "9 3485 7455",
    direccion: "Miguel Hernandez 786\nPob. El Retiro\nSan Antonio",
    familia: "Elvira del Carmen Nuñez Ureta — Mujer",
  },
  {
    nombre: "Ema Beatriz Soto Zuñiga",
    sexo: "Mujer",
    nacimiento: "29 oct 1962",
    telefono: "9 7879 7760",
    correo: "ema_beatriz@yahoo.es",
    direccion: "Las Torcazas 831\nSan Antonio",
    familia: "Manuel Jesus Ampuero Montes — Varón\nEma Beatriz Soto Zuñiga — Mujer\nManuel Ignacio Ampuero Soto — Varón",
  },
  {
    nombre: "Emilia Monzerat Hernandez Jara",
    sexo: "Mujer",
    nacimiento: "15 nov 2009",
    telefono: "(35) 229 2947",
    direccion: "Llo Lleo, V Region",
    familia: "Juan Carlos las Torcazas — Varón\nEmilia Monzerat Hernandez Jara — Mujer (16)",
  },
  {
    nombre: "Emma Maritza de Pineda Urra",
    sexo: "Mujer",
    nacimiento: "5 mayo 1964",
    direccion: "a pedido del secretario del barrio\nSan Antonio\nVALPARAÍSO",
    familia: "Sergio Enrique Pineda Soto — Varón\nEmma Maritza de Pineda Urra — Mujer",
  },
  {
    nombre: "Ernesto Ulises Rodriguez Medel",
    sexo: "Varón",
    nacimiento: "28 jul 1933",
    familia: "Ernesto Ulises Rodriguez Medel — Varón",
  },
  {
    nombre: "Esteban Advis Jara",
    sexo: "Varón",
    nacimiento: "18 sep 1988",
    telefono: "6071280",
    direccion: "AVENIDA DEL LITORAL 335\n2720000 SANTO DOMINGO\nREGIÓN METROPOLITANA",
    familia: "Esteban Advis Jara — Varón",
  },
  {
    nombre: "Eugenia Margarita de Wilches Martinez",
    sexo: "Mujer",
    nacimiento: "18 feb 1967",
    telefono: "9 8394 5768",
    correo: "eugeniamartinez452@gmail.com",
    direccion: "Los Alerces 1026\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Leonardo Nelson Wilches Santibañez — Varón\nEugenia Margarita de Wilches Martinez — Mujer\nDaniel Ignacio Wilches Martinez — Varón",
  },
  {
    nombre: "Evelyn Romina Silva Aguilar",
    sexo: "Mujer",
    nacimiento: "26 dic 1990",
    correo: "eve_1569_6@hotmail.com",
    direccion: "San Antonio\nVALPARAÍSO",
    familia: "Evelyn Romina Silva Aguilar — Mujer\nAntonia Pascal Torres Silva — Mujer (14)",
  },
  {
    nombre: "Evelyn Susana Riquelme Cuevas",
    sexo: "Mujer",
    nacimiento: "30 jul 1981",
    telefono: "096685507",
    correo: "evelyn_sai@hotmail.com",
    direccion: "Psj. El Rosal 125,\nSanto Domingo\nSan Antonio",
    familia: "Evelyn Susana Riquelme Cuevas — Mujer",
  },
  {
    nombre: "Felipe Ignacio Riquelme Cornejo",
    sexo: "Varón",
    nacimiento: "17 jun 1992",
    telefono: "9 5003 0352",
    correo: "riquelme.felipe.18@gmail.com",
    direccion: "PASA JE LOS HELECHOS 27\n2720000 SANTO DOMINGO\nVALPARAÍSO",
    familia: "Felipe Ignacio Riquelme Cornejo — Varón\nAndrea Jaqueline Jofre Aravena — Mujer\nIsidora Ignacia Riquelme Jofre — Mujer (17)",
  },
  {
    nombre: "Felipe Osvaldo Cortez Vera",
    sexo: "Varón",
    nacimiento: "29 mar 1988",
    correo: "cortezvera@gmail.com",
    direccion: "Llolleo\nSan antonio",
    familia: "Felipe Osvaldo Cortez Vera — Varón\nSarah Nazaret Lassaube Lopez — Mujer\nSebastian Antonio Mori Lassaube — Varón\nLuis Martin Lassaube Lassaube — Varón",
  },
  {
    nombre: "Félix Francisco Julian Pizarro Hernández",
    sexo: "Varón",
    nacimiento: "27 sep 2011",
    telefono: "9 5764 8833",
    direccion: "Los Espinos 939\nsan antonio\nVALPARAÍSO",
    familia: "Bernarda Cristina Hernandez Fuentes — Mujer\nAhiza Lía Pizarro Hernández — Mujer (16)\nFélix Francisco Julian Pizarro Hernández — Varón (14)",
  },
  {
    nombre: "Fernanda Belen Meza Soto",
    sexo: "Mujer",
    nacimiento: "3 jun 1999",
    telefono: "9 7278 9605",
    correo: "mezafernanda07@gmail.com",
    direccion: "Las Hortencias 46\nSanto Domingo\nVALPARAÍSO",
    familia: "Juan Antonio Meza Meza — Varón\nMargarita del Pilar de Meza Soto — Mujer\nFernanda Belen Meza Soto — Mujer",
  },
  {
    nombre: "Fernando Andres Soto Gazul",
    sexo: "Varón",
    nacimiento: "24 sep 1991",
    telefono: "9 8546 7687",
    correo: "eldersoto1876@hotmail.com",
    direccion: "LOS CONDORES 1876\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Jose Miguel Soto Soto — Varón\nAlina Yolanda de Soto Gazul — Mujer\nJose Miguel Soto Gazul — Varón\nFernando Andres Soto Gazul — Varón",
  },
  {
    nombre: "Fernando Antonio Cerda Paredes",
    sexo: "Varón",
    nacimiento: "24 feb 1986",
    direccion: "Santa Elba 26\nPoblacion Rafael Moreno\n1 Santo Domingo",
    familia: "Ulises Gonzalo Cerda Paredes — Varón\nFernando Antonio Cerda Paredes — Varón",
  },
  {
    nombre: "Flores Martinez Consuelo Rosario",
    sexo: "Mujer",
    nacimiento: "23 nov 2017",
    telefono: "9 8295 1847",
    direccion: "Miguel Hernández 837\nSan Antonio\nVALPARAÍSO",
    familia: "Mauricio Fernando Flores Rojas — Varón\nMaritza Viviana Martinez de Flores — Mujer\nAgustin Facundo Flores Martinez — Varón (12)\nCarlos Horacio Flores Martínez — Varón (10)\nFlores Martinez Consuelo Rosario — Mujer (8)",
  },
  {
    nombre: "Francesco Alejandro Da-via Rubio",
    sexo: "Varón",
    nacimiento: "21 oct 2021",
    telefono: "9 8817 2378",
    direccion: "Socoroma 1875, viuda 10\nSan Antonio\nVALPARAÍSO",
    familia: "Alvaro Alejandro Claudio Da Viá Campbell — Varón\nRomina Rubio Luna — Mujer\nFrancesco Alejandro Da-Via Rubio — Varón (4)\nDa Via Rubio Lucas Maximiliano — Varón (3)",
  },
  {
    nombre: "Francisca Fernanda Oroz Ravanal",
    sexo: "Mujer",
    nacimiento: "25 jul 2013",
    telefono: "035369133",
    direccion: "Camino Rapel Kilometro 4, Parcela 3\nEl Convento Santo Domingo\nSan Antonio",
    familia: "Juan Carlos Oroz Caceres — Varón\nCarla Belén Oroz Ravanal — Mujer (14)\nFrancisca Fernanda Oroz Ravanal — Mujer (13)",
  },
  {
    nombre: "Fredy Felipe Silva Osorio",
    sexo: "Varón",
    nacimiento: "19 feb 1990",
    direccion: "VALPARAÍSO",
    familia: "Fredy Felipe Silva Osorio — Varón",
  },
  {
    nombre: "Gabriela Evelyn Vargas Soto",
    sexo: "Mujer",
    nacimiento: "7 ene 1991",
    direccion: "San Antonio",
    familia: "Gabriela Evelyn Vargas Soto — Mujer",
  },
  {
    nombre: "Gaspar Emilio Cofre Hernández",
    sexo: "Varón",
    nacimiento: "9 jul 2010",
    telefono: "9 4569 4346",
    correo: "martezgaspar015@gmail.com",
    direccion: "Camino Lo Gallardo 1610, San Antonio Val\nVALPARAISO\nProvincia de PANAMÁ",
    familia: "Gaspar Emilio Cofre Hernández — Varón (16)",
  },
  {
    nombre: "Gerardo Andres Aburto Velasquez",
    sexo: "Varón",
    nacimiento: "29 mar 1983",
    telefono: "9 9840 9340",
    correo: "gmonry@gmail.com",
    direccion: "salinas del convento, parcela 160 g\nSanto Domingo\nSantodomingo",
    familia: "Gerardo Andres Aburto Velasquez — Varón",
  },
  {
    nombre: "Gerardo Andres Quijada Gonzalez",
    sexo: "Varón",
    nacimiento: "29 oct 1992",
    telefono: "98959684",
    direccion: "Av San Juan 4610\nSan Antonio\nVALPARAÍSO",
    familia: "Clemira Ester Gonzalez Gonzalez — Mujer\nGerardo Andres Quijada Gonzalez — Varón\nJesus Antonio Quijada Gonzalez — Varón",
  },
  {
    nombre: "Gladys de las Mercedes Vera Diaz",
    sexo: "Mujer",
    nacimiento: "8 feb 1960",
    direccion: "Av. Chile /718 Llo Lleo\nSan Antonio\nVALPARAÍSO",
    familia: "Gladys de las Mercedes de Vera Diaz — Mujer",
  },
  {
    nombre: "Gladys del Carmen Zuñiga Castillo",
    sexo: "Mujer",
    nacimiento: "31 mayo 1938",
    telefono: "2878706",
    direccion: "56959794446\nArturo Phillips\nSanto Domingo",
    familia: "Gladys del Carmen Zuñiga Castillo — Mujer",
  },
  {
    nombre: "Gloria Virginia de Naranjo Gallardo",
    sexo: "Mujer",
    nacimiento: "14 oct 1948",
    direccion: "LAS PERDISES 1775\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Segundo Andres Naranjo Alvarez — Varón\nGloria Virginia de Naranjo Gallardo — Mujer\nAngelica de las Nieves Naranjo Gallardo — Mujer",
  },
  {
    nombre: "Gonzalo Aaron Miranda Acevedo",
    sexo: "Varón",
    nacimiento: "30 ago 2018",
    telefono: "9 6141 6040",
    direccion: "Av. Cristo Rey 1012\nSan Antonio\nVALPARAÍSO",
    familia: "Cesar Aaron Miranda Cabello — Varón\nLaura Elizabeth de Miranda Acevedo — Mujer\nIgnacio Aaron Miranda Acevedo — Varón (15)\nDiego Aaron Miranda Acevedo — Varón (11)\nGonzalo Aaron Miranda Acevedo — Varón (7)\nNicolás Aaron Miranda Acevedo — Varón (4)",
  },
  {
    nombre: "Graciela Rosa Cáceres Monarde",
    sexo: "Mujer",
    nacimiento: "26 feb 1945",
    telefono: "9 9705 5123",
    direccion: "PASA JE EL CONVENTO 4\n2660000 SAN ANTONIO\nVALPARAÍSO",
    familia: "Graciela Rosa Cáceres Monarde — Mujer",
  },
  {
    nombre: "Gustavo Adolfo Gana Luna",
    sexo: "Varón",
    nacimiento: "11 mar 2001",
    correo: "Gustavo.gana.luna@missionary.org",
    direccion: "Los Romeros 1832\nSan Antonio\nVALPARAÍSO",
    familia: "Rene Alberto Gana Gatica — Varón\nSilvana del Carmen de Gana Luna — Mujer\nRene Axel Gana Luna — Varón\nCatalina Belen Gana Luna — Mujer\nGustavo Adolfo Gana Luna — Varón",
  },
  {
    nombre: "Hector Rigoberto Rocha Corral",
    sexo: "Varón",
    nacimiento: "14 oct 1958",
    telefono: "9 6195 9823",
    direccion: "Pasaje Las Loycas 1751\nSan Antonio\nLlolleo",
    familia: "Hector Rigoberto Rocha Corral — Varón",
  },
  {
    nombre: "Ian Aaron Cobarrubia Maripangui",
    sexo: "Varón",
    nacimiento: "2 mar 2012",
    telefono: "9 8696 3235",
    direccion: "Las Vertientes, Pasaje El Sauce 04\nSan Antonio\nVALPARAÍSO",
    familia: "Melissa Andrea Maripangui Vidal — Mujer\nMaria Enriqueta Vidal Diaz — Mujer\nDafnhe Monserrat Echaniz Maripangui — Mujer\nYhanela Danaee Echaniz Maripangui — Mujer\nIan Aaron Cobarrubia Maripangui — Varón (14)\nYeiko Leon Cobarrubia Maripangui — Varón (12)",
  },
  {
    nombre: "Ignacio Aaron Miranda Acevedo",
    sexo: "Varón",
    nacimiento: "31 oct 2010",
    telefono: "9 3959 3582",
    correo: "chubacan3@gmail.com",
    direccion: "Av. Cristo Rey 1012\nSan Antonio\nVALPARAÍSO",
    familia: "Cesar Aaron Miranda Cabello — Varón\nLaura Elizabeth de Miranda Acevedo — Mujer\nIgnacio Aaron Miranda Acevedo — Varón (15)\nDiego Aaron Miranda Acevedo — Varón (11)\nGonzalo Aaron Miranda Acevedo — Varón (7)\nNicolás Aaron Miranda Acevedo — Varón (4)",
  },
  {
    nombre: "Ignacio Alberto Vega Badilla",
    sexo: "Varón",
    nacimiento: "15 dic 1979",
    direccion: "Campiña 2, Llolleo\nSan Antonio",
    familia: "Ignacio Alberto Vega Badilla — Varón",
  },
  {
    nombre: "Ignacio Juan Caceres Olivera",
    sexo: "Varón",
    nacimiento: "6 sep 2005",
    telefono: "9 9877 8056",
    direccion: "San Antonio\nVALPARAÍSO",
    familia: "Silvia Georgina Olivera Delgado — Mujer\nIgnacio Juan Caceres Olivera — Varón\nFelipe Octavio Caceres Olivera — Varón (11)",
  },
  {
    nombre: "Iris del Pilar Duque Caceres",
    sexo: "Mujer",
    nacimiento: "28 ago 1960",
    correo: "Pilipilipili1960@gmail.com",
    direccion: "Cristo Rey 986\nLlo Lleo\nSan Antonio",
    familia: "Iris del Pilar Duque Caceres — Mujer",
  },
  {
    nombre: "Irma de las Mercedes Jara Rojas",
    sexo: "Mujer",
    nacimiento: "7 dic 1971",
    direccion: "SAN ANTONIO",
    familia: "Irma de las Mercedes Jara Rojas — Mujer",
  },
  {
    nombre: "Isabella Aurora Bustos Farias",
    sexo: "Mujer",
    nacimiento: "9 dic 2015",
    telefono: "9 8767 1422",
    direccion: "Av. Cristo Rey 787\nLlolleo\nSan Antonio",
    familia: "Camila Fernanda Farias Alvarez — Mujer\nMateo Alonso Bustos Farias — Varón (12)\nIsabella Aurora Bustos Farias — Mujer (10)",
  },
  {
    nombre: "Isabella Selenne Acevedo Labrin",
    sexo: "Mujer",
    nacimiento: "16 jun 2017",
    correo: "valejandroa@gmail.com",
    telefono: "9 7562 9326",
    direccion: "Los Alces 1405\nLlolleo\n0 San Antonio",
    familia: "Victor Alejandro Acevedo Rojas — Varón\nIsabella Selenne Acevedo Labrin — Mujer (9)",
  },
  {
    nombre: "Ivan Lev-Aaron Carrasco Felix",
    sexo: "Varón",
    nacimiento: "9 dic 2003",
    telefono: "9 7920 5681",
    correo: "felixcarrascoivan@gmail.com",
    direccion: "Los Lingues 1122, torre 8, dpto 303\n0520000 San Antonio\nVALPARAÍSO",
    familia: "Ivan Marcelo Carrasco Carrasco — Varón\nCatherine Estrella de Carrasco Felix — Mujer\nMayte Belen Carrasco Felix — Mujer\nIvan Lev-Aaron Carrasco Felix — Varón",
  },
  {
    nombre: "Ivan Marcelo Carrasco Carrasco",
    sexo: "Varón",
    nacimiento: "19 ago 1968",
    telefono: "9 8512 7587",
    correo: "ivanmarcelosud@gmail.com",
    direccion: "Los Lingues 1122, torre 8, dpto 303\n0520000 San Antonio\nVALPARAÍSO",
    familia: "Ivan Marcelo Carrasco Carrasco — Varón\nCatherine Estrella de Carrasco Felix — Mujer\nMayte Belen Carrasco Felix — Mujer\nIvan Lev-Aaron Carrasco Felix — Varón",
  },
  {
    nombre: "Javiera Beatriz Vidal Basso",
    sexo: "Mujer",
    nacimiento: "1 feb 2000",
    telefono: "77319797",
    direccion: "El Sauce 941\nLlo Lleo\nSan Antonio",
    familia: "Javiera Beatriz Vidal Basso — Mujer",
  },
  {
    nombre: "Jennifer Odette Ravanal Echeverria",
    sexo: "Mujer",
    nacimiento: "18 mayo 1976",
    telefono: "63137902",
    correo: "jenravanalecheverria@gmail.com",
    direccion: "Camino rapel kilometro 4\nParcela 3 el convento\nSanto domingo",
    familia: "Jennifer Odette Ravanal Echeverria — Mujer\nTreacy Scarlett Oroz Ravanal — Mujer",
  },
  {
    nombre: "Jesus Alberto Torres Benavente",
    sexo: "Varón",
    nacimiento: "27 feb 1978",
    telefono: "9 3073 0796",
    correo: "JTORRES70916@HOTMAIL.COM",
    direccion: "LOS CUERVOS 969\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Jesus Alberto Torres Benavente — Varón\nMaria Cristina Jimenez Ramirez — Mujer\nJoaquin Ignacio Torres Jimenez — Varón (13)\nElias Benjamin Torres Jimenez — Varón (4)",
  },
  {
    nombre: "Jesus Antonio Quijada Gonzalez",
    sexo: "Varón",
    nacimiento: "19 abr 2002",
    telefono: "98959684",
    direccion: "Av San Juan 4610\nSan Antonio\nVALPARAÍSO",
    familia: "Clemira Ester Gonzalez Gonzalez — Mujer\nGerardo Andres Quijada Gonzalez — Varón\nJesus Antonio Quijada Gonzalez — Varón",
  },
  {
    nombre: "Jhon Alexander Sandoval Basulto",
    sexo: "Varón",
    nacimiento: "25 dic 2003",
    telefono: "9 3451 1629",
    correo: "alex.887sandoval@gmail.com",
    direccion: "Los Alerces 45 (Pasaje 1)\nSanto Domingo\nSan Antonio",
    familia: "Jhon Alexander Sandoval Basulto — Varón",
  },
  {
    nombre: "Joaquin Ignacio Torres Jimenez",
    sexo: "Varón",
    nacimiento: "5 ago 2013",
    correo: "joaquintorresjimenez0@gmail.com",
    telefono: "9 3073 0796",
    direccion: "LOS CUERVOS 969\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Jesus Alberto Torres Benavente — Varón\nMaria Cristina Jimenez Ramirez — Mujer\nJoaquin Ignacio Torres Jimenez — Varón (13)\nElias Benjamin Torres Jimenez — Varón (4)",
  },
  {
    nombre: "Jorge Armando Guerrero Ortega",
    sexo: "Varón",
    nacimiento: "26 feb 1970",
    telefono: "9 2231 8982",
    direccion: "Los Algarrobos 1079 Pob Los Alerces Llol\nsan antonio\nVALPARAÍSO",
    familia: "Jorge Armando Guerrero Ortega — Varón",
  },
  {
    nombre: "Jorge Jose Vera Delgado",
    sexo: "Varón",
    nacimiento: "9 mayo 1962",
    telefono: "9 4888 3286",
    direccion: "5417 Camino A las Casas de San Juan\nSan Juan, Llolleo San Antonio\n2663507 San Juan de Llolleo",
    familia: "Jorge Jose Vera Delgado — Varón",
  },
  {
    nombre: "Jose Fernando Antonio Santacana Salinas",
    sexo: "Varón",
    nacimiento: "31 ago 1958",
    telefono: "9 6227 1467",
    direccion: "LAS CAMELIAS 6\nSanto Domingo\nSAN ANTONIO",
    familia: "Jose Fernando Antonio Santacana Salinas — Varón",
  },
  {
    nombre: "José Ignacio Cartagena Meza",
    sexo: "Varón",
    nacimiento: "17 feb 2021",
    telefono: "9 4279 3823",
    direccion: "Las Torcazas N°576\nLlolleo\nSan Antonio",
    familia: "Roxanna Soledad Meza Morales — Mujer\nLuz Eliana Paillamil Meza — Mujer\nLaura Agustina de Jesus Parraguez Meza — Mujer (15)\nJosé Ignacio Cartagena Meza — Varón (5)",
  },
  {
    nombre: "Jose Javier Castro Torres",
    sexo: "Varón",
    nacimiento: "20 mayo 1994",
    telefono: "9 9509 0173",
    correo: "javier_146_sc@hotmail.com",
    direccion: "ALBERTO LLONA 15 80\nMAIPU\nVALPARAÍSO",
    familia: "Jose Javier Castro Torres — Varón",
  },
  {
    nombre: "Jose Miguel Soto Gazul",
    sexo: "Varón",
    nacimiento: "21 mar 1990",
    telefono: "9 5968 9285",
    correo: "josesotolda@hotmail.com",
    direccion: "LOS CONDORES 1876\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Jose Miguel Soto Soto — Varón\nAlina Yolanda de Soto Gazul — Mujer\nJose Miguel Soto Gazul — Varón\nFernando Andres Soto Gazul — Varón",
  },
  {
    nombre: "Jose Miguel Soto Soto",
    sexo: "Varón",
    nacimiento: "25 dic 1970",
    telefono: "9 6869 5978",
    correo: "eldersoto1876@hotmail.com",
    direccion: "LOS CONDORES 1876\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Jose Miguel Soto Soto — Varón\nAlina Yolanda de Soto Gazul — Mujer\nJose Miguel Soto Gazul — Varón\nFernando Andres Soto Gazul — Varón",
  },
  {
    nombre: "Juan Antonio Meza Meza",
    sexo: "Varón",
    nacimiento: "19 jul 1966",
    telefono: "9 4163 8971",
    correo: "jmeza.sud@hotmail.com",
    direccion: "Las Hortencias 46\nSanto Domingo\nVALPARAÍSO",
    familia: "Juan Antonio Meza Meza — Varón\nMargarita del Pilar de Meza Soto — Mujer\nFernanda Belen Meza Soto — Mujer",
  },
  {
    nombre: "Juan Carlos Armijo Acevedo",
    sexo: "Varón",
    nacimiento: "26 ago 1969",
    telefono: "9 8282 0288",
    direccion: "Central 1568 Viuda Vi Llo Lleo\nSan Antonio\nVALPARAÍSO",
    familia: "Juan Carlos Armijo Acevedo — Varón\nJuanita Ester Ugarte Herrera — Mujer",
  },
  {
    nombre: "Juan Carlos Caceres Martinez",
    sexo: "Varón",
    nacimiento: "13 abr 1974",
    telefono: "9 6277 6934",
    correo: "j.carloscaceres111@gmail.com",
    direccion: "Pasaje victoria 1026\nsan antonio\nVALPARAÍSO",
    familia: "Juan Carlos Caceres Martinez — Varón",
  },
  {
    nombre: "Juan Carlos Hernandez Donoso",
    sexo: "Varón",
    nacimiento: "14 ago 1965",
    telefono: "83438225",
    familia: "Juan Carlos Hernandez Donoso",
  },
  {
    nombre: "Juan Carlos Oroz Caceres",
    sexo: "Varón",
    nacimiento: "10 abr 1972",
    telefono: "035369133",
    direccion: "Camino Rapel Kilometro 4, Parcela 3\nEl Convento Santo Domingo\nSan Antonio",
    familia: "Juan Carlos Oroz Caceres — Varón\nCarla Belén Oroz Ravanal — Mujer (14)\nFrancisca Fernanda Oroz Ravanal — Mujer (13)",
  },
  {
    nombre: "Juan Carlos Taborga Navia",
    sexo: "Varón",
    nacimiento: "15 mayo 1957",
    telefono: "9 5049 0392",
    direccion: "AV CRISTO REY 1006\nLlolleo\nSAN ANTONIO",
    familia: "Juan Carlos Taborga Navia — Varón\nNora del Carmen Riquelme Inostroza — Mujer",
  },
  {
    nombre: "Juan Carlos Zuñiga Lisboa",
    sexo: "Varón",
    nacimiento: "27 dic 1971",
    direccion: "El Sauce 955 Llo-Lleo\nsan antonio\nVALPARAÍSO",
    familia: "Juan Carlos Zuñiga Lisboa — Varón",
  },
  {
    nombre: "Juan Francisco Bravo Golling",
    sexo: "Varón",
    nacimiento: "15 nov 1965",
    telefono: "9 4408 4806",
    correo: "ravioleslanona@gmail.com",
    direccion: "Los Abedules 1094\nPoblacion Baquedano\nSan Antonio",
    familia: "Juan Francisco Bravo Golling — Varón",
  },
  {
    nombre: "Juan Francisco Vera Pavez",
    sexo: "Varón",
    nacimiento: "2 ene 1954",
    telefono: "66027715",
    direccion: "Los Abedules 1094\nPoblacion Baquedano\nSan antonio",
    familia: "Juan Francisco Vera Pavez — Varón",
  },
  {
    nombre: "Juan Manuel Martinez Castillo",
    sexo: "Varón",
    nacimiento: "1 ago 1957",
    direccion: "Llo-lleo\nVALPARAÍSO",
    familia: "Juan Manuel Martinez Castillo — Varón",
  },
  {
    nombre: "Juan Pablo Enrique Avendaño Avendaño",
    sexo: "Varón",
    nacimiento: "30 abr 2003",
    telefono: "9 3520 1901",
    correo: "juanpablo.avendano04@gmail.com",
    direccion: "Los Alerces 1032\nsan antonio\nVALPARAÍSO",
    familia: "Juan Pablo Enrique Avendaño Avendaño — Varón",
  },
  {
    nombre: "Juanita Ester Ugarte Herrera",
    sexo: "Mujer",
    nacimiento: "31 jul 1992",
    telefono: "9 8282 0288",
    direccion: "Central 1568 Viuda Vi Llo Lleo\nSan Antonio\nVALPARAÍSO",
    familia: "Juan Carlos Armijo Acevedo — Varón\nJuanita Ester Ugarte Herrera — Mujer",
  },
  {
    nombre: "Julieta Ignacia Soto Velásquez",
    sexo: "Mujer",
    nacimiento: "14 dic 2017",
    telefono: "035585409",
    direccion: "El Sauce 1384\nSan Antonio\nVALPARAÍSO",
    familia: "Oscar Ignacio Soto Soto — Varón\nMaria Jose Velasquez Contreras — Mujer\nJulieta Ignacia Soto Velásquez — Mujer (8)",
  },
  {
    nombre: "Julio Alberto Farias Menares",
    sexo: "Varón",
    nacimiento: "16 mar 1937",
    telefono: "2281252",
    correo: "camiferal@hotmail.com",
    direccion: "Cristo Rey 787\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Julio Alberto Farias Menares — Varón",
  },
  {
    nombre: "Karen Andrea Diaz Fuenzalida",
    sexo: "Mujer",
    nacimiento: "7 ene 1983",
    direccion: "Sauce 1589\nSAN ANTONIO\nVALPARAÍSO",
    familia: "KAREN ANDREA DIAZ FUENZALIDA — Mujer",
  },
  {
    nombre: "Karen Liliana Márquez Grande",
    sexo: "Mujer",
    nacimiento: "10 ago 2000",
    telefono: "9 8428 9308",
    correo: "karenmarquezgrande@gmail.com",
    direccion: "La Vertiente 78\n2720700 San Antonio\nVALPARAÍSO",
    familia: "Karen Liliana Márquez Grande — Mujer",
  },
  {
    nombre: "Katherine Yamilet Marquez Grande",
    sexo: "Mujer",
    nacimiento: "14 feb 1995",
    telefono: "9 9891 4323",
    direccion: "Los Alerces 1026\nsan antonio\nVALPARAÍSO",
    familia: "Leonardo Esteban Wilches Martinez — Varón\nKatherine Yamilet Marquez Grande — Mujer",
  },
  {
    nombre: "Kevin Alan Robinson Tilleria",
    sexo: "Varón",
    nacimiento: "9 ene 1992",
    telefono: "9 6249 8385",
    direccion: "CALLE LOS CIRUELOS 126\nVALPARAÍSO\nVALPARAÍSO",
    familia: "Kevin Alan Robinson Tilleria — Varón",
  },
  {
    nombre: "Laura Agustina de Jesus Parraguez Meza",
    sexo: "Mujer",
    nacimiento: "16 abr 2011",
    telefono: "9 4279 3823",
    direccion: "Las Torcazas N°576\nLlolleo\nSan Antonio",
    familia: "Roxanna Soledad Meza Morales — Mujer\nLuz Eliana Paillamil Meza — Mujer\nLaura Agustina de Jesus Parraguez Meza — Mujer (15)\nJosé Ignacio Cartagena Meza — Varón (5)",
  },
  {
    nombre: "Laura Elizabeth de Miranda Acevedo",
    sexo: "Mujer",
    nacimiento: "15 mar 1986",
    telefono: "88757131",
    correo: "laurasudingenieros@gmail.com",
    direccion: "Av. Cristo Rey 1012\nSan Antonio\nVALPARAÍSO",
    familia: "Cesar Aaron Miranda Cabello — Varón\nLaura Elizabeth de Miranda Acevedo — Mujer\nIgnacio Aaron Miranda Acevedo — Varón (15)\nDiego Aaron Miranda Acevedo — Varón (11)\nGonzalo Aaron Miranda Acevedo — Varón (7)\nNicolás Aaron Miranda Acevedo — Varón (4)",
  },
  {
    nombre: "Laura Lavinia de Rubio Luna",
    sexo: "Mujer",
    nacimiento: "16 oct 1957",
    telefono: "035283398",
    correo: "lluna.belmar@gmail.com",
    direccion: "Socoroma 1875\nViuda 10, Llo Lleo\nSAN ANTONIO",
    familia: "Laura Lavinia de Rubio Luna — Mujer",
  },
  {
    nombre: "Leon Baltazar Maureira Peñailillo",
    sexo: "Varón",
    nacimiento: "5 feb 2016",
    telefono: "9 5334 3291",
    direccion: "CALLE ALCALDE DOCTOR OLEGARIO HENRÍQUEZ\nESCALANTE 695\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Veronica Elizabeth de Peñailillo Meza — Mujer\nNahomi Maira Pañailillo Meza — Mujer\nLeon Baltazar Maureira Peñailillo — Varón (10)",
  },
  {
    nombre: "Leonardo Esteban Wilches Martinez",
    sexo: "Varón",
    nacimiento: "15 dic 1993",
    telefono: "9 9520 0657",
    correo: "leo.e.wm@gmail.com",
    direccion: "Los Alerces 1026\nsan antonio\nVALPARAÍSO",
    familia: "Leonardo Esteban Wilches Martinez — Varón\nKatherine Yamilet Marquez Grande — Mujer",
  },
  {
    nombre: "Leonardo Gerardo Vera Atenas",
    sexo: "Varón",
    nacimiento: "3 mayo 1977",
    telefono: "73871096",
    correo: "leoveraatenas@yahoo.es",
    direccion: "AV SAN JUAN 4690\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Rafael Leopoldo Vera Flores — Varón\nLeonardo Gerardo Vera Atenas — Varón\nVanessa Esmeralda Vera Atenas — Mujer",
  },
  {
    nombre: "Leonardo Nelson Wilches Santibañez",
    sexo: "Varón",
    nacimiento: "3 ago 1966",
    telefono: "9 9549 3880",
    correo: "leowilches@gmail.com",
    direccion: "Los Alerces 1026\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Leonardo Nelson Wilches Santibañez — Varón\nEugenia Margarita de Wilches Martinez — Mujer\nDaniel Ignacio Wilches Martinez — Varón",
  },
  {
    nombre: "Luciano Rafael Antonio Hernandez Inostroza",
    sexo: "Varón",
    nacimiento: "18 oct 2016",
    direccion: "Parcela 65\nSAN ANTONIO",
    familia: "Marco Antonio Hernandez Ruiz — Varón\nMarisol Andrea de Hernandez Ruiz — Mujer\nMateo Alonso Hernández Inostroza — Varón\nMilena Paz Andrea Hernandez Inostroza — Mujer (12)\nLuciano Rafael Antonio Hernandez Inostroza — Varón (9)",
  },
  {
    nombre: "Lucresia del Carmen de Delgado Atenas",
    sexo: "Mujer",
    nacimiento: "25 sep 1957",
    telefono: "9 9413 8562",
    correo: "lucatenas.alvarez@gmail.com",
    direccion: "Larraín Gandarillas 1147\nLlo Lleo\nSan Antonio",
    familia: "Lucresia del Carmen de Delgado Atenas — Mujer\nPatricio Alejandro Delgado Atenas — Varón",
  },
  {
    nombre: "Luis Alberto Cornejo Mancilla",
    sexo: "Varón",
    nacimiento: "16 jul 1966",
    telefono: "85827893",
    correo: "luis.cornejo.mancilla@gmail.com",
    direccion: "Las Bandurrias 67\nSector I-23\n2660000 Santo Domingo",
    familia: "Luis Alberto Cornejo Mancilla — Varón\nPatricia Elsa Maria de Cornejo Zablach — Mujer",
  },
  {
    nombre: "Luis Mariano Hinojosa Cerda",
    sexo: "Varón",
    nacimiento: "12 jul 1961",
    telefono: "9 8738 2048",
    correo: "luism.hinojosacerda@gmail.com",
    direccion: "Inmaculada Concepcion 689\nLlolleo\nSan antonio",
    familia: "Luis Mariano Hinojosa Cerda — Varón",
  },
  {
    nombre: "Luis Martin Lassaube Lassaube",
    sexo: "Varón",
    nacimiento: "26 ene 2007",
    direccion: "Llolleo\nSan antonio",
    familia: "Felipe Osvaldo Cortez Vera — Varón\nSarah Nazaret Lassaube Lopez — Mujer\nSebastian Antonio Mori Lassaube — Varón\nLuis Martin Lassaube Lassaube — Varón",
  },
  {
    nombre: "Luisa del Carmen Peso Huenchuan",
    sexo: "Mujer",
    nacimiento: "16 mar 1980",
    familia: "Luisa del Carmen Peso Huenchuan — Mujer\nMelanie Soledad Coral Gutierrez Peso — Mujer",
  },
  {
    nombre: "Luz Angelica de Pardo Millares",
    sexo: "Mujer",
    nacimiento: "30 mayo 1950",
    telefono: "(35) 228 5210",
    direccion: "el convento\nsan antonio\nVALPARAÍSO",
    familia: "Luz Angelica de Pardo Millares — Mujer\nOlga Luisa Pardo Millares — Mujer\nMargarita Alejandra Pardo Perez — Mujer\nPaula Andrea Pardo Perez — Mujer",
  },
  {
    nombre: "Luz Eliana Paillamil Meza",
    sexo: "Mujer",
    nacimiento: "13 sep 2005",
    telefono: "9 4279 3823",
    direccion: "Las Torcazas N°576\nLlolleo\nSan Antonio",
    familia: "Roxanna Soledad Meza Morales — Mujer\nLuz Eliana Paillamil Meza — Mujer\nLaura Agustina de Jesus Parraguez Meza — Mujer (15)\nJosé Ignacio Cartagena Meza — Varón (5)",
  },
  {
    nombre: "Luz Maria de Berrios Peña",
    sexo: "Mujer",
    nacimiento: "28 jun 1943",
    direccion: "SAN ANTONIO\nVALPARAÍSO",
    familia: "Luz Maria de Berrios Peña — Mujer",
  },
  {
    nombre: "Manuel Antonio Vasquez Jerez",
    sexo: "Varón",
    nacimiento: "21 ago 1973",
    telefono: "098754294",
    direccion: "El Sauce 1375\nLlo-lleo\nVALPARAÍSO",
    familia: "Manuel Antonio Vasquez Jerez — Varón\nMarisol del Carmen de Vasquez Soto — Mujer\nVasquez Soto Renata Antonio — Mujer (11)",
  },
  {
    nombre: "Manuel Armando Perez Ormazabal",
    sexo: "Varón",
    nacimiento: "12 ago 1982",
    direccion: "4 79 Calle\nVALPARAÍSO",
    familia: "Manuel Armando Perez Ormazabal — Varón",
  },
  {
    nombre: "Manuel Ignacio Ampuero Soto",
    sexo: "Varón",
    nacimiento: "19 mayo 1997",
    telefono: "9 6349 5205",
    direccion: "Las Torcazas 831\nSan Antonio",
    familia: "Manuel Jesus Ampuero Montes — Varón\nEma Beatriz Soto Zuñiga — Mujer\nManuel Ignacio Ampuero Soto — Varón",
  },
  {
    nombre: "Manuel Jesus Ampuero Montes",
    sexo: "Varón",
    nacimiento: "22 ene 1973",
    telefono: "9 6349 5205",
    correo: "manuel_ampuero@yahoo.es",
    direccion: "Las Torcazas 831\nSan Antonio",
    familia: "Manuel Jesus Ampuero Montes — Varón\nEma Beatriz Soto Zuñiga — Mujer\nManuel Ignacio Ampuero Soto — Varón",
  },
  {
    nombre: "Marcela Antonia Pardo Martinez",
    sexo: "Mujer",
    nacimiento: "10 oct 2001",
    correo: "marcelaantonia.sud@gmail.com",
    telefono: "9 3558 4384",
    direccion: "Los Alces 1568\nViuda 9\nVALPARAÍSO",
    familia: "Viviana Jacqueline Martinez Castillo — Mujer\nMarcela Antonia Pardo Martinez — Mujer",
  },
  {
    nombre: "Marcela Ivon Donaire Valladares",
    sexo: "Mujer",
    nacimiento: "12 jul 1983",
    direccion: "Ginebra 1547\nLlo Lleo\nVALPARAÍSO",
    familia: "Marcela Ivon Donaire Valladares — Mujer",
  },
  {
    nombre: "Marcelina del Carmen de Soto Soto",
    sexo: "Mujer",
    nacimiento: "16 dic 1962",
    telefono: "035585409",
    direccion: "El Sauce 1384\nSan Antonio\nVALPARAÍSO",
    familia: "Marcelina del Carmen de Soto Soto — Mujer\nRomina Ester Soto Soto — Mujer\nNicolas Rodrigo Soto Soto — Varón",
  },
  {
    nombre: "Marco Antonio Hernandez Ruiz",
    sexo: "Varón",
    nacimiento: "22 ene 1975",
    correo: "mhernandezchile@gmail.com",
    direccion: "Parcela 65\nSAN ANTONIO",
    familia: "Marco Antonio Hernandez Ruiz — Varón\nMarisol Andrea de Hernandez Ruiz — Mujer\nMateo Alonso Hernández Inostroza — Varón\nMilena Paz Andrea Hernandez Inostroza — Mujer (12)\nLuciano Rafael Antonio Hernandez Inostroza — Varón (9)",
  },
  {
    nombre: "Marco Antonio Marco Antonio Hernandez Trujillo",
    sexo: "Varón",
    nacimiento: "14 nov 1980",
    telefono: "9 6646 2986",
    direccion: "Pje Los Cipreses S/N Parcela 8\n2660000 San Antonio\nVALPARAÍSO",
    familia: "Marco Antonio Hernandez Trujillo — Varón",
  },
  {
    nombre: "Margarita Alejandra Pardo Perez",
    sexo: "Mujer",
    nacimiento: "26 jul 2000",
    telefono: "(35) 228 5210",
    direccion: "el convento\nsan antonio\nVALPARAÍSO",
    familia: "Luz Angelica de Pardo Millares — Mujer\nOlga Luisa Pardo Millares — Mujer\nMargarita Alejandra Pardo Perez — Mujer\nPaula Andrea Pardo Perez — Mujer",
  },
  {
    nombre: "Margarita del Pilar de Meza Soto",
    sexo: "Mujer",
    nacimiento: "23 abr 1967",
    telefono: "97646298",
    correo: "pilarsita40_8@hotmail.com",
    direccion: "Las Hortencias 46\nSanto Domingo\nVALPARAÍSO",
    familia: "Juan Antonio Meza Meza — Varón\nMargarita del Pilar de Meza Soto — Mujer\nFernanda Belen Meza Soto — Mujer",
  },
  {
    nombre: "Margarita Elena de Soto Abarca",
    sexo: "Mujer",
    nacimiento: "7 feb 1943",
    telefono: "035441975",
    direccion: "CALLE LAS HORTENSIAS 32\nSANTO DOMINGO\nVALPARAÍSO",
    familia: "Margarita Elena de Soto Abarca — Mujer",
  },
  {
    nombre: "Margarita Elizabeth de Bugueño Hormazabal",
    sexo: "Mujer",
    nacimiento: "5 abr 1965",
    telefono: "64927811",
    direccion: "Ginebra 1901\nLlo Lleo\nSan Antonio",
    familia: "Margarita Elizabeth de Bugueño Hormazabal — Mujer\nAlejandro Ignacio Bugueño Hormazabal — Varón",
  },
  {
    nombre: "María Alejandra Gaona Quintanilla",
    sexo: "Mujer",
    nacimiento: "9 jun 1973",
    direccion: "San Antonio",
    familia: "Carlos Samuel Contreras Gaona — Varón\nMaría Alejandra Gaona Quintanilla — Mujer",
  },
  {
    nombre: "Maria Cristina Jimenez Ramirez",
    sexo: "Mujer",
    nacimiento: "16 dic 1978",
    telefono: "9 6454 3790",
    correo: "mcrisss@gmail.com",
    direccion: "LOS CUERVOS 969\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Jesus Alberto Torres Benavente — Varón\nMaria Cristina Jimenez Ramirez — Mujer\nJoaquin Ignacio Torres Jimenez — Varón (13)\nElias Benjamin Torres Jimenez — Varón (4)",
  },
  {
    nombre: "Maria del Carmen Alfaro de Flores",
    sexo: "Mujer",
    nacimiento: "5 mayo 1953",
    telefono: "24475315",
    direccion: "llolleo\nsan antonio\nVALPARAÍSO",
    familia: "Maria del Carmen Alfaro de Flores — Mujer",
  },
  {
    nombre: "Maria Enriqueta Vidal Diaz",
    sexo: "Mujer",
    nacimiento: "10 oct 1953",
    telefono: "9 8696 3235",
    direccion: "Las Vertientes, Pasaje El Sauce 04\nSan Antonio\nVALPARAÍSO",
    familia: "Melissa Andrea Maripangui Vidal — Mujer\nMaria Enriqueta Vidal Diaz — Mujer\nDafnhe Monserrat Echaniz Maripangui — Mujer\nYhanela Danaee Echaniz Maripangui — Mujer\nIan Aaron Cobarrubia Maripangui — Varón (14)\nYeiko Leon Cobarrubia Maripangui — Varón (12)",
  },
  {
    nombre: "Maria Fernanda Duran Verdugo",
    sexo: "Mujer",
    nacimiento: "7 feb 1963",
    direccion: "San Antonio",
    familia: "Maria Fernanda Duran Verdugo — Mujer",
  },
  {
    nombre: "Maria Jose Velasquez Contreras",
    sexo: "Mujer",
    nacimiento: "27 nov 1994",
    telefono: "035585409",
    correo: "maria.jvc27@gmail.com",
    direccion: "El Sauce 1384\nSan Antonio\nVALPARAÍSO",
    familia: "Oscar Ignacio Soto Soto — Varón\nMaria Jose Velasquez Contreras — Mujer\nJulieta Ignacia Soto Velásquez — Mujer (8)",
  },
  {
    nombre: "Marielín Alejandra Bracho de Jimenez",
    sexo: "Mujer",
    nacimiento: "11 feb 1990",
    telefono: "9 2391 4255",
    correo: "Brachomarielin@gmail.com",
    direccion: "Larraín Gandarillas 539\nsan antonio\nVALPARAÍSO",
    familia: "Marlon Jose Jimenez Dominguez — Varón\nMarielín Alejandra Bracho de Jimenez — Mujer",
  },
  {
    nombre: "Marina Enriqueta Martinez Castillo",
    sexo: "Mujer",
    nacimiento: "28 ago 1965",
    telefono: "9 7420 2247",
    direccion: "Alces 1561\nLlo-Lleo\nVALPARAÍSO",
    familia: "Marina Enriqueta Martinez Castillo — Mujer",
  },
  {
    nombre: "Mario Ismael Silva Chavez",
    sexo: "Varón",
    nacimiento: "12 abr 1947",
    direccion: "Ave. Litoral 170\nSt. Domingo\nREGIÓN METROPOLITANA",
    familia: "Mario Ismael Silva Chavez — Varón",
  },
  {
    nombre: "Marisol Andrea de Hernandez Inostroza",
    sexo: "Mujer",
    nacimiento: "19 jun 1979",
    telefono: "9 4627 9905",
    direccion: "LAS COLINAS DE SANTO DOMINGO\nParcela 65\nSAN ANTONIO",
    familia: "Marco Antonio Hernandez Ruiz — Varón\nMarisol Andrea de Hernandez Inostroza — Mujer\nMateo Alonso Hernández Inostroza — Varón\nMilena Paz Andrea Hernandez Inostroza — Mujer (12)\nLuciano Rafael Antonio Hernandez Inostroza — Varón (9)",
  },
  {
    nombre: "Marisol del Carmen de Vasquez Soto",
    sexo: "Mujer",
    nacimiento: "1 feb 1973",
    telefono: "098754294",
    direccion: "El Sauce 1375\nLlo-lleo\nVALPARAÍSO",
    familia: "Manuel Antonio Vasquez Jerez — Varón\nMarisol del Carmen de Vasquez Soto — Mujer\nVasquez Soto Renata Antonio — Mujer (11)",
  },
  {
    nombre: "Maritza Viviana Martinez de Flores",
    sexo: "Mujer",
    nacimiento: "25 nov 1980",
    telefono: "9 8988 7455",
    correo: "mmaritzam@gmail.com",
    direccion: "Miguel Hernández 837\nSan Antonio\nVALPARAÍSO",
    familia: "Mauricio Fernando Flores Rojas — Varón\nMaritza Viviana Martinez de Flores — Mujer\nAgustin Facundo Flores Martinez — Varón (12)\nCarlos Horacio Flores Martínez — Varón (10)\nFlores Martinez Consuelo Rosario — Mujer (8)",
  },
  {
    nombre: "Marjorie Andrea Hernández Arellano",
    sexo: "Mujer",
    nacimiento: "7 mayo 1985",
    telefono: "9 4214 2771",
    correo: "marjoriehernandezarellano@gmail.com",
    direccion: "CAMINO A EL CONVENTO 22\n2720000 SANTO DOMINGO\nVALPARAÍSO",
    familia: "Marjorie Andrea Hernández Arellano — Mujer\nEliette Belen Martez Hernadez — Mujer (10)",
  },
  {
    nombre: "Marlon Jose Jimenez Dominguez",
    sexo: "Varón",
    nacimiento: "20 ene 1984",
    telefono: "9 4110 6738",
    correo: "marlonjimenez224@gmail.com",
    direccion: "Larraín Gandarillas 539\nsan antonio\nVALPARAÍSO",
    familia: "Marlon Jose Jimenez Dominguez — Varón\nMarielín Alejandra Bracho de Jimenez — Mujer",
  },
  {
    nombre: "Marta Irene Celis Gongora",
    sexo: "Mujer",
    nacimiento: "29 jul 1958",
    telefono: "9897771781",
    correo: "marta1620celis@gmail.com",
    direccion: "Los Condores 1620\nSan Antonio\nVALPARAÍSO",
    familia: "Marta Irene Celis Gongora — Mujer\nAlejandro Alberto Sanchez Celis — Varón",
  },
  {
    nombre: "Mateo Alonso Bustos Farias",
    sexo: "Varón",
    nacimiento: "19 ago 2013",
    telefono: "2281252",
    correo: "camiferal@hotmail.com",
    direccion: "Av. Cristo Rey 787\nLlolleo\nSan Antonio",
    familia: "Camila Fernanda Farias Alvarez — Mujer\nMateo Alonso Bustos Farias — Varón (12)\nIsabella Aurora Bustos Farias — Mujer (10)",
  },
  {
    nombre: "Mateo Alonso Hernández Inostroza",
    sexo: "Varón",
    nacimiento: "20 sep 2006",
    correo: "mateoahernandez13@gmail.com",
    direccion: "Parcela 65\nSAN ANTONIO",
    familia: "Marco Antonio Hernandez Ruiz — Varón\nMarisol Andrea de Hernandez Ruiz — Mujer\nMateo Alonso Hernández Inostroza — Varón\nMilena Paz Andrea Hernandez Inostroza — Mujer (12)\nLuciano Rafael Antonio Hernandez Inostroza — Varón (9)",
  },
  {
    nombre: "Matías Reinaldo Montecinos Montecinos",
    sexo: "Varón",
    nacimiento: "1 dic 2006",
    telefono: "75127433",
    direccion: "La vertiente 119, San Antonio\n2663528 San Antonio\nARAUCANÍA",
    familia: "Matías Reinaldo Montecinos Montecinos — Varón",
  },
  {
    nombre: "Matilde Josefina Chourio de Bracho",
    sexo: "Mujer",
    nacimiento: "13 mar 1957",
    telefono: "9 5528 6222",
    correo: "Brachomarielin@gmail.com",
    direccion: "Larraín Gandarillas 539\nsan antonio\nVALPARAÍSO",
    familia: "Matilde Josefina Chourio de Bracho — Mujer",
  },
  {
    nombre: "Mauricio Fernando Flores Rojas",
    sexo: "Varón",
    nacimiento: "6 ene 1973",
    telefono: "9 8295 1847",
    correo: "maurflores@gmail.com",
    direccion: "Miguel Hernández 837\nSan Antonio\nVALPARAÍSO",
    familia: "Mauricio Fernando Flores Rojas — Varón\nMaritza Viviana Martinez de Flores — Mujer\nAgustin Facundo Flores Martinez — Varón (12)\nCarlos Horacio Flores Martínez — Varón (10)\nFlores Martinez Consuelo Rosario — Mujer (8)",
  },
  {
    nombre: "Maximiliano Antonio Berridos Arancibia",
    sexo: "Varón",
    nacimiento: "26 mayo 2014",
    telefono: "9 2166 9697",
    direccion: "CALLE LOS ALCES 1561\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Pascal Noemi Tobar Arancibia — Mujer (13)\nMaximiliano Antonio Berridos Arancibia — Varón (12)",
  },
  {
    nombre: "Mayte Belen Carrasco Felix",
    sexo: "Mujer",
    nacimiento: "23 sep 1996",
    telefono: "9 8530 6208",
    correo: "maytecarrascofelix@gmail.com",
    direccion: "Los Lingues 1122, torre 8, dpto 303\n0520000 San Antonio\nVALPARAÍSO",
    familia: "Ivan Marcelo Carrasco Carrasco — Varón\nCatherine Estrella de Carrasco Felix — Mujer\nMayte Belen Carrasco Felix — Mujer\nIvan Lev-Aaron Carrasco Felix — Varón",
  },
  {
    nombre: "Melanie Soledad Coral Om Gutierrez Peso",
    sexo: "Mujer",
    nacimiento: "7 jul 2000",
    familia: "Luisa del Carmen Peso Huenchuan — Mujer\nMelanie Soledad Coral Gutierrez Peso — Mujer",
  },
  {
    nombre: "Melissa Andrea Maripangui Vidal",
    sexo: "Mujer",
    nacimiento: "11 mayo 1984",
    telefono: "9 8696 3235",
    direccion: "Las Vertientes, Pasaje El Sauce 04\nSan Antonio\nVALPARAÍSO",
    familia: "Melissa Andrea Maripangui Vidal — Mujer\nMaria Enriqueta Vidal Diaz — Mujer\nDafnhe Monserrat Echaniz Maripangui — Mujer\nYhanela Danaee Echaniz Maripangui — Mujer\nIan Aaron Cobarrubia Maripangui — Varón (14)\nYeiko Leon Cobarrubia Maripangui — Varón (12)",
  },
  {
    nombre: "Michel Andreina Colmenarez Chirinos",
    sexo: "Mujer",
    nacimiento: "9 mar 2000",
    telefono: "9 6425 9945",
    correo: "chirinosandreina052@gmail.com",
    direccion: "Arz Juan González 535\nSan Antonio\nVALPARAÍSO",
    familia: "Michel Andreina Colmenarez Chirinos — Mujer",
  },
  {
    nombre: "Milena Paz Andrea Om Hernandez Inostroza",
    sexo: "Mujer",
    nacimiento: "5 dic 2013",
    telefono: "96495706",
    correo: "Milena.hernandez@cphp.cl",
    direccion: "Parcela 65\nSAN ANTONIO",
    familia: "Marco Antonio Hernandez Ruiz — Varón\nMarisol Andrea de Hernandez Ruiz — Mujer\nMateo Alonso Hernández Inostroza — Varón\nMilena Paz Andrea Hernandez Inostroza — Mujer (12)\nLuciano Rafael Antonio Hernandez Inostroza — Varón (9)",
  },
  {
    nombre: "Monica Alejandra de Orozco Frias",
    sexo: "Mujer",
    nacimiento: "15 jul 1961",
    telefono: "62375684",
    direccion: "Los Maitenes 2\nLa Araucaria 9\nSanto domingo",
    familia: "Monica Alejandra de Orozco Frias — Mujer",
  },
  {
    nombre: "Monica Elena Luna Belmar",
    sexo: "Mujer",
    nacimiento: "18 nov 1954",
    telefono: "9 7810 3132",
    correo: "fer.mezas@alumnos.duoc.cl",
    direccion: "LOS HALCONES 1738\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Monica Elena Luna Belmar — Mujer",
  },
  {
    nombre: "Nahomi Maira Pañailillo Meza",
    sexo: "Mujer",
    nacimiento: "8 abr 1989",
    correo: "penailillo.nahomi@gmail.com",
    telefono: "9 5334 3291",
    direccion: "CALLE ALCALDE DOCTOR OLEGARIO HENRÍQUEZ\nESCALANTE 695\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Veronica Elizabeth de Peñailillo Meza — Mujer\nNahomi Maira Pañailillo Meza — Mujer\nLeon Baltazar Maureira Peñailillo — Varón (10)",
  },
  {
    nombre: "Nancy de Lourdes de Acevedo Rojas",
    sexo: "Mujer",
    nacimiento: "19 ago 1957",
    telefono: "9 7632 5132",
    direccion: "Los Alces 1405\nSan Antonio\nVALPARAÍSO",
    familia: "Victor Orlando Acevedo Nacaratte — Varón\nNancy de Lourdes de Acevedo Rojas — Mujer\nYasna Karen Hernandez Rojas — Mujer\nConstanza Antonia Astorga Hernandez — Mujer (17)",
  },
  {
    nombre: "Nicolás Aaron Miranda Acevedo",
    sexo: "Varón",
    nacimiento: "23 ago 2021",
    telefono: "9 6141 6040",
    correo: "cesarsud@hotmail.com",
    direccion: "Av. Cristo Rey 1012\nSan Antonio\nVALPARAÍSO",
    familia: "Cesar Aaron Miranda Cabello — Varón\nLaura Elizabeth de Miranda Acevedo — Mujer\nIgnacio Aaron Miranda Acevedo — Varón (15)\nDiego Aaron Miranda Acevedo — Varón (11)\nGonzalo Aaron Miranda Acevedo — Varón (7)\nNicolás Aaron Miranda Acevedo — Varón (4)",
  },
  {
    nombre: "Nicolas Rodrigo Fajardo Lara",
    sexo: "Varón",
    nacimiento: "18 jul 1996",
    direccion: "VALPARAÍSO",
    familia: "Teresita del Carmen de Fajardo Lara — Mujer\nNicolas Rodrigo Fajardo Lara — Varón\nCarla Belen Fajardo Lara — Mujer",
  },
  {
    nombre: "Nicolas Rodrigo Soto Soto",
    sexo: "Varón",
    nacimiento: "24 feb 2001",
    telefono: "035585409",
    direccion: "El Sauce 1384\nSan Antonio\nVALPARAÍSO",
    familia: "Marcelina del Carmen de Soto Soto — Mujer\nRomina Ester Soto Soto — Mujer\nNicolas Rodrigo Soto Soto — Varón",
  },
  {
    nombre: "Nicole Emilia Contreras Berrios",
    sexo: "Mujer",
    nacimiento: "26 dic 1991",
    telefono: "9 8459 1278",
    direccion: "a pedido del secretario\nSan Antonio\nVALPARAÍSO",
    familia: "Nicole Emilia Contreras Berrios — Mujer",
  },
  {
    nombre: "Nora Angelica Martinez Riquelme",
    sexo: "Mujer",
    nacimiento: "17 ene 1971",
    telefono: "9 7852 8784",
    direccion: "CRISTO REY 1006\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Nora Angelica Martinez Riquelme — Mujer",
  },
  {
    nombre: "Nora del Carmen Riquelme Inostroza",
    sexo: "Mujer",
    nacimiento: "2 jul 1939",
    telefono: "9 7852 8784",
    direccion: "AV CRISTO REY 1006\nLlolleo\nSAN ANTONIO",
    familia: "Juan Carlos Taborga Navia — Varón\nNora del Carmen Riquelme Inostroza — Mujer",
  },
  {
    nombre: "Olga Luisa Pardo Millares",
    sexo: "Mujer",
    nacimiento: "21 sep 1970",
    correo: "olguitaprima@gmail.com",
    telefono: "(35) 228 5210",
    direccion: "el convento\nsan antonio\nVALPARAÍSO",
    familia: "Luz Angelica de Pardo Millares — Mujer\nOlga Luisa Pardo Millares — Mujer\nMargarita Alejandra Pardo Perez — Mujer\nPaula Andrea Pardo Perez — Mujer",
  },
  {
    nombre: "Oscar Ignacio Soto Soto",
    sexo: "Varón",
    nacimiento: "30 jul 1992",
    telefono: "035585409",
    correo: "oscar.igss2092@gmail.com",
    direccion: "El Sauce 1384\nSan Antonio\nVALPARAÍSO",
    familia: "Oscar Ignacio Soto Soto — Varón\nMaria Jose Velasquez Contreras — Mujer\nJulieta Ignacia Soto Velásquez — Mujer (8)",
  },
  {
    nombre: "Oscar Ricardo Faris Bustos",
    sexo: "Varón",
    nacimiento: "20 nov 1987",
    telefono: "9 7389 3200",
    direccion: "AVENIDA CAUPOLICÁN 696\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Sofia de los Angeles Bustos Opitz — Mujer\nOscar Ricardo Faris Bustos — Varón",
  },
  {
    nombre: "Paola Andrea de Castillo Silva",
    sexo: "Mujer",
    nacimiento: "27 ene 1972",
    telefono: "9 4273 8087",
    correo: "andreasilva38@gmail.com",
    direccion: "santo domingo\n0520000 San Antonio\nVALPARAÍSO",
    familia: "Eduardo Alberto Castillo Fuentes — Varón\nPaola Andrea de Castillo Silva — Mujer\nPilar Catherine Castillo Silva — Mujer (17)\nAmanda Carolina Castillo Silva — Mujer (14)\nAndrea Eloísa Castillo Silva — Mujer (12)",
  },
  {
    nombre: "Pascal Noemi Tobar Arancibia",
    sexo: "Mujer",
    nacimiento: "4 feb 2013",
    telefono: "9 2166 9697",
    direccion: "CALLE LOS ALCES 1561\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Pascal Noemi Tobar Arancibia — Mujer (13)\nMaximiliano Antonio Tobar Arancibia — Varón (12)",
  },
  {
    nombre: "Patricia Elsa Maria de Cornejo Zablach",
    sexo: "Mujer",
    nacimiento: "27 nov 1958",
    telefono: "9 8592 7893",
    correo: "itzel_patty@hotmail.com",
    direccion: "Las Bandurrias 67\nSector I-23\n2660000 Santo Domingo",
    familia: "Luis Alberto Cornejo Mancilla — Varón\nPatricia Elsa Maria de Cornejo Zablach — Mujer",
  },
  {
    nombre: "Patricio Alejandro Delgado Atenas",
    sexo: "Varón",
    nacimiento: "3 jun 1982",
    correo: "pato.delgado.a@gmail.com",
    telefono: "9 9413 8562",
    direccion: "Larraín Gandarillas 1147\nLlo Lleo\nSan Antonio",
    familia: "Lucresia del Carmen de Delgado Atenas — Mujer\nPatricio Alejandro Delgado Atenas — Varón",
  },
  {
    nombre: "Paula Andrea Pardo Perez",
    sexo: "Mujer",
    nacimiento: "26 jul 2000",
    telefono: "(35) 228 5210",
    direccion: "el convento\nsan antonio\nVALPARAÍSO",
    familia: "Luz Angelica de Pardo Millares — Mujer\nOlga Luisa Pardo Millares — Mujer\nMargarita Alejandra Pardo Perez — Mujer\nPaula Andrea Pardo Perez — Mujer",
  },
  {
    nombre: "Paulina de los Angeles Berrios Meza",
    sexo: "Mujer",
    nacimiento: "4 jun 1987",
    direccion: "calle el sauce , san antonio\nsan antonio\nVALPARAÍSO",
    familia: "Paulina de los Angeles Berrios Meza — Mujer\nAgustin Javier Ignacio Berrios Berrios — Varón (18)",
  },
  {
    nombre: "Pedro Mauricio Hernández González",
    sexo: "Varón",
    nacimiento: "1 mayo 1972",
    telefono: "9 7726 2737",
    direccion: "764 Lidia Gonzále\nsan antonio\nVALPARAÍSO",
    familia: "Pedro Mauricio Hernández González — Varón",
  },
  {
    nombre: "Pilar Catherine Castillo Silva",
    sexo: "Mujer",
    nacimiento: "9 oct 2008",
    telefono: "9 9820 2164",
    direccion: "santo domingo\n0520000 San Antonio\nVALPARAÍSO",
    familia: "Eduardo Alberto Castillo Fuentes — Varón\nPaola Andrea de Castillo Silva — Mujer\nPilar Catherine Castillo Silva — Mujer (17)\nAmanda Carolina Castillo Silva — Mujer (14)\nAndrea Eloísa Castillo Silva — Mujer (12)",
  },
  {
    nombre: "Rachel Jasmin Vidal Martinez",
    sexo: "Mujer",
    nacimiento: "25 nov 1981",
    telefono: "35288069",
    direccion: "Los Alces 1533\nSan Antonio\nVALPARAÍSO",
    familia: "Rachel Jasmin Vidal Martinez — Mujer\nRaul Alfredo Vidal Martinez — Varón\nRODRIGO SEBASTIAN VIDAL MARTINEZ — Varón",
  },
  {
    nombre: "Rafael Leopoldo Mercedes de Vera Flores",
    sexo: "Varón",
    nacimiento: "6 ene 1949",
    correo: "leoveraatenas@yahoo.es",
    direccion: "AV SAN JUAN 4690\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Rafael Leopoldo Vera Flores — Varón\nLeonardo Gerardo Vera Atenas — Varón\nVanessa Esmeralda Vera Atenas — Mujer",
  },
  {
    nombre: "Raul Alfredo Vidal Martinez",
    sexo: "Varón",
    nacimiento: "5 jun 1987",
    telefono: "35288069",
    direccion: "Los Alces 1533\nSan Antonio\nVALPARAÍSO",
    familia: "Rachel Jasmin Vidal Martinez — Mujer\nRaul Alfredo Vidal Martinez — Varón\nRODRIGO SEBASTIAN VIDAL MARTINEZ — Varón",
  },
  {
    nombre: "Raúl Antonio Arce Huerta",
    sexo: "Varón",
    nacimiento: "23 sep 1969",
    telefono: "9 9241 3505",
    correo: "raulantonioarce@gmail.com",
    direccion: "Camino la Media Luna\nLote 3 , Parcela 10\nSanto Domingo",
    familia: "Raúl Antonio Arce Huerta — Varón",
  },
  {
    nombre: "Rene Alberto Gana Gatica",
    sexo: "Varón",
    nacimiento: "10 ene 1962",
    correo: "ragg62@gmail.com",
    direccion: "Los Romeros 1832\nSan Antonio\nVALPARAÍSO",
    familia: "Rene Alberto Gana Gatica — Varón\nSilvana del Carmen de Gana Luna — Mujer\nRene Axel Gana Luna — Varón\nCatalina Belen Gana Luna — Mujer\nGustavo Adolfo Gana Luna — Varón",
  },
  {
    nombre: "Rene Axel Gana Luna",
    sexo: "Varón",
    nacimiento: "23 ago 1985",
    telefono: "67288639",
    correo: "re.gana@hotmail.com",
    direccion: "Los Romeros 1832\nSan Antonio\nVALPARAÍSO",
    familia: "Rene Alberto Gana Gatica — Varón\nSilvana del Carmen de Gana Luna — Mujer\nRene Axel Gana Luna — Varón\nCatalina Belen Gana Luna — Mujer\nGustavo Adolfo Gana Luna — Varón",
  },
  {
    nombre: "Rita Esperanza Estrella Om Marsa Miranda",
    sexo: "Mujer",
    nacimiento: "8 jul 2005",
    telefono: "092900684",
    direccion: "cuncumen casa 32\nSan Antonio\nVALPARAÍSO",
    familia: "Valeska del Carmen Miranda Loyola — Mujer\nRita Esperanza Estrella Marsa Miranda — Mujer",
  },
  {
    nombre: "Rocio Rubio Luna",
    sexo: "Mujer",
    nacimiento: "16 oct 1993",
    telefono: "9 7537 4437",
    direccion: "Socoroma 1875\nsan antonio\nVALPARAÍSO",
    familia: "Rocio Rubio Luna — Mujer",
  },
  {
    nombre: "Rodrigo Andres Martinez Manosalva",
    sexo: "Varón",
    nacimiento: "1 feb 1981",
    direccion: "san juan sin numero\nparcela 20 al costado condominio puertas\nsan antonio",
    familia: "Rodrigo Andres Martinez Manosalva — Varón",
  },
  {
    nombre: "Rodrigo Sebastian Vidal Martinez",
    sexo: "Varón",
    nacimiento: "11 jun 1995",
    telefono: "35288069",
    direccion: "Los Alces 1533\nSan Antonio\nVALPARAÍSO",
    familia: "Rachel Jasmin Vidal Martinez — Mujer\nRaul Alfredo Vidal Martinez — Varón\nRODRIGO SEBASTIAN VIDAL MARTINEZ — Varón",
  },
  {
    nombre: "Romina Ester Soto Soto",
    sexo: "Mujer",
    nacimiento: "19 sep 1987",
    telefono: "035585409",
    direccion: "El Sauce 1384\nSan Antonio\nVALPARAÍSO",
    familia: "Marcelina del Carmen de Soto Soto — Mujer\nRomina Ester Soto Soto — Mujer\nNicolas Rodrigo Soto Soto — Varón",
  },
  {
    nombre: "Romina Rubio Luna",
    sexo: "Mujer",
    nacimiento: "14 ago 1985",
    telefono: "9 6534 5058",
    correo: "Educadora.rominarubio@gmail.co",
    direccion: "Socoroma 1875, viuda 10\nSan Antonio\nVALPARAÍSO",
    familia: "Alvaro Alejandro Claudio Da Viá Campbell — Varón\nRomina Rubio Luna — Mujer\nFrancesco Alejandro Da-Via Rubio — Varón (4)\nDa Via Rubio Lucas Maximiliano — Varón (3)",
  },
  {
    nombre: "Rosa Natividad Herrera Ancain",
    sexo: "Mujer",
    nacimiento: "11 ene 1965",
    telefono: "9 9393 9529",
    correo: "nauvoomapu@gmail.com",
    direccion: "Parcelación El Gran Eucaliptus, parcela\nEl Convento, Santo Domingo\nSan Antonio",
    familia: "Rosa Natividad Herrera Ancain — Mujer",
  },
  {
    nombre: "Rossana del Pilar de Robinson Tilleria",
    sexo: "Mujer",
    nacimiento: "16 abr 1963",
    direccion: "PASA JE LOS ALMENDROS 1870\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Rossana del Pilar de Robinson Tilleria — Mujer",
  },
  {
    nombre: "Roxanna Soledad Meza Morales",
    sexo: "Mujer",
    nacimiento: "30 oct 1990",
    telefono: "9 4279 3823",
    correo: "rmezamorales@gmail.com",
    direccion: "Las Torcazas N°576\nLlolleo\nSan Antonio",
    familia: "Roxanna Soledad Meza Morales — Mujer\nLuz Eliana Paillamil Meza — Mujer\nLaura Agustina de Jesus Parraguez Meza — Mujer (15)\nJosé Ignacio Cartagena Meza — Varón (5)",
  },
  {
    nombre: "Sandra Jazmine de Vera Campos",
    sexo: "Mujer",
    nacimiento: "5 oct 1970",
    direccion: "san juan\nsan antonio\nVALPARAÍSO",
    familia: "Veronica Paola Vera Campos — Mujer\nSandra Jazmine de Vera Campos — Mujer",
  },
  {
    nombre: "Sandy Marion Ramirez Roa",
    sexo: "Mujer",
    nacimiento: "10 jul 1972",
    telefono: "9 4800 0834",
    correo: "Sandymarionroa@gmail.com",
    direccion: "Eucaliptus 090 Santo Domingo\nSan Antonio\nVALPARAÍSO",
    familia: "Sandy Marion Ramirez Roa — Mujer",
  },
  {
    nombre: "Santiago Solanille Clavero",
    sexo: "Varón",
    nacimiento: "11 sep 1967",
    telefono: "9 8691 3353",
    correo: "santiago@solanille.com",
    direccion: "ruta G-906 Km 1.7\nparcela F-12\nSan Antonio",
    familia: "Santiago Solanille Clavero — Varón",
  },
  {
    nombre: "Sarah Nazaret Lassaube Lopez",
    sexo: "Mujer",
    nacimiento: "9 oct 1988",
    direccion: "Llolleo\nSan antonio",
    familia: "Felipe Osvaldo Cortez Vera — Varón\nSarah Nazaret Lassaube Lopez — Mujer\nSebastian Antonio Mori Lassaube — Varón\nLuis Martin Lassaube Lassaube — Varón",
  },
  {
    nombre: "Sebastian Andres de Jesus Hinojosa Cerda",
    sexo: "Varón",
    nacimiento: "13 dic 1969",
    telefono: "62131703",
    correo: "sebastianhc13@gmail.com",
    direccion: "Inmaculada Concepcion 689\nLlolleo\nSan Antonio",
    familia: "Sebastian Andres de Jesus Hinojosa Cerda — Varón",
  },
  {
    nombre: "Sebastian Antonio Mori Lassaube",
    sexo: "Varón",
    nacimiento: "3 jun 2003",
    correo: "Sebamorilassaube@gmail.com",
    direccion: "Llolleo\nSan antonio",
    familia: "Felipe Osvaldo Cortez Vera — Varón\nSarah Nazaret Lassaube Lopez — Mujer\nSebastian Antonio Mori Lassaube — Varón\nLuis Martin Lassaube Lassaube — Varón",
  },
  {
    nombre: "Sebastian Ignacio Miranda Cabello",
    sexo: "Varón",
    nacimiento: "4 sep 1997",
    telefono: "9 7226 3522",
    correo: "shebistiann@gmail.com",
    direccion: "Ginebra 1511\nLlo-lleo\nVALPARAÍSO",
    familia: "Teresa Sandra Cabello Torres — Mujer\nSebastian Ignacio Miranda Cabello — Varón",
  },
  {
    nombre: "Segundo Andres Naranjo Alvarez",
    sexo: "Varón",
    nacimiento: "11 ene 1948",
    direccion: "LAS PERDISES 1775\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Segundo Andres Naranjo Alvarez — Varón\nGloria Virginia de Naranjo Gallardo — Mujer\nAngelica de las Nieves Naranjo Gallardo — Mujer",
  },
  {
    nombre: "Sergio Enrique Pineda Soto",
    sexo: "Varón",
    nacimiento: "18 oct 1962",
    direccion: "a pedido del secretario del barrio\nSan Antonio\nVALPARAÍSO",
    familia: "Sergio Enrique Pineda Soto — Varón\nEmma Maritza de Pineda Urra — Mujer",
  },
  {
    nombre: "Silvana del Carmen de Gana Luna",
    sexo: "Mujer",
    nacimiento: "1 mayo 1961",
    telefono: "9 7511 3538",
    correo: "silvygan@gmail.com",
    direccion: "Los Romeros 1832\nSan Antonio\nVALPARAÍSO",
    familia: "Rene Alberto Gana Gatica — Varón\nSilvana del Carmen de Gana Luna — Mujer\nRene Axel Gana Luna — Varón\nCatalina Belen Gana Luna — Mujer\nGustavo Adolfo Gana Luna — Varón",
  },
  {
    nombre: "Silvia Georgina Olivera Delgado",
    sexo: "Mujer",
    nacimiento: "24 ago 1981",
    direccion: "San Antonio\nVALPARAÍSO",
    familia: "Silvia Georgina Olivera Delgado — Mujer\nIgnacio Juan Caceres Olivera — Varón\nFelipe Octavio Caceres Olivera — Varón (11)",
  },
  {
    nombre: "Smith las Mercedes Saint Julien",
    sexo: "Varón",
    nacimiento: "15 sep 1980",
    direccion: "El Sauce 599\nVALPARAÍSO",
    familia: "Smith Saint Julien — Varón",
  },
  {
    nombre: "Sofia de los Angeles Bustos Opitz",
    sexo: "Mujer",
    nacimiento: "17 jun 1965",
    telefono: "9 7389 3200",
    direccion: "AVENIDA CAUPOLICÁN 696\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Sofia de los Angeles Bustos Opitz — Mujer\nOscar Ricardo Faris Bustos — Varón",
  },
  {
    nombre: "Teresa Sandra Cabello Torres",
    sexo: "Mujer",
    nacimiento: "14 mar 1956",
    telefono: "9 8541 1660",
    correo: "teresacabello2017@gmail.com",
    direccion: "Ginebra 1511\nLlo-lleo\nVALPARAÍSO",
    familia: "Teresa Sandra Cabello Torres — Mujer\nSebastian Ignacio Miranda Cabello — Varón",
  },
  {
    nombre: "Teresita del Carmen de Fajardo Lara",
    sexo: "Mujer",
    nacimiento: "18 ene 1978",
    direccion: "VALPARAÍSO",
    familia: "Teresita del Carmen de Fajardo Lara — Mujer\nNicolas Rodrigo Fajardo Lara — Varón\nCarla Belen Fajardo Lara — Mujer",
  },
  {
    nombre: "Thiago Cárdenas Zenteno",
    sexo: "Mujer",
    nacimiento: "1 mar 1998",
    direccion: "Camino Las Salinas\nParcelación 58, Lote 67\nSanto Domingo",
    familia: "Carlos Ivan Cárdenas Sanchez — Varón\nBernarda de Lourdes Cárdenas Sanchez — Mujer\nAna Maria Vicencio Munita — Mujer\nThiago Cárdenas Zenteno — Mujer",
  },
  {
    nombre: "Treacy Scarlett Oroz Ravanal",
    sexo: "Mujer",
    nacimiento: "27 ene 2001",
    correo: "jenravanalecheverria@gmail.com",
    telefono: "63137902",
    direccion: "Camino rapel kilometro 4\nParcela 3 el convento\nSanto domingo",
    familia: "Jennifer Odette Ravanal Echeverria — Mujer\nTreacy Scarlett Oroz Ravanal — Mujer",
  },
  {
    nombre: "Ulises Gonzalo Cerda Paredes",
    sexo: "Varón",
    nacimiento: "28 nov 1978",
    direccion: "Santa Elba 26\nPoblacion Rafael Moreno\n1 Santo Domingo",
    familia: "Ulises Gonzalo Cerda Paredes — Varón\nFernando Antonio Cerda Paredes — Varón",
  },
  {
    nombre: "Valeska del Carmen Miranda Loyola",
    sexo: "Mujer",
    nacimiento: "11 mayo 1970",
    telefono: "092900684",
    direccion: "cuncumen casa 32\nSan Antonio\nVALPARAÍSO",
    familia: "Valeska del Carmen Miranda Loyola — Mujer\nRita Esperanza Estrella Marsa Miranda — Mujer",
  },
  {
    nombre: "Vanessa Esmeralda Vera Atenas",
    sexo: "Mujer",
    nacimiento: "23 mayo 1989",
    direccion: "AV SAN JUAN 4690\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Rafael Leopoldo Vera Flores — Varón\nLeonardo Gerardo Vera Atenas — Varón\nVanessa Esmeralda Vera Atenas — Mujer",
  },
  {
    nombre: "Vasquez Soto Renata Antonio",
    sexo: "Mujer",
    nacimiento: "10 dic 2014",
    telefono: "098754294",
    direccion: "El Sauce 1375\nLlo-lleo\nVALPARAÍSO",
    familia: "Manuel Antonio Vasquez Jerez — Varón\nMarisol del Carmen de Vasquez Soto — Mujer\nVasquez Soto Renata Antonio — Mujer (11)",
  },
  {
    nombre: "Veronica del Carmen Guardera Maldonado",
    sexo: "Mujer",
    nacimiento: "2 jul 1977",
    direccion: "102\nSanto Domingo",
    familia: "Veronica del Carmen Guardera Maldonado — Mujer",
  },
  {
    nombre: "Veronica Elizabeth de Peñailillo Meza",
    sexo: "Mujer",
    nacimiento: "22 dic 1962",
    telefono: "9 5334 3291",
    correo: "veronica.e.m.f.19@gmail.com",
    direccion: "CALLE ALCALDE DOCTOR OLEGARIO HENRÍQUEZ\nESCALANTE 695\nSAN ANTONIO\nVALPARAÍSO",
    familia: "Veronica Elizabeth de Peñailillo Meza — Mujer\nNahomi Maira Pañailillo Meza — Mujer\nLeon Baltazar Maureira Peñailillo — Varón (10)",
  },
  {
    nombre: "Veronica Paola Vera Campos",
    sexo: "Mujer",
    nacimiento: "17 dic 1992",
    correo: "familiavera74@hotmail.com",
    direccion: "san juan\nsan antonio\nVALPARAÍSO",
    familia: "Veronica Paola Vera Campos — Mujer\nSandra Jazmine de Vera Campos — Mujer",
  },
  {
    nombre: "Victor Alejandro Acevedo Rojas",
    sexo: "Varón",
    nacimiento: "15 dic 1990",
    telefono: "9 7562 9326",
    direccion: "Los Alces 1405\nLlolleo\n0 San Antonio",
    familia: "Victor Alejandro Acevedo Rojas — Varón\nIsabella Selenne Acevedo Labrin — Mujer (9)",
  },
  {
    nombre: "Victor Manuel Roman Jimenez",
    sexo: "Varón",
    nacimiento: "13 abr 1981",
    telefono: "9 5778 0272",
    correo: "victorroman81@gmail.com",
    direccion: "Medea 787 Llo Lleo\nLlo Lleo\nSan Antonio",
    familia: "Victor Manuel Roman Jimenez — Varón",
  },
  {
    nombre: "Victor Orlando Acevedo Nacaratte",
    sexo: "Varón",
    nacimiento: "1 oct 1959",
    telefono: "9 7632 5132",
    correo: "orlandociclista59@hotmail.es",
    direccion: "Los Alces 1405\nSan Antonio\nVALPARAÍSO",
    familia: "Victor Orlando Acevedo Nacaratte — Varón\nNancy de Lourdes de Acevedo Rojas — Mujer\nYasna Karen Hernandez Rojas — Mujer\nConstanza Antonia Astorga Hernandez — Mujer (17)",
  },
  {
    nombre: "Viviana Jacqueline Martinez Castillo",
    sexo: "Mujer",
    nacimiento: "25 jun 1969",
    telefono: "9 3558 4384",
    correo: "vivianamartinez.sud@gmail.com",
    direccion: "Los Alces 1568\nViuda 9\nVALPARAÍSO",
    familia: "Viviana Jacqueline Martinez Castillo — Mujer\nMarcela Antonia Pardo Martinez — Mujer",
  },
  {
    nombre: "Wilhermina Francisca de Molina Zuñiga",
    sexo: "Mujer",
    nacimiento: "28 ago 1941",
    telefono: "2114181",
    direccion: "Los Limites 1262\nLlo Lleo\n2660000 San Antonio",
    familia: "Wilhermina Francisca de Molina Zuñiga — Mujer\nAndrea Francisca de Fuentes Molina — Mujer",
  },
  {
    nombre: "Yasna Karen Hernandez Rojas",
    sexo: "Mujer",
    nacimiento: "10 sep 1982",
    telefono: "9 7632 5132",
    direccion: "Los Alces 1405\nSan Antonio\nVALPARAÍSO",
    familia: "Victor Orlando Acevedo Nacaratte — Varón\nNancy de Lourdes de Acevedo Rojas — Mujer\nYasna Karen Hernandez Rojas — Mujer\nConstanza Antonia Astorga Hernandez — Mujer (17)",
  },
  {
    nombre: "Yeiko Leon Cobarrubia Maripangui",
    sexo: "Varón",
    nacimiento: "9 sep 2013",
    telefono: "9 8696 3235",
    direccion: "Las Vertientes, Pasaje El Sauce 04\nSan Antonio\nVALPARAÍSO",
    familia: "Melissa Andrea Maripangui Vidal — Mujer\nMaria Enriqueta Vidal Diaz — Mujer\nDafnhe Monserrat Echaniz Maripangui — Mujer\nYhanela Danaee Echaniz Maripangui — Mujer\nIan Aaron Cobarrubia Maripangui — Varón (14)\nYeiko Leon Cobarrubia Maripangui — Varón (12)",
  },
  {
    nombre: "Yhanela Danaee Echaniz Maripangui",
    sexo: "Mujer",
    nacimiento: "15 nov 2007",
    telefono: "9 8696 3235",
    correo: "yhanela21@gmail.com",
    direccion: "Las Vertientes, Pasaje El Sauce 04\nSan Antonio\nVALPARAÍSO",
    familia: "Melissa Andrea Maripangui Vidal — Mujer\nMaria Enriqueta Vidal Diaz — Mujer\nDafnhe Monserrat Echaniz Maripangui — Mujer\nYhanela Danaee Echaniz Maripangui — Mujer\nIan Aaron Cobarrubia Maripangui — Varón (14)\nYeiko Leon Cobarrubia Maripangui — Varón (12)",
  },
];

const directory = document.getElementById("directory");
const searchInput = document.getElementById("search");
const resultsMeta = document.getElementById("resultsMeta");
const emptyState = document.getElementById("emptyState");
const detail = document.getElementById("detail");
const detailContent = document.getElementById("detailContent");
const detailClose = document.getElementById("detailClose");
const detailBack = document.getElementById("detailBack");
const detailForward = document.getElementById("detailForward");
const ministrantes = document.getElementById("ministrantes");
const ministrantesContent = document.getElementById("ministrantesContent");
const ministrantesClose = document.getElementById("ministrantesClose");
const filterButtons = document.querySelectorAll(".filter-btn");

let activeFilter = "todos";
let detailHistory = [];
let detailHistoryIndex = -1;

const ICONO_AMIGO = `
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 18.5c.8-2.8 2.9-4.3 5.5-4.3s4.7 1.5 5.5 4.3" stroke-linecap="round" />
    <circle cx="17" cy="9" r="2.6" />
    <path d="M14.2 18.5c.5-1.9 1.9-3.1 3.8-3.1 1.3 0 2.4.5 3.1 1.5" stroke-linecap="round" />
  </svg>
`;

const MESES = {
  ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5,
  jul: 6, ago: 7, sep: 8, oct: 9, nov: 10, dic: 11,
};

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function nameTokens(text) {
  return normalize(text)
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .sort()
    .join(" ");
}

function nombreDesdeArchivo(filename) {
  const base = filename.replace(/\.[^.]+$/, "").trim();
  if (base.includes(",")) {
    const [apellidos, nombres] = base.split(",").map((part) => part.trim());
    return `${nombres} ${apellidos}`;
  }
  return base;
}

function fotoUrl(filename) {
  return `./fotos/${encodeURIComponent(filename)}`;
}

const fotoPorNombre = new Map(
  FOTOS.map((file) => [nameTokens(nombreDesdeArchivo(file)), fotoUrl(file)])
);

function fotoDePerfil(nombre) {
  return fotoPorNombre.get(nameTokens(nombre)) || FOTO_ANON;
}

// Grupo fijo (no ampliar al importar el barrio completo): recién conversos actuales
const RECIEN_CONVERSOS = [
  "Benjamín Alexander Vásquez Zolorsa",
  "Wladimir Antonio Sepúlveda Fuentes",
  "Matias Ignacio Vega Abarca",
  "Martina Francisca Escalante Cornejo",
  "Héctor Manuel Rosales Sanchez",
  "Mario Alejandro Rossel Poblete",
  "Graciela Del Carmen Arpe Torres",
  "Isabella Esperanza Illanes Arpe",
  "José Manuel Illanes Ceballos",
  "Roberto Pablo Illanes Postigo",
  "María Laura Farias Fuentes",
  "Matías Alejandro Fuentes Martinez",
  "Matias Valentin Leyes Campos",
  "Nahuel Nicolás Leyes Campos",
  "Edgardo Jose Abarca Neira",
  "Omar Ramon Ayala Roman",
  "Eduardo David Enrique Naranjo Gutierrez",
  "Alicia Cecilia Meza Pizarro",
  "Cristopher Bastian Jofré Campos",
  "Barbara Elizabeth Gonzalez Salazar",
  "Mateo Ignacio León Silva",
  "Támara Elizabeth Gonzalez Leon",
  "Julio Anibal Ramírez Soto",
  "Walther Ivaniet Urbina Peña",
  "Fernando Alonso Cerda Poblete",
  "Hector Ignacio León Pinto",
  "Yoel Alejandro Córdova González",
  "Tomas Alejandro Cortez Daza",
  "Gabriela Soledad Contreras Zuñiga",
  "Josefa Paz Diaz Jeria",
  "Felipe Esteban Pinto Jauregui",
  "José Miguel Diaz Muñoz",
  "Thiare Andrea Donoso Vilches",
  "Dominique Dayanet Donoso Vilches",
  "Claudia Maricel Vilches Arenas",
  "Pedro Leon Walker Ramirez",
  "David Francisco Flores Contreras",
  "Nancy Del Carmen Varas Nitor",
  "Pascuala Blanca Arratia Zambrano",
  "Javiera Antonia Núñez Pineda",
  "Rosa del Carmen Pardo Basaure",
  "Hernan Enrique Aravena Martínez",
  "Catalina Ignacia Aravena Toro",
  "Carlos Fernando Soto Godoy",
  "Pilar De Lourdes Toro Pontigo",
  "Alejandro Luis Castro Silva",
  "Camilo Andrés Farias Ortega",
  "Manuel Antonio Pailamilla Abarza",
  "Juan Eduardo Acevedo Mendoza",
  "Silvia Del Carmen Delgado Abarzua",
  "Isidora Ignacia Riquelme Jofre",
  "Nicolas Gabriel Hauser Rogget",
  "Felipe Octavio Caceres Olivera",
  "Andres Felipe Erazo Salgado",
];

const recienConversoTokens = new Set(RECIEN_CONVERSOS.map((n) => nameTokens(n)));

// Obispado del Barrio Llo Lleo 1
const LLAMAMIENTOS_OBISPADO = [
  {
    nombre: "Luis Alberto Cornejo Mancilla",
    llamamiento: "Obispo",
    etiqueta: "Obispo",
  },
  {
    nombre: "Leonardo Nelson Wilches Santibañez",
    llamamiento: "Primer consejero del obispado",
    etiqueta: "1.er consejero",
  },
  {
    nombre: "Sebastian Andres de Jesus Hinojosa Cerda",
    llamamiento: "Segundo consejero del obispado",
    etiqueta: "2.do consejero",
  },
  {
    nombre: "Carlos Fernando Soto Godoy",
    llamamiento: "Secretario de barrio",
    etiqueta: "Secretario",
  },
];

// Sociedad de Socorro del Barrio Llo Lleo 1
const LLAMAMIENTOS_SS = [
  {
    nombre: "Lucresia del Carmen de Delgado Atenas",
    llamamiento: "Presidenta de Sociedad de Socorro",
    etiqueta: "Presidenta SS",
  },
  {
    nombre: "Teresa Sandra Cabello Torres",
    llamamiento: "1ª consejera de la Sociedad de Socorro",
    etiqueta: "1.ª consejera SS",
  },
  {
    nombre: "Silvana del Carmen de Gana Luna",
    llamamiento: "2ª consejera de la Sociedad de Socorro",
    etiqueta: "2.ª consejera SS",
  },
  {
    nombre: "Veronica Elizabeth de Peñailillo Meza",
    llamamiento: "Secretaria de Sociedad de Socorro",
    etiqueta: "Secretaria SS",
  },
  {
    nombre: "Pascuala Blanca Arratia Zambrano",
    llamamiento: "Maestra de la Sociedad de Socorro",
    etiqueta: "Maestra SS",
  },
];

// Quórum de élderes del Barrio Llo Lleo 1
const LLAMAMIENTOS_ELDERES = [
  {
    nombre: "Fernando Andres Soto Gazul",
    llamamiento: "Presidente de quórum de élderes",
    etiqueta: "Presidente élderes",
  },
  {
    nombre: "Luis Mariano Hinojosa Cerda",
    llamamiento: "Primer consejero de quórum de élderes",
    etiqueta: "1.er consejero élderes",
  },
  {
    nombre: "Eduardo Alberto Castillo Fuentes",
    llamamiento: "Segundo consejero de quórum de élderes",
    etiqueta: "2.do consejero élderes",
  },
  {
    nombre: "David Alejandro Quintanilla Meza",
    llamamiento: "Secretario de quórum de élderes",
    etiqueta: "Secretario élderes",
  },
  {
    nombre: "Alfredo Elias Mondaca Riveros",
    llamamiento: "Maestro de cuórum de élderes",
    etiqueta: "Maestro élderes",
  },
];

const obispadoPorNombre = new Map(
  LLAMAMIENTOS_OBISPADO.map((item) => [nameTokens(item.nombre), item])
);
const ssPorNombre = new Map(
  LLAMAMIENTOS_SS.map((item) => [nameTokens(item.nombre), item])
);
const elderesPorNombre = new Map(
  LLAMAMIENTOS_ELDERES.map((item) => [nameTokens(item.nombre), item])
);

hermanos.forEach((hermano, index) => {
  hermano.id = index;
  hermano.foto = fotoDePerfil(hermano.nombre);
  hermano.recienConverso =
    hermano.recienConverso === true ||
    recienConversoTokens.has(nameTokens(hermano.nombre));

  const cargoObispado = obispadoPorNombre.get(nameTokens(hermano.nombre));
  if (cargoObispado) {
    hermano.llamamiento = cargoObispado.llamamiento;
    hermano.etiquetaLlamamiento = cargoObispado.etiqueta;
    hermano.obispado = true;
  }

  const cargoSs = ssPorNombre.get(nameTokens(hermano.nombre));
  if (cargoSs) {
    hermano.llamamiento = cargoSs.llamamiento;
    hermano.etiquetaLlamamiento = cargoSs.etiqueta;
    hermano.sociedadSocorro = true;
  }

  const cargoElderes = elderesPorNombre.get(nameTokens(hermano.nombre));
  if (cargoElderes) {
    hermano.llamamiento = cargoElderes.llamamiento;
    hermano.etiquetaLlamamiento = cargoElderes.etiqueta;
    hermano.quorumElderes = true;
  }
});

const hermanosPorNombre = new Map(
  hermanos.map((h) => [nameTokens(h.nombre), h])
);

function findHermanoByNombre(nombre) {
  const key = nameTokens(nombre);
  if (!key) return null;
  const exact = hermanosPorNombre.get(key);
  if (exact) return exact;

  const wanted = key.split(" ");
  if (wanted.length < 2) return null;

  let best = null;
  let bestScore = 0;
  for (const h of hermanos) {
    const tokens = nameTokens(h.nombre).split(" ");
    const set = new Set(tokens);
    let hit = 0;
    for (const t of wanted) if (set.has(t)) hit++;
    const score = hit / Math.max(wanted.length, tokens.length);
    const coversShort =
      wanted.length <= tokens.length
        ? wanted.every((t) => set.has(t))
        : tokens.every((t) => wanted.includes(t));
    if (coversShort && wanted.length >= 3) return h;
    if (score > bestScore) {
      bestScore = score;
      best = h;
    }
  }
  return bestScore >= 0.75 ? best : null;
}

function nombreDesdeLineaFamilia(line) {
  let text = String(line || "").trim();
  if (!text) return null;
  text = text.split(/\s+[—–]\s+/)[0].trim();
  text = text.replace(/\s+-\s+(?=\d|[Vv]arón|[Mm]ujer)/, " — ").split(/\s+[—–]\s+/)[0].trim();
  text = text.replace(/\s*\(\d{1,3}\)\s*$/, "").trim();
  text = text.replace(/\s+(Varón|Mujer)\s*$/i, "").trim();
  return text || null;
}

function familiaHtml(familia, currentId) {
  if (!familia || !String(familia).trim()) return escapeHtml("—");

  return String(familia)
    .split("\n")
    .map((line) => {
      const raw = line.trim();
      if (!raw) return "";
      const nombre = nombreDesdeLineaFamilia(raw);
      const match = nombre ? findHermanoByNombre(nombre) : null;
      if (!match || match.id === currentId) {
        return `<span class="family-line">${escapeHtml(raw)}</span>`;
      }

      const dashParts = raw.split(/\s+[—–]\s+/);
      const rest =
        dashParts.length > 1
          ? ` — ${escapeHtml(dashParts.slice(1).join(" — "))}`
          : "";
      return `<span class="family-line"><button type="button" class="family-link" data-id="${match.id}">${escapeHtml(match.nombre)}</button>${rest}</span>`;
    })
    .filter(Boolean)
    .join("");
}

function parseFecha(fecha) {
  if (!fecha) return null;
  const text = String(fecha).trim();
  const match =
    text.match(/^(\d{1,2})\s+de\s+([a-zA-Záéíóú]+)\s+de\s+(\d{4})$/i) ||
    text.match(/^(\d{1,2})\s+([a-zA-Záéíóú]+)\s+(\d{4})$/i);
  if (!match) return null;
  const day = Number(match[1]);
  const monthKey = normalize(match[2]).slice(0, 3);
  const year = Number(match[3]);
  const month = MESES[monthKey];
  if (month == null) return null;
  return new Date(year, month, day);
}

function calcEdad(nacimiento) {
  const birth = parseFecha(nacimiento);
  if (!birth) return null;

  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const hadBirthday =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
  if (!hadBirthday) age -= 1;
  return age;
}

function calcTiempoMiembro(bautismo) {
  const start = parseFecha(bautismo);
  if (!start) return null;

  const today = new Date();
  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();
  if (today.getDate() < start.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  if (years < 0) return null;

  if (years === 0 && months === 0) return "Menos de 1 mes";
  if (years === 0) return months === 1 ? "1 mes" : `${months} meses`;
  if (months === 0) return years === 1 ? "1 año" : `${years} años`;
  const anios = years === 1 ? "1 año" : `${years} años`;
  const meses = months === 1 ? "1 mes" : `${months} meses`;
  return `${anios} y ${meses}`;
}

function show(value) {
  return value && String(value).trim() ? value : "—";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function edadTexto(hermano) {
  const edad = calcEdad(hermano.nacimiento);
  if (edad != null) return `${edad} años`;
  return "Edad —";
}

function detailItem(label, valueHtml) {
  return `
    <div class="detail-item">
      <span class="detail-label">${escapeHtml(label)}</span>
      <div class="detail-value">${valueHtml}</div>
    </div>
  `;
}

function llamamientoBadgeClass(hermano) {
  if (hermano.sociedadSocorro) return "badge-ss";
  if (hermano.quorumElderes) return "badge-elderes";
  if (hermano.obispado) return "badge-llamamiento";
  return "badge-llamamiento";
}

function cardBadges(hermano) {
  const badges = [];
  if (hermano.etiquetaLlamamiento) {
    badges.push(
      `<span class="${llamamientoBadgeClass(hermano)}">${escapeHtml(hermano.etiquetaLlamamiento)}</span>`
    );
  }
  if (hermano.recienConverso) {
    badges.push(`<span class="badge-recien">Recién converso</span>`);
  }
  return badges.length ? `<div class="card-badges">${badges.join("")}</div>` : "";
}

function detailBadges(hermano) {
  const badges = [];
  if (hermano.etiquetaLlamamiento) {
    badges.push(
      `<span class="${llamamientoBadgeClass(hermano)}">${escapeHtml(hermano.etiquetaLlamamiento)}</span>`
    );
  }
  if (hermano.recienConverso) {
    badges.push(`<span class="badge-recien">Recién converso</span>`);
  }
  return badges.length
    ? `<p class="detail-badge">${badges.join("")}</p>`
    : "";
}

function createCard(hermano, index) {
  const card = document.createElement("article");
  const classes = ["card"];
  if (hermano.recienConverso) classes.push("is-recien");
  if (hermano.obispado) classes.push("is-obispado");
  if (hermano.sociedadSocorro) classes.push("is-ss");
  if (hermano.quorumElderes) classes.push("is-elderes");
  card.className = classes.join(" ");
  card.style.setProperty("--i", Math.min(index, 20));
  card.innerHTML = `
    <div class="card-photo-wrap">
      <img
        class="card-photo"
        src="${hermano.foto || FOTO_ANON}"
        alt="Foto de ${escapeHtml(hermano.nombre)}"
        onerror="this.onerror=null;this.src='${FOTO_ANON}'"
        loading="lazy"
        width="400"
        height="400"
      />
      ${cardBadges(hermano)}
    </div>
    <div class="card-body">
      <h2 class="card-name">${escapeHtml(hermano.nombre)}</h2>
      <p class="card-age">${escapeHtml(edadTexto(hermano))}</p>
      <p class="card-org">${escapeHtml(show(hermano.organizacion))}</p>
      <div class="card-actions">
        <button class="card-btn" type="button" data-id="${hermano.id}">
          Más detalles
        </button>
        <button class="card-btn-ministrantes" type="button" data-ministrantes="${hermano.id}">
          ${ICONO_AMIGO}
          Hermanos ministrantes
        </button>
      </div>
    </div>
  `;
  return card;
}

function openMinistrantes(hermano) {
  // Por ahora: plazas vacías (fotos anónimas, sin nombres)
  const slots = hermano.hermanosMinistrantes?.length
    ? hermano.hermanosMinistrantes
    : [null, null];

  const cards = slots
    .map((slot) => {
      const matched = slot?.nombre ? findHermanoByNombre(slot.nombre) : null;
      const foto = matched?.foto || FOTO_ANON;
      const nombre = matched
        ? escapeHtml(matched.nombre)
        : "";
      return `
        <article class="ministrante-card">
          <img
            class="ministrante-photo"
            src="${foto}"
            alt="${matched ? `Foto de ${escapeHtml(matched.nombre)}` : "Hermano ministrante por asignar"}"
            onerror="this.onerror=null;this.src='${FOTO_ANON}'"
          />
          <p class="ministrante-name">${nombre || "&nbsp;"}</p>
        </article>
      `;
    })
    .join("");

  ministrantesContent.innerHTML = `
    <h2 class="ministrantes-title" id="ministrantesTitle">Hermanos ministrantes</h2>
    <p class="ministrantes-subtitle">De ${escapeHtml(hermano.nombre)}</p>
    <div class="ministrantes-grid">${cards}</div>
    <p class="ministrantes-note">Aún no hay hermanos ministrantes asignados.</p>
  `;

  ministrantes.hidden = false;
  document.body.classList.add("detail-open");
  ministrantesClose.focus();
}

function closeMinistrantes() {
  if (ministrantes.hidden) return;
  ministrantes.hidden = true;
  ministrantesContent.innerHTML = "";
  if (detail.hidden) {
    document.body.classList.remove("detail-open");
  }
}

function updateDetailNav() {
  if (!detailBack || !detailForward) return;
  detailBack.disabled = detailHistoryIndex <= 0;
  detailForward.disabled = detailHistoryIndex >= detailHistory.length - 1;
}

function openDetail(hermano, options = {}) {
  const fromHistory = options.fromHistory === true;

  if (!fromHistory) {
    const currentId = detailHistory[detailHistoryIndex];
    if (currentId !== hermano.id) {
      detailHistory = detailHistory.slice(0, detailHistoryIndex + 1);
      detailHistory.push(hermano.id);
      detailHistoryIndex = detailHistory.length - 1;
    }
  }

  const edad = calcEdad(hermano.nacimiento);
  const nacimientoText = hermano.nacimiento
    ? `${hermano.nacimiento}${edad != null ? ` (${edad} años)` : ""}`
    : "—";
  const tiempoMiembro =
    hermano.tiempoMiembro || calcTiempoMiembro(hermano.bautismo);

  const telefonoHtml = hermano.telefono
    ? `<a href="tel:+56${String(hermano.telefono).replace(/\D/g, "")}">${escapeHtml(hermano.telefono)}</a>`
    : "—";
  const correoHtml = hermano.correo
    ? `<a href="mailto:${escapeHtml(hermano.correo)}">${escapeHtml(hermano.correo)}</a>`
    : "—";

  let items = `
    ${detailItem(
      "Estado",
      hermano.recienConverso ? "Recién converso" : "Miembro del barrio"
    )}
    ${detailItem("Organización", escapeHtml(show(hermano.organizacion)))}
    ${detailItem("Fecha de nacimiento", escapeHtml(nacimientoText))}
    ${detailItem("Sexo", escapeHtml(show(hermano.sexo)))}
  `;

  if (hermano.sexo === "Varón") {
    items += detailItem("Oficio en el sacerdocio", escapeHtml(show(hermano.oficio)));
  }

  items += `
    ${detailItem("Llamamiento", escapeHtml(show(hermano.llamamiento)))}
    ${detailItem("Fecha de bautismo", escapeHtml(show(hermano.bautismo)))}
    ${detailItem("Tiempo como miembro", escapeHtml(show(tiempoMiembro)))}
    ${detailItem("Teléfono", telefonoHtml)}
    ${detailItem("Correo", correoHtml)}
    ${detailItem("Dirección", escapeHtml(show(hermano.direccion)))}
  `;

  if (hermano.coords) {
    items += detailItem("Ubicación", escapeHtml(hermano.coords));
  }

  items += detailItem("Familia", familiaHtml(hermano.familia, hermano.id));

  detailContent.innerHTML = `
    <img
      class="detail-hero"
      src="${hermano.foto || FOTO_ANON}"
      alt="Foto de ${escapeHtml(hermano.nombre)}"
      onerror="this.onerror=null;this.src='${FOTO_ANON}'"
    />
    <div class="detail-body">
      <h2 class="detail-name" id="detailName">${escapeHtml(hermano.nombre)}</h2>
      ${detailBadges(hermano)}
      <p class="detail-org">${escapeHtml(show(hermano.organizacion))}</p>
      <div class="detail-list">${items}</div>
    </div>
  `;

  detail.hidden = false;
  document.body.classList.add("detail-open");
  const panel = detail.querySelector(".detail-panel");
  if (panel) panel.scrollTop = 0;
  updateDetailNav();
  detailClose.focus();
}

function goDetailHistory(step) {
  const nextIndex = detailHistoryIndex + step;
  if (nextIndex < 0 || nextIndex >= detailHistory.length) return;
  const hermano = hermanos.find((h) => h.id === detailHistory[nextIndex]);
  if (!hermano) return;
  detailHistoryIndex = nextIndex;
  openDetail(hermano, { fromHistory: true });
}

function closeDetail() {
  if (detail.hidden) return;
  detail.hidden = true;
  document.body.classList.remove("detail-open");
  detailContent.innerHTML = "";
  detailHistory = [];
  detailHistoryIndex = -1;
  updateDetailNav();
}

function searchableText(h) {
  return [
    h.nombre,
    h.organizacion,
    h.nacimiento,
    h.sexo,
    h.oficio,
    h.llamamiento,
    h.bautismo,
    h.tiempoMiembro,
    h.telefono,
    h.correo,
    h.direccion,
    h.coords,
    h.familia,
    h.recienConverso ? "recien converso recienconversos" : "",
    h.obispado ? "obispado llamamiento" : "",
    h.sociedadSocorro ? "sociedad de socorro ss" : "",
    h.quorumElderes ? "quorum de elderes elderes" : "",
    h.etiquetaLlamamiento || "",
  ].join(" ");
}

function applyFilters() {
  const q = normalize(searchInput.value.trim());
  let list = hermanos;

  if (activeFilter === "recien") {
    list = list.filter((h) => h.recienConverso);
  } else if (activeFilter === "obispado") {
    list = list.filter((h) => h.obispado);
  } else if (activeFilter === "ss") {
    list = list.filter((h) => h.sociedadSocorro);
  } else if (activeFilter === "elderes") {
    list = list.filter((h) => h.quorumElderes);
  }

  if (q) {
    list = list.filter((h) => normalize(searchableText(h)).includes(q));
  }

  return list;
}

function render(list) {
  directory.replaceChildren();
  const total = hermanos.length;
  const totalRecien = hermanos.filter((h) => h.recienConverso).length;
  const totalObispado = hermanos.filter((h) => h.obispado).length;
  const totalSs = hermanos.filter((h) => h.sociedadSocorro).length;
  const totalElderes = hermanos.filter((h) => h.quorumElderes).length;
  const scopeTotal =
    activeFilter === "recien"
      ? totalRecien
      : activeFilter === "obispado"
        ? totalObispado
        : activeFilter === "ss"
          ? totalSs
          : activeFilter === "elderes"
            ? totalElderes
            : total;
  const scopeLabel =
    activeFilter === "recien"
      ? "recién conversos"
      : activeFilter === "obispado"
        ? "del obispado"
        : activeFilter === "ss"
          ? "de Sociedad de Socorro"
          : activeFilter === "elderes"
            ? "del quórum de élderes"
            : "hermanos";

  if (!list.length) {
    resultsMeta.textContent =
      activeFilter === "recien"
        ? `0 de ${totalRecien} recién conversos`
        : activeFilter === "obispado"
          ? `0 de ${totalObispado} del obispado`
          : activeFilter === "ss"
            ? `0 de ${totalSs} de Sociedad de Socorro`
            : activeFilter === "elderes"
              ? `0 de ${totalElderes} del quórum de élderes`
              : `0 de ${total} hermanos`;
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  resultsMeta.textContent =
    list.length === scopeTotal
      ? `${list.length} ${scopeLabel}`
      : `${list.length} de ${scopeTotal} ${scopeLabel}`;

  const fragment = document.createDocumentFragment();
  list.forEach((hermano, index) => {
    fragment.appendChild(createCard(hermano, index));
  });
  directory.appendChild(fragment);
}

function refresh() {
  render(applyFilters());
}

directory.addEventListener("click", (event) => {
  const ministrantesBtn = event.target.closest(".card-btn-ministrantes");
  if (ministrantesBtn) {
    const hermano = hermanos.find(
      (h) => String(h.id) === ministrantesBtn.dataset.ministrantes
    );
    if (hermano) openMinistrantes(hermano);
    return;
  }

  const button = event.target.closest(".card-btn");
  if (!button) return;
  const hermano = hermanos.find((h) => String(h.id) === button.dataset.id);
  if (hermano) openDetail(hermano);
});

detailClose.addEventListener("click", closeDetail);
detailBack.addEventListener("click", () => goDetailHistory(-1));
detailForward.addEventListener("click", () => goDetailHistory(1));
ministrantesClose.addEventListener("click", closeMinistrantes);

detail.addEventListener("click", (event) => {
  const familyLink = event.target.closest(".family-link");
  if (familyLink) {
    event.preventDefault();
    const hermano = hermanos.find((h) => String(h.id) === familyLink.dataset.id);
    if (hermano) openDetail(hermano);
    return;
  }
  if (event.target === detail) closeDetail();
});

ministrantes.addEventListener("click", (event) => {
  if (event.target === ministrantes) closeMinistrantes();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!ministrantes.hidden) {
      closeMinistrantes();
      return;
    }
    if (!detail.hidden) closeDetail();
    return;
  }
  if (detail.hidden || !ministrantes.hidden) return;
  if (event.key === "ArrowLeft") goDetailHistory(-1);
  if (event.key === "ArrowRight") goDetailHistory(1);
});

searchInput.addEventListener("input", refresh);

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter || "todos";
    filterButtons.forEach((other) => {
      const on = other === btn;
      other.classList.toggle("is-active", on);
      other.setAttribute("aria-pressed", on ? "true" : "false");
    });
    refresh();
  });
});

refresh();

/* ---------- PWA: instalación ---------- */
const installBtn = document.getElementById("installBtn");
const installBanner = document.getElementById("installBanner");
const installBannerBtn = document.getElementById("installBannerBtn");
const installDismiss = document.getElementById("installDismiss");
const installHint = document.getElementById("installHint");

let deferredInstallPrompt = null;
const INSTALL_DISMISS_KEY = "directorio-install-dismissed";

function isStandaloneApp() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function isIos() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

function showInstallUi(mode) {
  if (isStandaloneApp()) return;
  if (localStorage.getItem(INSTALL_DISMISS_KEY) === "1" && mode === "banner") {
    return;
  }

  if (installBtn) installBtn.hidden = false;

  if (mode === "banner" && installBanner) {
    if (isIos()) {
      installHint.textContent =
        "En Safari: Compartir → Agregar a pantalla de inicio.";
      installBannerBtn.hidden = true;
    } else {
      installHint.textContent =
        "Agrégalo a tu pantalla de inicio para usarlo como app.";
      installBannerBtn.hidden = false;
    }
    installBanner.hidden = false;
  }
}

async function promptInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    if (choice.outcome === "accepted") {
      if (installBanner) installBanner.hidden = true;
      if (installBtn) installBtn.hidden = true;
    }
    return;
  }

  if (isIos()) {
    showInstallUi("banner");
    installHint.textContent =
      "En Safari: toca Compartir y luego “Agregar a pantalla de inicio”.";
  }
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  showInstallUi("banner");
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  if (installBanner) installBanner.hidden = true;
  if (installBtn) installBtn.hidden = true;
  localStorage.removeItem(INSTALL_DISMISS_KEY);
});

if (installBtn) {
  installBtn.addEventListener("click", promptInstall);
}
if (installBannerBtn) {
  installBannerBtn.addEventListener("click", promptInstall);
}
if (installDismiss) {
  installDismiss.addEventListener("click", () => {
    if (installBanner) installBanner.hidden = true;
    localStorage.setItem(INSTALL_DISMISS_KEY, "1");
  });
}

// iOS no dispara beforeinstallprompt: mostrar ayuda tras unos segundos
if (!isStandaloneApp() && isIos() && localStorage.getItem(INSTALL_DISMISS_KEY) !== "1") {
  window.setTimeout(() => showInstallUi("banner"), 1800);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
