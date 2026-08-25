-- Seed Directorio Llo-Lleo (307 miembros)
-- Ejecutar DESPUÉS de schema.sql
-- Idempotente: borra e inserta de nuevo

truncate table public.miembros restart identity cascade;

insert into public.miembros (
  nombre,
  organizacion,
  nacimiento,
  sexo,
  oficio,
  telefono,
  correo,
  direccion,
  coords,
  llamamiento,
  familia,
  bautismo,
  tiempo_miembro,
  foto,
  recien_converso,
  obispado,
  sociedad_socorro,
  quorum_elderes,
  etiqueta_llamamiento
) values
('Benjamín Alexander Vásquez Zolorsa', 'Primaria - Valientes', '21 ene 2017', 'Varón', null, '9 5051 3322', 'Caritofuentes561@gmail.com', 'Lidia González 734 Llolleo, San Antonio
San Antonio
VALPARAÍSO', '-33,618904, -71,60485', 'Sin llamamiento', 'Carolina Andrea Fuentes Inayao — 29 abr 1991 (35)
Benjamín Alexander Vásquez Zolorsa — 21 ene 2017 (9)', null, null, 'Benjamín Alexander Vásquez Zolorsa.png', true, false, false, false, null),
('Wladimir Antonio Sepúlveda Fuentes', 'Cuórum sacerdocio Aarónico', '8 jun 2009', 'Varón', null, '9 2161 1327', 'Caritofuentes561@gmail.com', 'Lidia Gonzales #734 Llolleo
266000 Llo Lleo
VALPARAÍSO', '-33.6189, -71.60484', 'Sin llamamiento', 'Wladimir Antonio Sepulveda Fuentes — Varón (17)', null, null, 'Wladimir Antonio Sepúlveda Fuentes.png', true, false, false, false, null),
('Matias Ignacio Vega Abarca', 'Escuela Dominical, Quórum de élderes', '2 nov 2005', 'Varón', 'Presbítero', '9 7735 4687', '219679890@gmail.com', '1870 Los Cóndores
2660344 Llo Lleo
VALPARAÍSO', '-33,619923, -71,59591', 'Sin llamamiento', 'Isabella e Ignacio', null, null, 'Matias Ignacio Vega Abarca.png', true, false, false, false, null),
('Martina Francisca Escalante Cornejo', 'Mujeres Jóvenes, Escuela Dominical', '24 mar 2011', 'Mujer', null, '9 2932 4923', 'martina.escalante.co@gmail.com', null, '-33,619087, -71,599434', 'Sin llamamiento', 'Martina Francisca Escalante Cornejo — Mujer (15)', null, null, 'Martina Francisca Escalante Cornejo.png', true, false, false, false, null),
('Héctor Manuel Rosales Sanchez', 'Quórum de élderes, Escuela Dominical', '3 sep 1973', 'Varón', 'Presbítero', '9 7774 8796', 'Hectormanuelrosalez0@gmail.com', 'Los Vantros 1061 San Antonio VALPARAÍSO
266000 Llo Lleo
VALPARAÍSO', '-33.620552, -71.598694', 'Sin llamamientos', 'Tamara y Joel', null, null, 'Rosales Sánchez, Héctor Manuel.png', true, false, false, false, null),
('Mario Alejandro Rossel Poblete', null, '15 jul 1981', 'Varón', null, '9 7940 8276', 'mrossel154@gmail.com', 'Santa Ines 35 Rafael Moreno
2660000 Santo Domingo
VALPARAÍSO', null, null, 'Mario Alejandro Rossel Poblete — Varón', null, null, 'Mario Alejandro Rossel Poblete.png', true, false, false, false, null),
('Graciela Del Carmen Arpe Torres', null, '29 sep 1990', 'Mujer', null, '9 5689 9962', 'graciela.arpe.t@gmail.com', 'Los Manantiales 19, Santo Domingo
2660000 Santo Domingo
VALPARAÍSO', null, null, 'Graciela del Carmen Arpe Torres — Mujer', null, null, 'Graciela Del Carmen Arpe Torres.jpeg', true, false, false, false, null),
('Isabella Esperanza Illanes Arpe', null, '29 mar 2017', 'Mujer', null, '9 9496 0907', null, null, null, null, 'Isabella Esperanza Illanes Arpe — Mujer (9)', null, null, 'Isabella Esperanza Illanes Arpe.png', true, false, false, false, null),
('José Manuel Illanes Ceballos', null, '31 dic 1979', 'Varón', null, '9 9821 4887', 'jose@dynamo.cl', 'Los Manantiles Parcela 19
2660000 Santo Domingo
VALPARAÍSO', null, null, 'José Manuel Illanes Ceballos — Varón', null, null, 'José Manuel Illanes Ceballos.png', true, false, false, false, null),
('Roberto Pablo Illanes Postigo', null, '14 jun 1947', 'Varón', null, null, null, '2660000 Santo Domingo
VALPARAÍSO', null, null, 'Roberto Pablo Illanes Postigo — Varón', null, null, 'Roberto Pablo Illanes Postigo.png', true, false, false, false, null),
('María Laura Farias Fuentes', null, '6 feb 2008', 'Mujer', null, '9 9193 6753', 'lauraaf963@gmail.com', 'Horacio Larraín parcela 5, sector 2
2660000 LloLleo
VALPARAÍSO', null, null, 'María Laura Farias Fuentes — Mujer', null, null, null, true, false, false, false, null),
('Matías Alejandro Fuentes Martinez', null, '3 sep 2004', 'Varón', null, '9 8296 5108', 'fmatias045@gmail.com', 'Los Maitenes 41
2660000 San Antonio
VALPARAÍSO', null, null, 'Matías Alejandro Fuentes Martinez — Varón', null, null, 'Matías Alejandro Fuentes Martinez.png', true, false, false, false, null),
('Matias Valentin Leyes Campos', null, '4 mar 2011', 'Varón', null, null, null, '02622 15-27-3988
Los Halcones 1649
2660449 San Antonio
VALPARAÍSO', null, null, 'Matias Valentin Leyes Campos — Varón (15)', null, null, 'Matías Valentín Leyes Campos.png', true, false, false, false, null),
('Nahuel Nicolás Leyes Campos', null, '26 dic 2007', 'Varón', null, '02622 57-1879', 'nahuelcampos089@gmail.com', 'Los Halcones 1649
2660449 San Antonio
VALPARAÍSO', null, null, 'Nahuel Nicolás Leyes Campos — Varón (18)', null, null, 'Nahuel Nicolás Leyes Campos.png', true, false, false, false, null),
('Edgardo Jose Abarca Neira', null, '4 ago 1978', 'Varón', null, '9 7886 1099', 'edgardoabarca2023@gmail.com', 'Las Alpacas 1536
Rafael De La Presa 814
2660487 San Antonio', null, null, 'Edgardo Jose Abarca Neira — Varón', null, null, 'Edgardo José Abarca Neira.png', true, false, false, false, null),
('Omar Ramon Ayala Roman', null, '13 oct 1966', 'Varón', null, '9 5844 8180', 'omar.ramon.ayala42@gmail.com', 'La Vertiente 49 Santo Domingo
La Vertiente Sin Número, Parcela, Santo
3330000 San Antonio', null, null, 'Omar Ramon Ayala Roman — Varón', null, null, 'Omar Ramon Ayala Roman.png', true, false, false, false, null),
('Eduardo David Enrique Naranjo Gutierrez', null, '14 jul 2004', 'Varón', null, '9 3737 2864', 'eduardonaranjo595@gmail.com', 'Los Cóndores 1717
2660437 San Antonio
VALPARAÍSO', null, null, 'Eduardo David Enrique Naranjo Gutierrez — Varón', null, null, 'Eduardo David Enrique Naranjo Gutiérrez.png', true, false, false, false, null),
('Alicia Cecilia Meza Pizarro', null, '28 sep 1966', 'Mujer', null, '9 7715 7307', 'aliciaceciliameza@gmail.com', 'VALPARAÍSO', null, null, 'Alicia Cecilia Meza Pizarro — Mujer
David Alejandro Quintanilla Meza — Varón', null, null, 'Alicia Cecilia Meza Pizarro.jpeg', true, false, false, false, null),
('Cristopher Bastian Jofré Campos', null, '23 abr 1991', 'Varón', null, '9 6163 9998', 'cristopherjcampos@gmail.com', 'Los Cóndores 1864
2660000 LloLleo
VALPARAÍSO', null, null, 'Cristopher Bastian Jofré Campos — Varón', null, null, 'Cristopher Bastian Jofré Campos.png', true, false, false, false, null),
('Barbara Elizabeth Gonzalez Salazar', null, '26 mar 1985', 'Mujer', null, '9 9700 3987', null, 'Los Alerces 2006 Parcela 101 Llolleo
San Antonio
REGIÓN METROPOLITANA', null, null, 'Barbara Elizabeth Gonzalez Salazar — Mujer', null, null, 'Bárbara Elizabeth González Salazar.png', true, false, false, false, null),
('Mateo Ignacio León Silva', null, '12 sep 2012', 'Varón', null, '9 8927 4940', null, 'Aerodromo Poniente
Parcela 68
Santo Domingo', null, null, 'Hector Ignacio León Pinto — Varón
Mateo Ignacio León Silva — Varón (13)', null, null, null, true, false, false, false, null),
('Támara Elizabeth Gonzalez Leon', null, '3 ene 1981', 'Mujer', null, '9 6293 0636', 'Elizabethleon0301@gmail.com', 'Los Vantros 1061
San Antonio
Llo Lleo', null, null, 'Támara Elizabeth Gonzalez Leon — Mujer', null, null, 'Támara Elizabeth González León.png', true, false, false, false, null),
('Julio Anibal Ramírez Soto', null, '2 feb 1969', 'Varón', null, '9 6670 3077', null, 'Madre selva 103
Pob. Maitenes II
San Antonio , Santo Dgo.', null, null, 'Julio Anibal Ramírez Soto — Varón', null, null, 'Julio Anibal Ramírez Soto.png', true, false, false, false, null),
('Walther Ivaniet Urbina Peña', null, '11 jun 1989', 'Varón', null, '9 5905 1253', 'wurbina22211@gmail.com', 'arturo phillips 89
llolleo
san antonio', null, null, 'Walther Ivaniet Urbina Peña — Varón', null, null, 'Walther Ivaniet Urbina Peña.png', true, false, false, false, null),
('Fernando Alonso Cerda Poblete', null, '26 ago 2005', 'Varón', null, '9 6648 0250', 'fernandoalonzo@gmail.com', null, null, null, 'Fernando Alonso Cerda Poblete — Varón', null, null, null, true, false, false, false, null),
('Hector Ignacio León Pinto', null, '10 ene 1965', 'Varón', null, '9 9345 7055', null, 'Aerodromo Poniente
Parcela 68
Santo Domingo', null, null, 'Hector Ignacio León Pinto — Varón
Mateo Ignacio León Silva — Varón (13)', null, null, 'Héctor Ignacio León Pinto.png', true, false, false, false, null),
('Yoel Alejandro Córdova González', null, '24 ago 2001', 'Varón', null, '9 4975 2671', 'Yoelcordova2408@gmail.com', 'Los Vantros 1061
San Antonio
VALPARAÍSO', null, null, 'Yoel Alejandro Córdova González — Varón', null, null, null, true, false, false, false, null),
('Tomas Alejandro Cortez Daza', null, '2 jun 2017', 'Varón', null, '9 6138 9801', null, 'El Sauce 1501
San Antonio
Llo-Lleo', null, null, 'Nancy del Carmen Varas Nitor — Mujer
Tomas Alejandro Cortez Daza — Varón (9)', null, null, null, true, false, false, false, null),
('Gabriela Soledad Contreras Zuñiga', null, '2 jun 1970', 'Mujer', null, '9 6537 9570', 'gabrielasoledadcontreraszuniga@gmail.com', 'Pasaje Uno , N° 671
San Antonio
VALPARAÍSO', null, null, 'Gabriela Soledad Contreras Zuñiga — Mujer
David Francisco Flores Contreras — Varón', null, null, null, true, false, false, false, null),
('Josefa Paz Diaz Jeria', null, '27 dic 2010', 'Mujer', null, '9 2639 0279', null, 'Los Espinos 915
Llolleo
San Antonio', null, null, 'Josefa Paz Diaz Jeria — Mujer (15)', null, null, null, true, false, false, false, null),
('Felipe Esteban Pinto Jauregui', null, '3 dic 2013', 'Varón', null, null, null, 'Llolleo
San Antonio', null, null, 'Felipe Esteban Pinto Jauregui — Varón (12)', null, null, null, true, false, false, false, null),
('José Miguel Diaz Muñoz', null, '17 ago 1961', 'Varón', null, '9 5943 2931', null, 'las rocas 120
san antonio
lsanto domingo', null, null, 'José Miguel Diaz Muñoz — Varón', null, null, null, true, false, false, false, null),
('Thiare Andrea Donoso Vilches', null, '7 ago 2006', 'Mujer', null, '9 3051 9836', null, 'El Sauce 1741
Poblacion Campiña 1
San Antonio', null, null, 'Claudia Maricel Vilches Arenas — Mujer
Thiare Andrea Donoso Vilches — Mujer
Dominique Dayanet Donoso Vilches — Mujer (10)', null, null, null, true, false, false, false, null),
('Dominique Dayanet Donoso Vilches', null, '5 mayo 2016', 'Mujer', null, '9 3051 9836', null, 'El Sauce 1741
Poblacion Campiña 1
San Antonio', null, null, 'Claudia Maricel Vilches Arenas — Mujer
Thiare Andrea Donoso Vilches — Mujer
Dominique Dayanet Donoso Vilches — Mujer (10)', null, null, null, true, false, false, false, null),
('Claudia Maricel Vilches Arenas', null, '4 mayo 1982', 'Mujer', null, '9 3051 9836', null, 'El Sauce 1741
Poblacion Campiña 1
San Antonio', null, null, 'Claudia Maricel Vilches Arenas — Mujer
Thiare Andrea Donoso Vilches — Mujer
Dominique Dayanet Donoso Vilches — Mujer (10)', null, null, null, true, false, false, false, null),
('Pedro Leon Walker Ramirez', null, '3 nov 2004', 'Varón', null, '9 2380 3709', 'walkerleon444@gmail.com', 'los espinos 150
Rocas de Santo Domingo
San Antonio', null, null, 'Pedro Leon Walker Ramirez — Varón', null, null, null, true, false, false, false, null),
('David Francisco Flores Contreras', null, '20 jul 1994', 'Varón', null, '9 9860 3392', 'davidflorescontreras20@gmail.com', 'Pasaje Uno , N° 671
San Antonio
VALPARAÍSO', null, null, 'Gabriela Soledad Contreras Zuñiga — Mujer
David Francisco Flores Contreras — Varón', null, null, 'David Francisco Flores Contreras.jpeg', true, false, false, false, null),
('Nancy Del Carmen Varas Nitor', null, '11 sep 1949', 'Mujer', null, '9 6138 9801', null, 'El Sauce 1501
San Antonio
Llo-Lleo', null, null, 'Nancy del Carmen Varas Nitor — Mujer
Tomas Alejandro Cortez Daza — Varón (9)', null, null, null, true, false, false, false, null),
('Pascuala Blanca Arratia Zambrano', null, '24 dic 1955', 'Mujer', null, '9 9948 3691', 'arratiazambranopaz@gmail.com', 'Jason 1603 Viuda Llo Lleo
SAN ANTONIO
VALPARAÍSO', null, 'Maestra de la Sociedad de Socorro', 'Carlos Fernando Soto Godoy — Varón
Pascuala Blanca Arratia Zambrano — Mujer', null, null, 'Pascuala Blanca Arratia Zambrano.jpeg', true, false, true, false, 'Maestra SS'),
('Javiera Antonia Núñez Pineda', null, '28 dic 2009', 'Mujer', null, null, 'javieranunez843@gmail.com', 'san antonio
jason 1614
san antonio', null, null, 'Javiera Antonia Núñez Pineda — Mujer (16)', null, null, null, true, false, false, false, null),
('Rosa del Carmen Pardo Basaure', null, '15 mar 1978', 'Mujer', null, '9 7350 1505', 'rosicollins7@gmail.com', 'parinacota 1933
viuda 10
san antonio , llo lleo', null, null, 'Rosa del Carmen Pardo Basaure — Mujer', null, null, null, true, false, false, false, null),
('Hernan Enrique Aravena Martínez', null, '25 feb 1968', 'Varón', null, '9 7724 4826', 'Catalinaaravena95@gmail.com', 'san antonio
Los Helechos 41
Santo Domingo', null, null, 'Hernan Enrique Aravena Martínez — Varón
Pilar de Lourdes Toro Pontigo — Mujer
Catalina Ignacia Aravena Toro — Mujer', null, null, 'Hernan Enrique Aravena Martínez.jpeg', true, false, false, false, null),
('Catalina Ignacia Aravena Toro', null, '25 abr 2003', 'Mujer', null, '9 7345 1521', null, 'san antonio
Los Helechos 41
Santo Domingo', null, null, 'Hernan Enrique Aravena Martínez — Varón
Pilar de Lourdes Toro Pontigo — Mujer
Catalina Ignacia Aravena Toro — Mujer', null, null, null, true, false, false, false, null),
('Carlos Fernando Soto Godoy', null, '2 dic 1960', 'Varón', null, '9 9080 4157', 'proyecta.sanantonio@gmail.com', 'Jason 1603 Viuda Llo Lleo
SAN ANTONIO
VALPARAÍSO', null, 'Secretario de barrio', 'Carlos Fernando Soto Godoy — Varón
Pascuala Blanca Arratia Zambrano — Mujer', null, null, null, true, true, false, false, 'Secretario'),
('Pilar De Lourdes Toro Pontigo', null, '11 feb 1971', 'Mujer', null, '9 9149 6534', 'catalinaaravena95@gmail.com', 'san antonio
Los Helechos 41
Santo Domingo', null, null, 'Hernan Enrique Aravena Martínez — Varón
Pilar de Lourdes Toro Pontigo — Mujer
Catalina Ignacia Aravena Toro — Mujer', null, null, 'Pilar de Lourdes Toro Pontigo.jpeg', true, false, false, false, null),
('Alejandro Luis Castro Silva', null, '5 dic 1968', 'Varón', null, '9 4851 1203', 'laca.atala832@gmail.com', 'los Halcones esquina Baquedano s/ n°
San Antonio , llolleo
VALPARAÍSO', null, null, 'Alejandro Luis Castro Silva — Varón', null, null, null, true, false, false, false, null),
('Camilo Andrés Farias Ortega', null, '15 ago 1975', 'Varón', null, '9 9079 1316', null, 'el convento
san antonio
VALPARAÍSO', null, null, 'Camilo Andrés Farias Ortega — Varón', null, null, null, true, false, false, false, null),
('Manuel Antonio Pailamilla Abarza', null, '31 oct 1960', 'Varón', null, '9 5611 2013', 'manuelpailamilla.38@gmail.com', 'CALLE LLO LLEO 129
SAN ANTONIO
VALPARAÍSO', null, null, 'Manuel Antonio Pailamilla Abarza — Varón', null, null, 'Manuel Antonio Pailamilla Abarza.jpeg', true, false, false, false, null),
('Juan Eduardo Acevedo Mendoza', null, '17 nov 1985', 'Varón', null, '9 7946 5500', 'sniper_m4t6@hotmail.com', 'Las Alpacas 1767
san antonio , llo-lleo
VALPARAÍSO', null, null, 'Juan Eduardo Acevedo Mendoza — Varón', null, null, null, true, false, false, false, null),
('Silvia Del Carmen Delgado Abarzua', null, '13 dic 1954', 'Mujer', null, '9 9013 5168', null, 'Las Vizcachas 1426
San antonio
VALPARAÍSO', null, null, 'Silvia del Carmen Delgado Abarzua — Mujer', null, null, null, true, false, false, false, null),
('Isidora Ignacia Riquelme Jofre', null, '6 jul 2009', 'Mujer', null, '9 6525 6965', 'isi.riquelme.jo@gmail.com', 'PASA JE LOS HELECHOS 27
2720000 SANTO DOMINGO
VALPARAÍSO', null, null, 'Felipe Ignacio Riquelme Cornejo — Varón
Andrea Jaqueline Jofre Aravena — Mujer
Isidora Ignacia Riquelme Jofre — Mujer (17)', null, null, null, true, false, false, false, null),
('Nicolas Gabriel Hauser Rogget', null, '26 ene 2004', 'Varón', null, '9 2779 0572', 'nicolashauser2004@gmail.com', 'Parcela 137, Sector La Media Luna,
El Convento, Santo Domingo
san antonio', null, null, 'Nicolas Gabriel Hauser Rogget — Varón', null, null, null, true, false, false, false, null),
('Felipe Octavio Caceres Olivera', null, '2 mar 2015', 'Varón', null, null, null, 'San Antonio
VALPARAÍSO', null, null, 'Silvia Georgina Olivera Delgado — Mujer
Ignacio Juan Caceres Olivera — Varón
Felipe Octavio Caceres Olivera — Varón (11)', null, null, null, true, false, false, false, null),
('Andres Felipe Erazo Salgado', null, '4 dic 1999', 'Varón', null, '9 3281 0061', null, '539 Larraín Gandarillas
2660752 San Antonio
VALPARAÍSO', null, null, 'Andres Felipe Erazo Salgado — Varón', null, null, null, true, false, false, false, null),
('Abel del Transito Meza Toro', null, '1 nov 1948', 'Varón', null, null, null, 'SAN ANTONIO
VALPARAÍSO', null, null, 'Abel del Transito Meza Toro — Varón
Cristina del Carmen de Meza Soto — Mujer', null, null, null, false, false, false, false, null),
('Agustin Facundo Flores Martinez', null, '7 ene 2014', 'Varón', null, '(35) 236 7135', null, 'Miguel Hernández 837
San Antonio
VALPARAÍSO', null, null, 'Mauricio Fernando Flores Rojas — Varón
Maritza Viviana Martinez de Flores — Mujer
Agustin Facundo Flores Martinez — Varón (12)
Carlos Horacio Flores Martínez — Varón (10)
Flores Martinez Consuelo Rosario — Mujer (8)', null, null, null, false, false, false, false, null),
('Agustin Javier Ignacio Berrios Berrios', null, '13 sep 2007', 'Varón', null, null, null, 'calle el sauce , san antonio
san antonio
VALPARAÍSO', null, null, 'Paulina de los Angeles Berrios Meza — Mujer
Agustin Javier Ignacio Berrios Berrios — Varón (18)', null, null, null, false, false, false, false, null),
('Ahiza Lía Pizarro Hernández', null, '25 dic 2009', 'Mujer', null, '9 7809 3231', null, 'Los Espinos 939
san antonio
VALPARAÍSO', null, null, 'Bernarda Cristina Hernandez Fuentes — Mujer
Ahiza Lía Pizarro Hernández — Mujer (16)
Félix Francisco Julian Pizarro Hernández — Varón (14)', null, null, null, false, false, false, false, null),
('Alejandro Alberto Sanchez Celis', null, '30 ene 1992', 'Varón', null, '9897771781', null, 'Los Condores 1620
San Antonio
VALPARAÍSO', null, null, 'Marta Irene Celis Gongora — Mujer
Alejandro Alberto Sanchez Celis — Varón', null, null, null, false, false, false, false, null),
('Alejandro Ignacio Bugueño Hormazábal', null, '19 nov 1995', 'Varón', null, '64927811', null, 'Ginebra 1901
Llo Lleo
San Antonio', null, null, 'Margarita Elizabeth de Bugueño Hormazabal — Mujer
Alejandro Ignacio Bugueño Hormazabal — Varón', null, null, null, false, false, false, false, null),
('Alfredo Elias Mondaca Riveros', null, '31 ago 1968', 'Varón', null, '91538658', 'gen_io@hotmail.com', 'El Sauce 711 ,Llo-lleo
San Antonio
VALPARAÍSO', null, 'Maestro de cuórum de élderes', 'Alfredo Elias Mondaca Riveros — Varón', null, null, null, false, false, false, true, 'Maestro élderes'),
('Alicia del Carmen de Peña Jerez', null, '19 dic 1964', 'Mujer', null, '9 5774 2342', 'a.valeskavasquez.o@gmail.com', 'Los Algarrobos 1065
Llo Lleo Alto
San Antonio, Chile', null, null, 'Alicia del Carmen de Peña Jerez — Mujer', null, null, 'Alicia del Carmen de Peña Jerez.png', false, false, false, false, null),
('Alina Yolanda de Soto Gazul', null, '5 nov 1965', 'Mujer', null, '9 3080 1220', 'mundophp68@gmail.com', 'LOS CONDORES 1876
SAN ANTONIO
VALPARAÍSO', null, null, 'Jose Miguel Soto Soto — Varón
Alina Yolanda de Soto Gazul — Mujer
Jose Miguel Soto Gazul — Varón
Fernando Andres Soto Gazul — Varón', null, null, null, false, false, false, false, null),
('Alvaro Alejandro Claudio Da Viá Campbell', null, '25 ago 1979', 'Varón', null, '9 8817 2378', 'alvaro_2846@hotmail.com', 'Socoroma 1875, viuda 10
San Antonio
VALPARAÍSO', null, null, 'Alvaro Alejandro Claudio Da Viá Campbell — Varón
Romina Rubio Luna — Mujer
Francesco Alejandro Da-Via Rubio — Varón (4)
Da Via Rubio Lucas Maximiliano — Varón (3)', null, null, null, false, false, false, false, null),
('Amanda Carolina Castillo Silva', null, '20 oct 2011', 'Mujer', null, '9 9820 2164', null, 'santo domingo
0520000 San Antonio
VALPARAÍSO', null, null, 'Eduardo Alberto Castillo Fuentes — Varón
Paola Andrea de Castillo Silva — Mujer
Pilar Catherine Castillo Silva — Mujer (17)
Amanda Carolina Castillo Silva — Mujer (14)
Andrea Eloísa Castillo Silva — Mujer (12)', null, null, null, false, false, false, false, null),
('Ana Maria Vicencio Munita', null, '24 oct 1947', 'Mujer', null, null, null, 'Camino Las Salinas
Parcelación 58, Lote 67
Santo Domingo', null, null, 'Carlos Ivan Cárdenas Sanchez — Varón
Bernarda de Lourdes Cárdenas Sanchez — Mujer
Ana Maria Vicencio Munita — Mujer
Thiago Cárdenas Zenteno — Mujer', null, null, null, false, false, false, false, null),
('Andrea Eloísa Castillo Silva', null, '23 oct 2013', 'Mujer', null, '9 9820 2164', null, 'santo domingo
0520000 San Antonio
VALPARAÍSO', null, null, 'Eduardo Alberto Castillo Fuentes — Varón
Paola Andrea de Castillo Silva — Mujer
Pilar Catherine Castillo Silva — Mujer (17)
Amanda Carolina Castillo Silva — Mujer (14)
Andrea Eloísa Castillo Silva — Mujer (12)', null, null, null, false, false, false, false, null),
('Andrea Francisca de Fuentes Molina', null, '30 nov 1974', 'Mujer', null, '2114181', null, 'Los Limites 1262
Llo Lleo
2660000 San Antonio', null, null, 'Wilhermina Francisca de Molina Zuñiga — Mujer
Andrea Francisca de Fuentes Molina — Mujer', null, null, 'Andrea Francisca de Fuentes Molina.png', false, false, false, false, null),
('Andrea Jaqueline Jofre Aravena', null, '13 ago 1992', 'Mujer', null, '9 6525 6965', 'Jofre.aravena.an@gmail.com', 'PASA JE LOS HELECHOS 27
2720000 SANTO DOMINGO
VALPARAÍSO', null, null, 'Felipe Ignacio Riquelme Cornejo — Varón
Andrea Jaqueline Jofre Aravena — Mujer
Isidora Ignacia Riquelme Jofre — Mujer (17)', null, null, null, false, false, false, false, null),
('Andres Rolando Gonzalez Salazar', null, '23 sep 1947', 'Varón', null, null, null, 'San Antonio
VALPARAÍSO', null, null, 'Andres Rolando Gonzalez Salazar — Varón', null, null, null, false, false, false, false, null),
('Angelica de las Nieves Naranjo Gallardo', null, '13 nov 1976', 'Mujer', null, null, null, 'LAS PERDISES 1775
SAN ANTONIO
VALPARAÍSO', null, null, 'Segundo Andres Naranjo Alvarez — Varón
Gloria Virginia de Naranjo Gallardo — Mujer
Angelica de las Nieves Naranjo Gallardo — Mujer', null, null, null, false, false, false, false, null),
('Antonia Pascal Torres Silva', null, '24 dic 2011', 'Mujer', null, null, null, 'San Antonio
VALPARAÍSO', null, null, 'Evelyn Romina Silva Aguilar — Mujer
Antonia Pascal Torres Silva — Mujer (14)', null, null, null, false, false, false, false, null),
('Barbara de las Mercedes Santis Figueroa', null, '28 ene 1992', 'Mujer', null, '035289483', null, 'SOCOROMA 1959
LLO-LLEO
SAN ANTONIO', null, null, 'ELIANA de las MERCEDES FIGUEROA BERRIOS — Mujer
BARBARA de las MERCEDES SANTIS FIGUEROA — Mujer', null, null, null, false, false, false, false, null),
('Bernarda Cristina Hernandez Fuentes', null, '14 ago 1990', 'Mujer', null, '9 5764 8833', 'berny.hernandez@gmail.com', 'Los Espinos 939
san antonio
VALPARAÍSO', null, null, 'Bernarda Cristina Hernandez Fuentes — Mujer
Ahiza Lía Pizarro Hernández — Mujer (16)
Félix Francisco Julian Pizarro Hernández — Varón (14)', null, null, null, false, false, false, false, null),
('Bernarda de Lourdes Cardenas Zenteno', null, '4 ago 1976', 'Mujer', null, '9 6433 3199', 'bernarda76zenteno@gmail.com', 'Camino Las Salinas
Parcelación 58, Lote 67
Santo Domingo', null, null, 'Carlos Ivan Cárdenas Sanchez — Varón
Bernarda de Lourdes Cardenas Zenteno — Mujer
Ana Maria Vicencio Munita — Mujer
Thiago Cárdenas Zenteno — Mujer', null, null, null, false, false, false, false, null),
('Byron Broderyk Oroz Ravanal', null, '4 ago 1999', 'Varón', null, null, null, 'Camino rapel kilometro 4
Parcela 3 el convento
Santo domingo', null, null, 'Byron Broderyk Oroz Ravanal — Varón', null, null, null, false, false, false, false, null),
('Camila Fernanda Farias Alvarez', null, '29 nov 1988', 'Mujer', null, '9 8767 1422', 'camiferal@hotmail.com', 'Av. Cristo Rey 787
Llolleo
San Antonio', null, null, 'Camila Fernanda Farias Alvarez — Mujer
Mateo Alonso Bustos Farias — Varón (12)
Isabella Aurora Bustos Farias — Mujer (10)', null, null, null, false, false, false, false, null),
('Carla Belen Fajardo Lara', null, '6 nov 2000', 'Mujer', null, null, null, 'VALPARAÍSO', null, null, 'Teresita del Carmen de Fajardo Lara — Mujer
Nicolas Rodrigo Fajardo Lara — Varón
Carla Belen Fajardo Lara — Mujer', null, null, null, false, false, false, false, null),
('Carla Belén Oroz Ravanal', null, '3 ene 2012', 'Mujer', null, '035369133', null, 'Camino Rapel Kilometro 4, Parcela 3
El Convento Santo Domingo
San Antonio', null, null, 'Juan Carlos Oroz Caceres — Varón
Carla Belén Oroz Ravanal — Mujer (14)
Francisca Fernanda Oroz Ravanal — Mujer (13)', null, null, null, false, false, false, false, null),
('Carlos Francisco Martinez Martinez', null, '21 mar 1994', 'Varón', null, null, null, 'San Antonio
VALPARAÍSO', null, null, 'Carlos Francisco Martinez Martinez — Varón', null, null, null, false, false, false, false, null),
('Carlos Horacio Flores Martínez', null, '24 sep 2015', 'Varón', null, '9 8295 1847', null, 'Miguel Hernández 837
San Antonio
VALPARAÍSO', null, null, 'Mauricio Fernando Flores Rojas — Varón
Maritza Viviana Martinez de Flores — Mujer
Agustin Facundo Flores Martinez — Varón (12)
Carlos Horacio Flores Martínez — Varón (10)
Flores Martinez Consuelo Rosario — Mujer (8)', null, null, null, false, false, false, false, null),
('Carlos Ivan Cárdenas Sanchez', null, '26 ene 1973', 'Varón', null, null, null, 'Camino Las Salinas
Parcelación 58, Lote 67
Santo Domingo', null, null, 'Carlos Ivan Cárdenas Sanchez — Varón
Bernarda de Lourdes Cárdenas Sanchez — Mujer
Ana Maria Vicencio Munita — Mujer
Thiago Cárdenas Zenteno — Mujer', null, null, null, false, false, false, false, null),
('Carlos Samuel Contreras Gaona', null, '22 oct 2000', 'Varón', null, null, null, 'San Antonio', null, null, 'Carlos Samuel Contreras Gaona — Varón
María Alejandra Gaona Quintanilla — Mujer', null, null, null, false, false, false, false, null),
('Carmen Gloria Tapia Melendez', null, '16 jul 1967', 'Mujer', null, null, null, 'Parcela 17 camino a Campo Alegre Santo D
Valparaiso San Antonio
2720000 San Antonio Valparaiso', null, null, 'Carmen Gloria Tapia Melendez — Mujer', null, null, null, false, false, false, false, null),
('Carolina Andrea Fuentes Inayao', null, '29 abr 1991', 'Mujer', null, null, null, 'Lidia Gonzalez 734 Llolleo, San Antonio
San Antonio
VALPARAÍSO', null, null, 'Carolina Andrea Fuentes Inayao — Mujer
Benjamin Alexander Vasquez Zolorsa — Varón (9)', null, null, null, false, false, false, false, null),
('Caroline Pallan Rojas Koneffke', null, '29 oct 1985', 'Mujer', null, null, null, 'VALPARAÍSO', null, null, 'Caroline Pallan Rojas Koneffke — Mujer', null, null, null, false, false, false, false, null),
('Catalina Belen Gana Luna', null, '16 feb 1989', 'Mujer', null, '87137032', 'cataganaluna@gmail.com', 'Los Romeros 1832
San Antonio
VALPARAÍSO', null, null, 'Rene Alberto Gana Gatica — Varón
Silvana del Carmen de Gana Luna — Mujer
Rene Axel Gana Luna — Varón
Catalina Belen Gana Luna — Mujer
Gustavo Adolfo Gana Luna — Varón', null, null, null, false, false, false, false, null),
('Catherine Estrella de Carrasco Felix', null, '11 dic 1973', 'Mujer', null, '9 8512 7587', 'cathyfv@gmail.com', 'Los Lingues 1122, torre 8, dpto 303
0520000 San Antonio
VALPARAÍSO', null, null, 'Ivan Marcelo Carrasco Carrasco — Varón
Catherine Estrella de Carrasco Felix — Mujer
Mayte Belen Carrasco Felix — Mujer
Ivan Lev-Aaron Carrasco Felix — Varón', null, null, null, false, false, false, false, null),
('Cesar Aaron Miranda Cabello', null, '15 sep 1985', 'Varón', null, '9 6141 6040', 'cesarm.sud@gmail.com', 'Av. Cristo Rey 1012
San Antonio
VALPARAÍSO', null, null, 'Cesar Aaron Miranda Cabello — Varón
Laura Elizabeth de Miranda Acevedo — Mujer
Ignacio Aaron Miranda Acevedo — Varón (15)
Diego Aaron Miranda Acevedo — Varón (11)
Gonzalo Aaron Miranda Acevedo — Varón (7)
Nicolás Aaron Miranda Acevedo — Varón (4)', null, null, null, false, false, false, false, null),
('Cesar Alejandro Contreras Toro', null, '29 mar 1966', 'Varón', null, '9 8368 9145', null, 'Pje. El Estero 250 Lo Gallardo
Llolleo
SAN ANTONIO', null, null, 'Cesar Alejandro Contreras Toro — Varón', null, null, null, false, false, false, false, null),
('César Antonio Chavez Figueroa', null, '26 feb 1975', 'Varón', null, '9 5518 3228', 'bercalion@hotmail.com', 'Rafael De La Presa 576
san antonio
VALPARAÍSO', null, null, 'Cesar Antonio Chavez Figueroa — Varón', null, null, null, false, false, false, false, null),
('Clemira Ester Gonzalez Gonzalez', null, '21 dic 1974', 'Mujer', null, '81712096', null, 'Av San Juan 4610
San Antonio
VALPARAÍSO', null, null, 'Clemira Ester Gonzalez Gonzalez — Mujer
Gerardo Andres Quijada Gonzalez — Varón
Jesus Antonio Quijada Gonzalez — Varón', null, null, null, false, false, false, false, null),
('Constanza Alexandra Arce Vidal', null, '16 jun 1997', 'Mujer', null, '9 9241 3505', 'coni16_amiguiss@hotmail.com', 'La Vertiente 42 Los Maitenes Santo Domin
VALPARAÍSO', null, null, 'Constanza Alexandra Arce Vidal — Mujer', null, null, null, false, false, false, false, null),
('Constanza Antonia Astorga Hernandez', null, '20 jun 2009', 'Mujer', null, '9 7632 5132', 'cony.anto.2023@gmail.com', 'Los Alces 1405
San Antonio
VALPARAÍSO', null, null, 'Victor Orlando Acevedo Nacaratte — Varón
Nancy de Lourdes de Acevedo Rojas — Mujer
Yasna Karen Hernandez Rojas — Mujer
Constanza Antonia Astorga Hernandez — Mujer (17)', null, null, null, false, false, false, false, null),
('Cristian Alexander Cortez Benavente', null, '22 sep 2013', 'Varón', null, '9 6511 0607', null, 'Las Vertientes, Pasaje El Sauce 12
San Antonio
VALPARAÍSO', null, null, 'Cristian Alexander Cortez Benavente — Varón (12)', null, null, 'Cristian Alexander Cortez Benavente.png', false, false, false, false, null),
('Cristian Ignacio Ampuero Ampuero', null, '21 oct 1974', 'Varón', null, '9 7567 9989', 'campuero33@gmail.com', 'fundo la princesa
26000000 santo domingo
VALPARAÍSO', null, null, 'Cristian Ignacio Ampuero Ampuero — Varón', null, null, null, false, false, false, false, null),
('Cristian Pablo Ortega Silva', null, '9 nov 1987', 'Varón', null, null, null, 'San Antonio
VALPARAÍSO', null, null, 'Cristian Pablo Ortega Silva — Varón', null, null, null, false, false, false, false, null),
('Cristina del Carmen de Meza Soto', null, '1 dic 1953', 'Mujer', null, null, null, 'SAN ANTONIO
VALPARAÍSO', null, null, 'Abel del Transito Meza Toro — Varón
Cristina del Carmen de Meza Soto — Mujer', null, null, null, false, false, false, false, null),
('Da Via Rubio Lucas Maximiliano', null, '31 mayo 2023', 'Varón', null, '9 8817 2378', null, 'Socoroma 1875, viuda 10
San Antonio
VALPARAÍSO', null, null, 'Alvaro Alejandro Claudio Da Viá Campbell — Varón
Romina Rubio Luna — Mujer
Francesco Alejandro Da-Via Rubio — Varón (4)
Da Via Rubio Lucas Maximiliano — Varón (3)', null, null, 'Da Vía Rubio Lucas Maximiliano.jpeg', false, false, false, false, null),
('Dafnhe Monserrat Echaniz Maripangui', null, '11 dic 2003', 'Mujer', null, '9 8696 3235', 'yoongichiquibaby37@gmail.com', 'Las Vertientes, Pasaje El Sauce 04
San Antonio
VALPARAÍSO', null, null, 'Melissa Andrea Maripangui Vidal — Mujer
Maria Enriqueta Vidal Diaz — Mujer
Dafnhe Monserrat Echaniz Maripangui — Mujer
Yhanela Danaee Echaniz Maripangui — Mujer
Ian Aaron Cobarrubia Maripangui — Varón (14)
Yeiko Leon Cobarrubia Maripangui — Varón (12)', null, null, 'Dafnhe Monserrat Echaniz Maripangui.png', false, false, false, false, null),
('Daniel Andres Delgado Atenas', null, '20 mar 1986', 'Varón', null, '9 9946 8464', null, 'Larrain Gandarillas 1147
San Antonio', null, null, 'Daniel Andres Delgado Atenas — Varón
Diego Cristobal Delgado Atenas — Varón', null, null, null, false, false, false, false, null),
('Daniel Ignacio Wilches Martinez', null, '8 nov 2001', 'Varón', null, '9 8584 7923', 'Daniel.wilches001@gmail.com', 'Los Alerces 1026
SAN ANTONIO
VALPARAÍSO', null, null, 'Leonardo Nelson Wilches Santibañez — Varón
Eugenia Margarita de Wilches Martinez — Mujer
Daniel Ignacio Wilches Martinez — Varón', null, null, null, false, false, false, false, null),
('Daniela Beatriz Jeria Nuñez', null, '21 ene 1986', 'Mujer', null, null, null, 'San Antonio
VALPARAÍSO', null, null, 'Daniela Beatriz Jeria Nuñez — Mujer', null, null, 'Daniela Beatriz Jeria Nuñez.png', false, false, false, false, null),
('Daniela Francisca Vera Trincado', null, '22 dic 1985', 'Mujer', null, null, null, 'Llo-Lleo
San Antonio', null, null, 'Daniela Francisca Vera Trincado — Mujer', null, null, null, false, false, false, false, null),
('David Alejandro Quintanilla Meza', null, '22 mar 2005', 'Varón', null, '9 3261 5152', 'davidquintanillabmxing@gmail.com', 'VALPARAÍSO', null, 'Secretario de quórum de élderes', 'Alicia Cecilia Meza Pizarro — Mujer
David Alejandro Quintanilla Meza — Varón', null, null, null, false, false, false, true, 'Secretario élderes'),
('David Joel Ramos Torres', null, '31 oct 1998', 'Varón', null, null, null, 'Convento, Parcela 17
Santo Domingo', null, null, 'David Joel Ramos Torres — Varón', null, null, 'David Joel Ramos Torres.jpeg', false, false, false, false, null),
('Diego Aaron Miranda Acevedo', null, '6 nov 2014', 'Varón', null, '9 6141 6040', null, 'Av. Cristo Rey 1012
San Antonio
VALPARAÍSO', null, null, 'Cesar Aaron Miranda Cabello — Varón
Laura Elizabeth de Miranda Acevedo — Mujer
Ignacio Aaron Miranda Acevedo — Varón (15)
Diego Aaron Miranda Acevedo — Varón (11)
Gonzalo Aaron Miranda Acevedo — Varón (7)
Nicolás Aaron Miranda Acevedo — Varón (4)', null, null, 'Diego Aaron Miranda Acevedo.jpeg', false, false, false, false, null),
('Diego Cristobal Delgado Atenas', null, '20 mar 1991', 'Varón', null, '9 9946 8464', null, 'Larrain Gandarillas 1147
San Antonio', null, null, 'Daniel Andres Delgado Atenas — Varón
Diego Cristobal Delgado Atenas — Varón', null, null, null, false, false, false, false, null),
('Eduardo Alberto Castillo Fuentes', null, '23 mayo 1975', 'Varón', null, '9 9820 2164', 'educastifue@gmail.com', 'santo domingo
0520000 San Antonio
VALPARAÍSO', null, 'Segundo consejero de quórum de élderes', 'Eduardo Alberto Castillo Fuentes — Varón
Paola Andrea de Castillo Silva — Mujer
Pilar Catherine Castillo Silva — Mujer (17)
Amanda Carolina Castillo Silva — Mujer (14)
Andrea Eloísa Castillo Silva — Mujer (12)', null, null, 'Eduardo Alberto Castillo Fuentes.png', false, false, false, true, '2.do consejero élderes'),
('Eliana de las Mercedes Figueroa Berrios', null, '6 jul 1967', 'Mujer', null, '035289483', null, 'SOCOROMA 1959
LLO-LLEO
SAN ANTONIO', null, null, 'ELIANA de las MERCEDES FIGUEROA BERRIOS — Mujer
BARBARA de las MERCEDES SANTIS FIGUEROA — Mujer', null, null, null, false, false, false, false, null),
('Elias Benjamin Torres Jimenez', null, '2 sep 2021', 'Varón', null, '9 3073 0796', null, 'LOS CUERVOS 969
SAN ANTONIO
VALPARAÍSO', null, null, 'Jesus Alberto Torres Benavente — Varón
Maria Cristina Jimenez Ramirez — Mujer
Joaquin Ignacio Torres Jimenez — Varón (13)
Elias Benjamin Torres Jimenez — Varón (4)', null, null, 'Elias Benjamin Torres Jimenez.png', false, false, false, false, null),
('Eliette Belen Martez Hernadez', null, '11 feb 2016', 'Mujer', null, '9 4214 2771', null, 'CAMINO A EL CONVENTO 22
2720000 SANTO DOMINGO
VALPARAÍSO', null, null, 'Marjorie Andrea Hernández Arellano — Mujer
Eliette Belen Martez Hernadez — Mujer (10)', null, null, null, false, false, false, false, null),
('Elizabeth Macarena Jeria Zuñiga', null, '31 dic 1964', 'Mujer', null, '9 5979 4446', null, 'Arturo Phillips
Santo Domingo
VALPARAÍSO', null, null, 'Elizabeth Macarena Jeria Zuñiga — Mujer', null, null, null, false, false, false, false, null),
('Elvira del Carmen Nuñez Ureta', null, '15 jul 1948', 'Mujer', null, '9 3485 7455', null, 'Miguel Hernandez 786
Pob. El Retiro
San Antonio', null, null, 'Elvira del Carmen Nuñez Ureta — Mujer', null, null, 'Elvira del Carmen Núñez Ureta.jpeg', false, false, false, false, null),
('Ema Beatriz Soto Zuñiga', null, '29 oct 1962', 'Mujer', null, '9 7879 7760', 'ema_beatriz@yahoo.es', 'Las Torcazas 831
San Antonio', null, null, 'Manuel Jesus Ampuero Montes — Varón
Ema Beatriz Soto Zuñiga — Mujer
Manuel Ignacio Ampuero Soto — Varón', null, null, null, false, false, false, false, null),
('Emilia Monzerat Hernandez Jara', null, '15 nov 2009', 'Mujer', null, '(35) 229 2947', null, 'Llo Lleo, V Region', null, null, 'Juan Carlos las Torcazas — Varón
Emilia Monzerat Hernandez Jara — Mujer (16)', null, null, null, false, false, false, false, null),
('Emma Maritza de Pineda Urra', null, '5 mayo 1964', 'Mujer', null, null, null, 'a pedido del secretario del barrio
San Antonio
VALPARAÍSO', null, null, 'Sergio Enrique Pineda Soto — Varón
Emma Maritza de Pineda Urra — Mujer', null, null, 'Emma Maritza de Pineda Urra.jpeg', false, false, false, false, null),
('Ernesto Ulises Rodriguez Medel', null, '28 jul 1933', 'Varón', null, null, null, null, null, null, 'Ernesto Ulises Rodriguez Medel — Varón', null, null, null, false, false, false, false, null),
('Esteban Advis Jara', null, '18 sep 1988', 'Varón', null, '6071280', null, 'AVENIDA DEL LITORAL 335
2720000 SANTO DOMINGO
REGIÓN METROPOLITANA', null, null, 'Esteban Advis Jara — Varón', null, null, null, false, false, false, false, null),
('Eugenia Margarita de Wilches Martinez', null, '18 feb 1967', 'Mujer', null, '9 8394 5768', 'eugeniamartinez452@gmail.com', 'Los Alerces 1026
SAN ANTONIO
VALPARAÍSO', null, null, 'Leonardo Nelson Wilches Santibañez — Varón
Eugenia Margarita de Wilches Martinez — Mujer
Daniel Ignacio Wilches Martinez — Varón', null, null, 'Eugenia Margarita de Wilches Martínez.jpeg', false, false, false, false, null),
('Evelyn Romina Silva Aguilar', null, '26 dic 1990', 'Mujer', null, null, 'eve_1569_6@hotmail.com', 'San Antonio
VALPARAÍSO', null, null, 'Evelyn Romina Silva Aguilar — Mujer
Antonia Pascal Torres Silva — Mujer (14)', null, null, null, false, false, false, false, null),
('Evelyn Susana Riquelme Cuevas', null, '30 jul 1981', 'Mujer', null, '096685507', 'evelyn_sai@hotmail.com', 'Psj. El Rosal 125,
Santo Domingo
San Antonio', null, null, 'Evelyn Susana Riquelme Cuevas — Mujer', null, null, null, false, false, false, false, null),
('Felipe Ignacio Riquelme Cornejo', null, '17 jun 1992', 'Varón', null, '9 5003 0352', 'riquelme.felipe.18@gmail.com', 'PASA JE LOS HELECHOS 27
2720000 SANTO DOMINGO
VALPARAÍSO', null, null, 'Felipe Ignacio Riquelme Cornejo — Varón
Andrea Jaqueline Jofre Aravena — Mujer
Isidora Ignacia Riquelme Jofre — Mujer (17)', null, null, null, false, false, false, false, null),
('Felipe Osvaldo Cortez Vera', null, '29 mar 1988', 'Varón', null, null, 'cortezvera@gmail.com', 'Llolleo
San antonio', null, null, 'Felipe Osvaldo Cortez Vera — Varón
Sarah Nazaret Lassaube Lopez — Mujer
Sebastian Antonio Mori Lassaube — Varón
Luis Martin Lassaube Lassaube — Varón', null, null, null, false, false, false, false, null),
('Félix Francisco Julian Pizarro Hernández', null, '27 sep 2011', 'Varón', null, '9 5764 8833', null, 'Los Espinos 939
san antonio
VALPARAÍSO', null, null, 'Bernarda Cristina Hernandez Fuentes — Mujer
Ahiza Lía Pizarro Hernández — Mujer (16)
Félix Francisco Julian Pizarro Hernández — Varón (14)', null, null, null, false, false, false, false, null),
('Fernanda Belen Meza Soto', null, '3 jun 1999', 'Mujer', null, '9 7278 9605', 'mezafernanda07@gmail.com', 'Las Hortencias 46
Santo Domingo
VALPARAÍSO', null, null, 'Juan Antonio Meza Meza — Varón
Margarita del Pilar de Meza Soto — Mujer
Fernanda Belen Meza Soto — Mujer', null, null, 'Fernanda Belén Meza Soto.png', false, false, false, false, null),
('Fernando Andres Soto Gazul', null, '24 sep 1991', 'Varón', null, '9 8546 7687', 'eldersoto1876@hotmail.com', 'LOS CONDORES 1876
SAN ANTONIO
VALPARAÍSO', null, 'Presidente de quórum de élderes', 'Jose Miguel Soto Soto — Varón
Alina Yolanda de Soto Gazul — Mujer
Jose Miguel Soto Gazul — Varón
Fernando Andres Soto Gazul — Varón', null, null, null, false, false, false, true, 'Presidente élderes'),
('Fernando Antonio Cerda Paredes', null, '24 feb 1986', 'Varón', null, null, null, 'Santa Elba 26
Poblacion Rafael Moreno
1 Santo Domingo', null, null, 'Ulises Gonzalo Cerda Paredes — Varón
Fernando Antonio Cerda Paredes — Varón', null, null, 'Fernando Andrés Soto Gazul.png', false, false, false, false, null),
('Flores Martinez Consuelo Rosario', null, '23 nov 2017', 'Mujer', null, '9 8295 1847', null, 'Miguel Hernández 837
San Antonio
VALPARAÍSO', null, null, 'Mauricio Fernando Flores Rojas — Varón
Maritza Viviana Martinez de Flores — Mujer
Agustin Facundo Flores Martinez — Varón (12)
Carlos Horacio Flores Martínez — Varón (10)
Flores Martinez Consuelo Rosario — Mujer (8)', null, null, null, false, false, false, false, null),
('Francesco Alejandro Da-via Rubio', null, '21 oct 2021', 'Varón', null, '9 8817 2378', null, 'Socoroma 1875, viuda 10
San Antonio
VALPARAÍSO', null, null, 'Alvaro Alejandro Claudio Da Viá Campbell — Varón
Romina Rubio Luna — Mujer
Francesco Alejandro Da-Via Rubio — Varón (4)
Da Via Rubio Lucas Maximiliano — Varón (3)', null, null, 'Francesco Alejandro Davía Rubio.jpeg', false, false, false, false, null),
('Francisca Fernanda Oroz Ravanal', null, '25 jul 2013', 'Mujer', null, '035369133', null, 'Camino Rapel Kilometro 4, Parcela 3
El Convento Santo Domingo
San Antonio', null, null, 'Juan Carlos Oroz Caceres — Varón
Carla Belén Oroz Ravanal — Mujer (14)
Francisca Fernanda Oroz Ravanal — Mujer (13)', null, null, null, false, false, false, false, null),
('Fredy Felipe Silva Osorio', null, '19 feb 1990', 'Varón', null, null, null, 'VALPARAÍSO', null, null, 'Fredy Felipe Silva Osorio — Varón', null, null, null, false, false, false, false, null),
('Gabriela Evelyn Vargas Soto', null, '7 ene 1991', 'Mujer', null, null, null, 'San Antonio', null, null, 'Gabriela Evelyn Vargas Soto — Mujer', null, null, null, false, false, false, false, null),
('Gaspar Emilio Cofre Hernández', null, '9 jul 2010', 'Varón', null, '9 4569 4346', 'martezgaspar015@gmail.com', 'Camino Lo Gallardo 1610, San Antonio Val
VALPARAISO
Provincia de PANAMÁ', null, null, 'Gaspar Emilio Cofre Hernández — Varón (16)', null, null, null, false, false, false, false, null),
('Gerardo Andres Aburto Velasquez', null, '29 mar 1983', 'Varón', null, '9 9840 9340', 'gmonry@gmail.com', 'salinas del convento, parcela 160 g
Santo Domingo
Santodomingo', null, null, 'Gerardo Andres Aburto Velasquez — Varón', null, null, null, false, false, false, false, null),
('Gerardo Andres Quijada Gonzalez', null, '29 oct 1992', 'Varón', null, '98959684', null, 'Av San Juan 4610
San Antonio
VALPARAÍSO', null, null, 'Clemira Ester Gonzalez Gonzalez — Mujer
Gerardo Andres Quijada Gonzalez — Varón
Jesus Antonio Quijada Gonzalez — Varón', null, null, null, false, false, false, false, null),
('Gladys de las Mercedes Vera Diaz', null, '8 feb 1960', 'Mujer', null, null, null, 'Av. Chile /718 Llo Lleo
San Antonio
VALPARAÍSO', null, null, 'Gladys de las Mercedes de Vera Diaz — Mujer', null, null, null, false, false, false, false, null),
('Gladys del Carmen Zuñiga Castillo', null, '31 mayo 1938', 'Mujer', null, '2878706', null, '56959794446
Arturo Phillips
Santo Domingo', null, null, 'Gladys del Carmen Zuñiga Castillo — Mujer', null, null, null, false, false, false, false, null),
('Gloria Virginia de Naranjo Gallardo', null, '14 oct 1948', 'Mujer', null, null, null, 'LAS PERDISES 1775
SAN ANTONIO
VALPARAÍSO', null, null, 'Segundo Andres Naranjo Alvarez — Varón
Gloria Virginia de Naranjo Gallardo — Mujer
Angelica de las Nieves Naranjo Gallardo — Mujer', null, null, null, false, false, false, false, null),
('Gonzalo Aaron Miranda Acevedo', null, '30 ago 2018', 'Varón', null, '9 6141 6040', null, 'Av. Cristo Rey 1012
San Antonio
VALPARAÍSO', null, null, 'Cesar Aaron Miranda Cabello — Varón
Laura Elizabeth de Miranda Acevedo — Mujer
Ignacio Aaron Miranda Acevedo — Varón (15)
Diego Aaron Miranda Acevedo — Varón (11)
Gonzalo Aaron Miranda Acevedo — Varón (7)
Nicolás Aaron Miranda Acevedo — Varón (4)', null, null, 'Gonzalo Aaron Miranda Acevedo.jpeg', false, false, false, false, null),
('Graciela Rosa Cáceres Monarde', null, '26 feb 1945', 'Mujer', null, '9 9705 5123', null, 'PASA JE EL CONVENTO 4
2660000 SAN ANTONIO
VALPARAÍSO', null, null, 'Graciela Rosa Cáceres Monarde — Mujer', null, null, null, false, false, false, false, null),
('Gustavo Adolfo Gana Luna', null, '11 mar 2001', 'Varón', null, null, 'Gustavo.gana.luna@missionary.org', 'Los Romeros 1832
San Antonio
VALPARAÍSO', null, null, 'Rene Alberto Gana Gatica — Varón
Silvana del Carmen de Gana Luna — Mujer
Rene Axel Gana Luna — Varón
Catalina Belen Gana Luna — Mujer
Gustavo Adolfo Gana Luna — Varón', null, null, null, false, false, false, false, null),
('Hector Rigoberto Rocha Corral', null, '14 oct 1958', 'Varón', null, '9 6195 9823', null, 'Pasaje Las Loycas 1751
San Antonio
Llolleo', null, null, 'Hector Rigoberto Rocha Corral — Varón', null, null, null, false, false, false, false, null),
('Ian Aaron Cobarrubia Maripangui', null, '2 mar 2012', 'Varón', null, '9 8696 3235', null, 'Las Vertientes, Pasaje El Sauce 04
San Antonio
VALPARAÍSO', null, null, 'Melissa Andrea Maripangui Vidal — Mujer
Maria Enriqueta Vidal Diaz — Mujer
Dafnhe Monserrat Echaniz Maripangui — Mujer
Yhanela Danaee Echaniz Maripangui — Mujer
Ian Aaron Cobarrubia Maripangui — Varón (14)
Yeiko Leon Cobarrubia Maripangui — Varón (12)', null, null, null, false, false, false, false, null),
('Ignacio Aaron Miranda Acevedo', null, '31 oct 2010', 'Varón', null, '9 3959 3582', 'chubacan3@gmail.com', 'Av. Cristo Rey 1012
San Antonio
VALPARAÍSO', null, null, 'Cesar Aaron Miranda Cabello — Varón
Laura Elizabeth de Miranda Acevedo — Mujer
Ignacio Aaron Miranda Acevedo — Varón (15)
Diego Aaron Miranda Acevedo — Varón (11)
Gonzalo Aaron Miranda Acevedo — Varón (7)
Nicolás Aaron Miranda Acevedo — Varón (4)', null, null, 'Ignacio Aaron Miranda Acevedo.jpeg', false, false, false, false, null),
('Ignacio Alberto Vega Badilla', null, '15 dic 1979', 'Varón', null, null, null, 'Campiña 2, Llolleo
San Antonio', null, null, 'Ignacio Alberto Vega Badilla — Varón', null, null, null, false, false, false, false, null),
('Ignacio Juan Caceres Olivera', null, '6 sep 2005', 'Varón', null, '9 9877 8056', null, 'San Antonio
VALPARAÍSO', null, null, 'Silvia Georgina Olivera Delgado — Mujer
Ignacio Juan Caceres Olivera — Varón
Felipe Octavio Caceres Olivera — Varón (11)', null, null, null, false, false, false, false, null),
('Iris del Pilar Duque Caceres', null, '28 ago 1960', 'Mujer', null, null, 'Pilipilipili1960@gmail.com', 'Cristo Rey 986
Llo Lleo
San Antonio', null, null, 'Iris del Pilar Duque Caceres — Mujer', null, null, 'Iris del Pilar Duque Cáceres.jpeg', false, false, false, false, null),
('Irma de las Mercedes Jara Rojas', null, '7 dic 1971', 'Mujer', null, null, null, 'SAN ANTONIO', null, null, 'Irma de las Mercedes Jara Rojas — Mujer', null, null, null, false, false, false, false, null),
('Isabella Aurora Bustos Farias', null, '9 dic 2015', 'Mujer', null, '9 8767 1422', null, 'Av. Cristo Rey 787
Llolleo
San Antonio', null, null, 'Camila Fernanda Farias Alvarez — Mujer
Mateo Alonso Bustos Farias — Varón (12)
Isabella Aurora Bustos Farias — Mujer (10)', null, null, null, false, false, false, false, null),
('Isabella Selenne Acevedo Labrin', null, '16 jun 2017', 'Mujer', null, '9 7562 9326', 'valejandroa@gmail.com', 'Los Alces 1405
Llolleo
0 San Antonio', null, null, 'Victor Alejandro Acevedo Rojas — Varón
Isabella Selenne Acevedo Labrin — Mujer (9)', null, null, null, false, false, false, false, null),
('Ivan Lev-Aaron Carrasco Felix', null, '9 dic 2003', 'Varón', null, '9 7920 5681', 'felixcarrascoivan@gmail.com', 'Los Lingues 1122, torre 8, dpto 303
0520000 San Antonio
VALPARAÍSO', null, null, 'Ivan Marcelo Carrasco Carrasco — Varón
Catherine Estrella de Carrasco Felix — Mujer
Mayte Belen Carrasco Felix — Mujer
Ivan Lev-Aaron Carrasco Felix — Varón', null, null, null, false, false, false, false, null),
('Ivan Marcelo Carrasco Carrasco', null, '19 ago 1968', 'Varón', null, '9 8512 7587', 'ivanmarcelosud@gmail.com', 'Los Lingues 1122, torre 8, dpto 303
0520000 San Antonio
VALPARAÍSO', null, null, 'Ivan Marcelo Carrasco Carrasco — Varón
Catherine Estrella de Carrasco Felix — Mujer
Mayte Belen Carrasco Felix — Mujer
Ivan Lev-Aaron Carrasco Felix — Varón', null, null, null, false, false, false, false, null),
('Javiera Beatriz Vidal Basso', null, '1 feb 2000', 'Mujer', null, '77319797', null, 'El Sauce 941
Llo Lleo
San Antonio', null, null, 'Javiera Beatriz Vidal Basso — Mujer', null, null, null, false, false, false, false, null),
('Jennifer Odette Ravanal Echeverria', null, '18 mayo 1976', 'Mujer', null, '63137902', 'jenravanalecheverria@gmail.com', 'Camino rapel kilometro 4
Parcela 3 el convento
Santo domingo', null, null, 'Jennifer Odette Ravanal Echeverria — Mujer
Treacy Scarlett Oroz Ravanal — Mujer', null, null, null, false, false, false, false, null),
('Jesus Alberto Torres Benavente', null, '27 feb 1978', 'Varón', null, '9 3073 0796', 'JTORRES70916@HOTMAIL.COM', 'LOS CUERVOS 969
SAN ANTONIO
VALPARAÍSO', null, null, 'Jesus Alberto Torres Benavente — Varón
Maria Cristina Jimenez Ramirez — Mujer
Joaquin Ignacio Torres Jimenez — Varón (13)
Elias Benjamin Torres Jimenez — Varón (4)', null, null, 'Jesús Alberto Torres Benavente.png', false, false, false, false, null),
('Jesus Antonio Quijada Gonzalez', null, '19 abr 2002', 'Varón', null, '98959684', null, 'Av San Juan 4610
San Antonio
VALPARAÍSO', null, null, 'Clemira Ester Gonzalez Gonzalez — Mujer
Gerardo Andres Quijada Gonzalez — Varón
Jesus Antonio Quijada Gonzalez — Varón', null, null, null, false, false, false, false, null),
('Jhon Alexander Sandoval Basulto', null, '25 dic 2003', 'Varón', null, '9 3451 1629', 'alex.887sandoval@gmail.com', 'Los Alerces 45 (Pasaje 1)
Santo Domingo
San Antonio', null, null, 'Jhon Alexander Sandoval Basulto — Varón', null, null, null, false, false, false, false, null),
('Joaquin Ignacio Torres Jimenez', null, '5 ago 2013', 'Varón', null, '9 3073 0796', 'joaquintorresjimenez0@gmail.com', 'LOS CUERVOS 969
SAN ANTONIO
VALPARAÍSO', null, null, 'Jesus Alberto Torres Benavente — Varón
Maria Cristina Jimenez Ramirez — Mujer
Joaquin Ignacio Torres Jimenez — Varón (13)
Elias Benjamin Torres Jimenez — Varón (4)', null, null, 'Joaquín Ignacio Torres Jiménez.png', false, false, false, false, null),
('Jorge Armando Guerrero Ortega', null, '26 feb 1970', 'Varón', null, '9 2231 8982', null, 'Los Algarrobos 1079 Pob Los Alerces Llol
san antonio
VALPARAÍSO', null, null, 'Jorge Armando Guerrero Ortega — Varón', null, null, null, false, false, false, false, null),
('Jorge Jose Vera Delgado', null, '9 mayo 1962', 'Varón', null, '9 4888 3286', null, '5417 Camino A las Casas de San Juan
San Juan, Llolleo San Antonio
2663507 San Juan de Llolleo', null, null, 'Jorge Jose Vera Delgado — Varón', null, null, null, false, false, false, false, null),
('Jose Fernando Antonio Santacana Salinas', null, '31 ago 1958', 'Varón', null, '9 6227 1467', null, 'LAS CAMELIAS 6
Santo Domingo
SAN ANTONIO', null, null, 'Jose Fernando Antonio Santacana Salinas — Varón', null, null, null, false, false, false, false, null),
('José Ignacio Cartagena Meza', null, '17 feb 2021', 'Varón', null, '9 4279 3823', null, 'Las Torcazas N°576
Llolleo
San Antonio', null, null, 'Roxanna Soledad Meza Morales — Mujer
Luz Eliana Paillamil Meza — Mujer
Laura Agustina de Jesus Parraguez Meza — Mujer (15)
José Ignacio Cartagena Meza — Varón (5)', null, null, null, false, false, false, false, null),
('Jose Javier Castro Torres', null, '20 mayo 1994', 'Varón', null, '9 9509 0173', 'javier_146_sc@hotmail.com', 'ALBERTO LLONA 15 80
MAIPU
VALPARAÍSO', null, null, 'Jose Javier Castro Torres — Varón', null, null, null, false, false, false, false, null),
('Jose Miguel Soto Gazul', null, '21 mar 1990', 'Varón', null, '9 5968 9285', 'josesotolda@hotmail.com', 'LOS CONDORES 1876
SAN ANTONIO
VALPARAÍSO', null, null, 'Jose Miguel Soto Soto — Varón
Alina Yolanda de Soto Gazul — Mujer
Jose Miguel Soto Gazul — Varón
Fernando Andres Soto Gazul — Varón', null, null, null, false, false, false, false, null),
('Jose Miguel Soto Soto', null, '25 dic 1970', 'Varón', null, '9 6869 5978', 'eldersoto1876@hotmail.com', 'LOS CONDORES 1876
SAN ANTONIO
VALPARAÍSO', null, null, 'Jose Miguel Soto Soto — Varón
Alina Yolanda de Soto Gazul — Mujer
Jose Miguel Soto Gazul — Varón
Fernando Andres Soto Gazul — Varón', null, null, null, false, false, false, false, null),
('Juan Antonio Meza Meza', null, '19 jul 1966', 'Varón', null, '9 4163 8971', 'jmeza.sud@hotmail.com', 'Las Hortencias 46
Santo Domingo
VALPARAÍSO', null, null, 'Juan Antonio Meza Meza — Varón
Margarita del Pilar de Meza Soto — Mujer
Fernanda Belen Meza Soto — Mujer', null, null, null, false, false, false, false, null),
('Juan Carlos Armijo Acevedo', null, '26 ago 1969', 'Varón', null, '9 8282 0288', null, 'Central 1568 Viuda Vi Llo Lleo
San Antonio
VALPARAÍSO', null, null, 'Juan Carlos Armijo Acevedo — Varón
Juanita Ester Ugarte Herrera — Mujer', null, null, null, false, false, false, false, null),
('Juan Carlos Caceres Martinez', null, '13 abr 1974', 'Varón', null, '9 6277 6934', 'j.carloscaceres111@gmail.com', 'Pasaje victoria 1026
san antonio
VALPARAÍSO', null, null, 'Juan Carlos Caceres Martinez — Varón', null, null, null, false, false, false, false, null),
('Juan Carlos Hernandez Donoso', null, '14 ago 1965', 'Varón', null, '83438225', null, null, null, null, 'Juan Carlos Hernandez Donoso', null, null, null, false, false, false, false, null),
('Juan Carlos Oroz Caceres', null, '10 abr 1972', 'Varón', null, '035369133', null, 'Camino Rapel Kilometro 4, Parcela 3
El Convento Santo Domingo
San Antonio', null, null, 'Juan Carlos Oroz Caceres — Varón
Carla Belén Oroz Ravanal — Mujer (14)
Francisca Fernanda Oroz Ravanal — Mujer (13)', null, null, null, false, false, false, false, null),
('Juan Carlos Taborga Navia', null, '15 mayo 1957', 'Varón', null, '9 5049 0392', null, 'AV CRISTO REY 1006
Llolleo
SAN ANTONIO', null, null, 'Juan Carlos Taborga Navia — Varón
Nora del Carmen Riquelme Inostroza — Mujer', null, null, null, false, false, false, false, null),
('Juan Carlos Zuñiga Lisboa', null, '27 dic 1971', 'Varón', null, null, null, 'El Sauce 955 Llo-Lleo
san antonio
VALPARAÍSO', null, null, 'Juan Carlos Zuñiga Lisboa — Varón', null, null, null, false, false, false, false, null),
('Juan Francisco Bravo Golling', null, '15 nov 1965', 'Varón', null, '9 4408 4806', 'ravioleslanona@gmail.com', 'Los Abedules 1094
Poblacion Baquedano
San Antonio', null, null, 'Juan Francisco Bravo Golling — Varón', null, null, null, false, false, false, false, null),
('Juan Francisco Vera Pavez', null, '2 ene 1954', 'Varón', null, '66027715', null, 'Los Abedules 1094
Poblacion Baquedano
San antonio', null, null, 'Juan Francisco Vera Pavez — Varón', null, null, null, false, false, false, false, null),
('Juan Manuel Martinez Castillo', null, '1 ago 1957', 'Varón', null, null, null, 'Llo-lleo
VALPARAÍSO', null, null, 'Juan Manuel Martinez Castillo — Varón', null, null, null, false, false, false, false, null),
('Juan Pablo Enrique Avendaño Avendaño', null, '30 abr 2003', 'Varón', null, '9 3520 1901', 'juanpablo.avendano04@gmail.com', 'Los Alerces 1032
san antonio
VALPARAÍSO', null, null, 'Juan Pablo Enrique Avendaño Avendaño — Varón', null, null, null, false, false, false, false, null),
('Juanita Ester Ugarte Herrera', null, '31 jul 1992', 'Mujer', null, '9 8282 0288', null, 'Central 1568 Viuda Vi Llo Lleo
San Antonio
VALPARAÍSO', null, null, 'Juan Carlos Armijo Acevedo — Varón
Juanita Ester Ugarte Herrera — Mujer', null, null, null, false, false, false, false, null),
('Julieta Ignacia Soto Velásquez', null, '14 dic 2017', 'Mujer', null, '035585409', null, 'El Sauce 1384
San Antonio
VALPARAÍSO', null, null, 'Oscar Ignacio Soto Soto — Varón
Maria Jose Velasquez Contreras — Mujer
Julieta Ignacia Soto Velásquez — Mujer (8)', null, null, null, false, false, false, false, null),
('Julio Alberto Farias Menares', null, '16 mar 1937', 'Varón', null, '2281252', 'camiferal@hotmail.com', 'Cristo Rey 787
SAN ANTONIO
VALPARAÍSO', null, null, 'Julio Alberto Farias Menares — Varón', null, null, null, false, false, false, false, null),
('Karen Andrea Diaz Fuenzalida', null, '7 ene 1983', 'Mujer', null, null, null, 'Sauce 1589
SAN ANTONIO
VALPARAÍSO', null, null, 'KAREN ANDREA DIAZ FUENZALIDA — Mujer', null, null, null, false, false, false, false, null),
('Karen Liliana Márquez Grande', null, '10 ago 2000', 'Mujer', null, '9 8428 9308', 'karenmarquezgrande@gmail.com', 'La Vertiente 78
2720700 San Antonio
VALPARAÍSO', null, null, 'Karen Liliana Márquez Grande — Mujer', null, null, null, false, false, false, false, null),
('Katherine Yamilet Marquez Grande', null, '14 feb 1995', 'Mujer', null, '9 9891 4323', null, 'Los Alerces 1026
san antonio
VALPARAÍSO', null, null, 'Leonardo Esteban Wilches Martinez — Varón
Katherine Yamilet Marquez Grande — Mujer', null, null, null, false, false, false, false, null),
('Kevin Alan Robinson Tilleria', null, '9 ene 1992', 'Varón', null, '9 6249 8385', null, 'CALLE LOS CIRUELOS 126
VALPARAÍSO
VALPARAÍSO', null, null, 'Kevin Alan Robinson Tilleria — Varón', null, null, null, false, false, false, false, null),
('Laura Agustina de Jesus Parraguez Meza', null, '16 abr 2011', 'Mujer', null, '9 4279 3823', null, 'Las Torcazas N°576
Llolleo
San Antonio', null, null, 'Roxanna Soledad Meza Morales — Mujer
Luz Eliana Paillamil Meza — Mujer
Laura Agustina de Jesus Parraguez Meza — Mujer (15)
José Ignacio Cartagena Meza — Varón (5)', null, null, null, false, false, false, false, null),
('Laura Elizabeth de Miranda Acevedo', null, '15 mar 1986', 'Mujer', null, '88757131', 'laurasudingenieros@gmail.com', 'Av. Cristo Rey 1012
San Antonio
VALPARAÍSO', null, null, 'Cesar Aaron Miranda Cabello — Varón
Laura Elizabeth de Miranda Acevedo — Mujer
Ignacio Aaron Miranda Acevedo — Varón (15)
Diego Aaron Miranda Acevedo — Varón (11)
Gonzalo Aaron Miranda Acevedo — Varón (7)
Nicolás Aaron Miranda Acevedo — Varón (4)', null, null, null, false, false, false, false, null),
('Laura Lavinia de Rubio Luna', null, '16 oct 1957', 'Mujer', null, '035283398', 'lluna.belmar@gmail.com', 'Socoroma 1875
Viuda 10, Llo Lleo
SAN ANTONIO', null, null, 'Laura Lavinia de Rubio Luna — Mujer', null, null, null, false, false, false, false, null),
('Leon Baltazar Maureira Peñailillo', null, '5 feb 2016', 'Varón', null, '9 5334 3291', null, 'CALLE ALCALDE DOCTOR OLEGARIO HENRÍQUEZ
ESCALANTE 695
SAN ANTONIO
VALPARAÍSO', null, null, 'Veronica Elizabeth de Peñailillo Meza — Mujer
Nahomi Maira Pañailillo Meza — Mujer
Leon Baltazar Maureira Peñailillo — Varón (10)', null, null, 'León Baltazar maureira peñailillo.png', false, false, false, false, null),
('Leonardo Esteban Wilches Martinez', null, '15 dic 1993', 'Varón', null, '9 9520 0657', 'leo.e.wm@gmail.com', 'Los Alerces 1026
san antonio
VALPARAÍSO', null, null, 'Leonardo Esteban Wilches Martinez — Varón
Katherine Yamilet Marquez Grande — Mujer', null, null, 'Leonardo Esteban Wilches Martínez.jpeg', false, false, false, false, null),
('Leonardo Gerardo Vera Atenas', null, '3 mayo 1977', 'Varón', null, '73871096', 'leoveraatenas@yahoo.es', 'AV SAN JUAN 4690
SAN ANTONIO
VALPARAÍSO', null, null, 'Rafael Leopoldo Vera Flores — Varón
Leonardo Gerardo Vera Atenas — Varón
Vanessa Esmeralda Vera Atenas — Mujer', null, null, null, false, false, false, false, null),
('Leonardo Nelson Wilches Santibañez', null, '3 ago 1966', 'Varón', null, '9 9549 3880', 'leowilches@gmail.com', 'Los Alerces 1026
SAN ANTONIO
VALPARAÍSO', null, 'Primer consejero del obispado', 'Leonardo Nelson Wilches Santibañez — Varón
Eugenia Margarita de Wilches Martinez — Mujer
Daniel Ignacio Wilches Martinez — Varón', null, null, 'Leonardo Nelson Wilches Santibáñez.png', false, true, false, false, '1.er consejero'),
('Luciano Rafael Antonio Hernandez Inostroza', null, '18 oct 2016', 'Varón', null, null, null, 'Parcela 65
SAN ANTONIO', null, null, 'Marco Antonio Hernandez Ruiz — Varón
Marisol Andrea de Hernandez Ruiz — Mujer
Mateo Alonso Hernández Inostroza — Varón
Milena Paz Andrea Hernandez Inostroza — Mujer (12)
Luciano Rafael Antonio Hernandez Inostroza — Varón (9)', null, null, 'Luciano Rafael Antonio Hernández Inostroza.jpeg', false, false, false, false, null),
('Lucresia del Carmen de Delgado Atenas', null, '25 sep 1957', 'Mujer', null, '9 9413 8562', 'lucatenas.alvarez@gmail.com', 'Larraín Gandarillas 1147
Llo Lleo
San Antonio', null, 'Presidenta de Sociedad de Socorro', 'Lucresia del Carmen de Delgado Atenas — Mujer
Patricio Alejandro Delgado Atenas — Varón', null, null, 'Lucresia del Carmen de Delgado Atenas.jpeg', false, false, true, false, 'Presidenta SS'),
('Luis Alberto Cornejo Mancilla', null, '16 jul 1966', 'Varón', null, '85827893', 'luis.cornejo.mancilla@gmail.com', 'Las Bandurrias 67
Sector I-23
2660000 Santo Domingo', null, 'Obispo', 'Luis Alberto Cornejo Mancilla — Varón
Patricia Elsa Maria de Cornejo Zablach — Mujer', null, null, null, false, true, false, false, 'Obispo'),
('Luis Mariano Hinojosa Cerda', null, '12 jul 1961', 'Varón', null, '9 8738 2048', 'luism.hinojosacerda@gmail.com', 'Inmaculada Concepcion 689
Llolleo
San antonio', null, 'Primer consejero de quórum de élderes', 'Luis Mariano Hinojosa Cerda — Varón', null, null, null, false, false, false, true, '1.er consejero élderes'),
('Luis Martin Lassaube Lassaube', null, '26 ene 2007', 'Varón', null, null, null, 'Llolleo
San antonio', null, null, 'Felipe Osvaldo Cortez Vera — Varón
Sarah Nazaret Lassaube Lopez — Mujer
Sebastian Antonio Mori Lassaube — Varón
Luis Martin Lassaube Lassaube — Varón', null, null, 'Luis Alberto Cornejo Mancilla.png', false, false, false, false, null),
('Luisa del Carmen Peso Huenchuan', null, '16 mar 1980', 'Mujer', null, null, null, null, null, null, 'Luisa del Carmen Peso Huenchuan — Mujer
Melanie Soledad Coral Gutierrez Peso — Mujer', null, null, null, false, false, false, false, null),
('Luz Angelica de Pardo Millares', null, '30 mayo 1950', 'Mujer', null, '(35) 228 5210', null, 'el convento
san antonio
VALPARAÍSO', null, null, 'Luz Angelica de Pardo Millares — Mujer
Olga Luisa Pardo Millares — Mujer
Margarita Alejandra Pardo Perez — Mujer
Paula Andrea Pardo Perez — Mujer', null, null, null, false, false, false, false, null),
('Luz Eliana Paillamil Meza', null, '13 sep 2005', 'Mujer', null, '9 4279 3823', null, 'Las Torcazas N°576
Llolleo
San Antonio', null, null, 'Roxanna Soledad Meza Morales — Mujer
Luz Eliana Paillamil Meza — Mujer
Laura Agustina de Jesus Parraguez Meza — Mujer (15)
José Ignacio Cartagena Meza — Varón (5)', null, null, null, false, false, false, false, null),
('Luz Maria de Berrios Peña', null, '28 jun 1943', 'Mujer', null, null, null, 'SAN ANTONIO
VALPARAÍSO', null, null, 'Luz Maria de Berrios Peña — Mujer', null, null, null, false, false, false, false, null),
('Manuel Antonio Vasquez Jerez', null, '21 ago 1973', 'Varón', null, '098754294', null, 'El Sauce 1375
Llo-lleo
VALPARAÍSO', null, null, 'Manuel Antonio Vasquez Jerez — Varón
Marisol del Carmen de Vasquez Soto — Mujer
Vasquez Soto Renata Antonio — Mujer (11)', null, null, null, false, false, false, false, null),
('Manuel Armando Perez Ormazabal', null, '12 ago 1982', 'Varón', null, null, null, '4 79 Calle
VALPARAÍSO', null, null, 'Manuel Armando Perez Ormazabal — Varón', null, null, null, false, false, false, false, null),
('Manuel Ignacio Ampuero Soto', null, '19 mayo 1997', 'Varón', null, '9 6349 5205', null, 'Las Torcazas 831
San Antonio', null, null, 'Manuel Jesus Ampuero Montes — Varón
Ema Beatriz Soto Zuñiga — Mujer
Manuel Ignacio Ampuero Soto — Varón', null, null, null, false, false, false, false, null),
('Manuel Jesus Ampuero Montes', null, '22 ene 1973', 'Varón', null, '9 6349 5205', 'manuel_ampuero@yahoo.es', 'Las Torcazas 831
San Antonio', null, null, 'Manuel Jesus Ampuero Montes — Varón
Ema Beatriz Soto Zuñiga — Mujer
Manuel Ignacio Ampuero Soto — Varón', null, null, null, false, false, false, false, null),
('Marcela Antonia Pardo Martinez', null, '10 oct 2001', 'Mujer', null, '9 3558 4384', 'marcelaantonia.sud@gmail.com', 'Los Alces 1568
Viuda 9
VALPARAÍSO', null, null, 'Viviana Jacqueline Martinez Castillo — Mujer
Marcela Antonia Pardo Martinez — Mujer', null, null, null, false, false, false, false, null),
('Marcela Ivon Donaire Valladares', null, '12 jul 1983', 'Mujer', null, null, null, 'Ginebra 1547
Llo Lleo
VALPARAÍSO', null, null, 'Marcela Ivon Donaire Valladares — Mujer', null, null, null, false, false, false, false, null),
('Marcelina del Carmen de Soto Soto', null, '16 dic 1962', 'Mujer', null, '035585409', null, 'El Sauce 1384
San Antonio
VALPARAÍSO', null, null, 'Marcelina del Carmen de Soto Soto — Mujer
Romina Ester Soto Soto — Mujer
Nicolas Rodrigo Soto Soto — Varón', null, null, null, false, false, false, false, null),
('Marco Antonio Hernandez Ruiz', null, '22 ene 1975', 'Varón', null, null, 'mhernandezchile@gmail.com', 'Parcela 65
SAN ANTONIO', null, null, 'Marco Antonio Hernandez Ruiz — Varón
Marisol Andrea de Hernandez Ruiz — Mujer
Mateo Alonso Hernández Inostroza — Varón
Milena Paz Andrea Hernandez Inostroza — Mujer (12)
Luciano Rafael Antonio Hernandez Inostroza — Varón (9)', null, null, 'Marco Antonio Hernandez Ruiz.png', false, false, false, false, null),
('Marco Antonio Marco Antonio Hernandez Trujillo', null, '14 nov 1980', 'Varón', null, '9 6646 2986', null, 'Pje Los Cipreses S/N Parcela 8
2660000 San Antonio
VALPARAÍSO', null, null, 'Marco Antonio Hernandez Trujillo — Varón', null, null, null, false, false, false, false, null),
('Margarita Alejandra Pardo Perez', null, '26 jul 2000', 'Mujer', null, '(35) 228 5210', null, 'el convento
san antonio
VALPARAÍSO', null, null, 'Luz Angelica de Pardo Millares — Mujer
Olga Luisa Pardo Millares — Mujer
Margarita Alejandra Pardo Perez — Mujer
Paula Andrea Pardo Perez — Mujer', null, null, null, false, false, false, false, null),
('Margarita del Pilar de Meza Soto', null, '23 abr 1967', 'Mujer', null, '97646298', 'pilarsita40_8@hotmail.com', 'Las Hortencias 46
Santo Domingo
VALPARAÍSO', null, null, 'Juan Antonio Meza Meza — Varón
Margarita del Pilar de Meza Soto — Mujer
Fernanda Belen Meza Soto — Mujer', null, null, 'Margarita del Pilar de Meza Soto.jpeg', false, false, false, false, null),
('Margarita Elena de Soto Abarca', null, '7 feb 1943', 'Mujer', null, '035441975', null, 'CALLE LAS HORTENSIAS 32
SANTO DOMINGO
VALPARAÍSO', null, null, 'Margarita Elena de Soto Abarca — Mujer', null, null, null, false, false, false, false, null),
('Margarita Elizabeth de Bugueño Hormazabal', null, '5 abr 1965', 'Mujer', null, '64927811', null, 'Ginebra 1901
Llo Lleo
San Antonio', null, null, 'Margarita Elizabeth de Bugueño Hormazabal — Mujer
Alejandro Ignacio Bugueño Hormazabal — Varón', null, null, null, false, false, false, false, null),
('María Alejandra Gaona Quintanilla', null, '9 jun 1973', 'Mujer', null, null, null, 'San Antonio', null, null, 'Carlos Samuel Contreras Gaona — Varón
María Alejandra Gaona Quintanilla — Mujer', null, null, null, false, false, false, false, null),
('Maria Cristina Jimenez Ramirez', null, '16 dic 1978', 'Mujer', null, '9 6454 3790', 'mcrisss@gmail.com', 'LOS CUERVOS 969
SAN ANTONIO
VALPARAÍSO', null, null, 'Jesus Alberto Torres Benavente — Varón
Maria Cristina Jimenez Ramirez — Mujer
Joaquin Ignacio Torres Jimenez — Varón (13)
Elias Benjamin Torres Jimenez — Varón (4)', null, null, 'María Cristina Jiménez Ramírez.png', false, false, false, false, null),
('Maria del Carmen Alfaro de Flores', null, '5 mayo 1953', 'Mujer', null, '24475315', null, 'llolleo
san antonio
VALPARAÍSO', null, null, 'Maria del Carmen Alfaro de Flores — Mujer', null, null, null, false, false, false, false, null),
('Maria Enriqueta Vidal Diaz', null, '10 oct 1953', 'Mujer', null, '9 8696 3235', null, 'Las Vertientes, Pasaje El Sauce 04
San Antonio
VALPARAÍSO', null, null, 'Melissa Andrea Maripangui Vidal — Mujer
Maria Enriqueta Vidal Diaz — Mujer
Dafnhe Monserrat Echaniz Maripangui — Mujer
Yhanela Danaee Echaniz Maripangui — Mujer
Ian Aaron Cobarrubia Maripangui — Varón (14)
Yeiko Leon Cobarrubia Maripangui — Varón (12)', null, null, null, false, false, false, false, null),
('Maria Fernanda Duran Verdugo', null, '7 feb 1963', 'Mujer', null, null, null, 'San Antonio', null, null, 'Maria Fernanda Duran Verdugo — Mujer', null, null, null, false, false, false, false, null),
('Maria Jose Velasquez Contreras', null, '27 nov 1994', 'Mujer', null, '035585409', 'maria.jvc27@gmail.com', 'El Sauce 1384
San Antonio
VALPARAÍSO', null, null, 'Oscar Ignacio Soto Soto — Varón
Maria Jose Velasquez Contreras — Mujer
Julieta Ignacia Soto Velásquez — Mujer (8)', null, null, null, false, false, false, false, null),
('Marielín Alejandra Bracho de Jimenez', null, '11 feb 1990', 'Mujer', null, '9 2391 4255', 'Brachomarielin@gmail.com', 'Larraín Gandarillas 539
san antonio
VALPARAÍSO', null, null, 'Marlon Jose Jimenez Dominguez — Varón
Marielín Alejandra Bracho de Jimenez — Mujer', null, null, null, false, false, false, false, null),
('Marina Enriqueta Martinez Castillo', null, '28 ago 1965', 'Mujer', null, '9 7420 2247', null, 'Alces 1561
Llo-Lleo
VALPARAÍSO', null, null, 'Marina Enriqueta Martinez Castillo — Mujer', null, null, null, false, false, false, false, null),
('Mario Ismael Silva Chavez', null, '12 abr 1947', 'Varón', null, null, null, 'Ave. Litoral 170
St. Domingo
REGIÓN METROPOLITANA', null, null, 'Mario Ismael Silva Chavez — Varón', null, null, null, false, false, false, false, null),
('Marisol Andrea de Hernandez Inostroza', null, '19 jun 1979', 'Mujer', null, '9 4627 9905', null, 'LAS COLINAS DE SANTO DOMINGO
Parcela 65
SAN ANTONIO', null, null, 'Marco Antonio Hernandez Ruiz — Varón
Marisol Andrea de Hernandez Inostroza — Mujer
Mateo Alonso Hernández Inostroza — Varón
Milena Paz Andrea Hernandez Inostroza — Mujer (12)
Luciano Rafael Antonio Hernandez Inostroza — Varón (9)', null, null, 'Marisol Andrea de Hernandez Inostroza.jpeg', false, false, false, false, null),
('Marisol del Carmen de Vasquez Soto', null, '1 feb 1973', 'Mujer', null, '098754294', null, 'El Sauce 1375
Llo-lleo
VALPARAÍSO', null, null, 'Manuel Antonio Vasquez Jerez — Varón
Marisol del Carmen de Vasquez Soto — Mujer
Vasquez Soto Renata Antonio — Mujer (11)', null, null, null, false, false, false, false, null),
('Maritza Viviana Martinez de Flores', null, '25 nov 1980', 'Mujer', null, '9 8988 7455', 'mmaritzam@gmail.com', 'Miguel Hernández 837
San Antonio
VALPARAÍSO', null, null, 'Mauricio Fernando Flores Rojas — Varón
Maritza Viviana Martinez de Flores — Mujer
Agustin Facundo Flores Martinez — Varón (12)
Carlos Horacio Flores Martínez — Varón (10)
Flores Martinez Consuelo Rosario — Mujer (8)', null, null, null, false, false, false, false, null),
('Marjorie Andrea Hernández Arellano', null, '7 mayo 1985', 'Mujer', null, '9 4214 2771', 'marjoriehernandezarellano@gmail.com', 'CAMINO A EL CONVENTO 22
2720000 SANTO DOMINGO
VALPARAÍSO', null, null, 'Marjorie Andrea Hernández Arellano — Mujer
Eliette Belen Martez Hernadez — Mujer (10)', null, null, null, false, false, false, false, null),
('Marlon Jose Jimenez Dominguez', null, '20 ene 1984', 'Varón', null, '9 4110 6738', 'marlonjimenez224@gmail.com', 'Larraín Gandarillas 539
san antonio
VALPARAÍSO', null, null, 'Marlon Jose Jimenez Dominguez — Varón
Marielín Alejandra Bracho de Jimenez — Mujer', null, null, null, false, false, false, false, null),
('Marta Irene Celis Gongora', null, '29 jul 1958', 'Mujer', null, '9897771781', 'marta1620celis@gmail.com', 'Los Condores 1620
San Antonio
VALPARAÍSO', null, null, 'Marta Irene Celis Gongora — Mujer
Alejandro Alberto Sanchez Celis — Varón', null, null, null, false, false, false, false, null),
('Mateo Alonso Bustos Farias', null, '19 ago 2013', 'Varón', null, '2281252', 'camiferal@hotmail.com', 'Av. Cristo Rey 787
Llolleo
San Antonio', null, null, 'Camila Fernanda Farias Alvarez — Mujer
Mateo Alonso Bustos Farias — Varón (12)
Isabella Aurora Bustos Farias — Mujer (10)', null, null, null, false, false, false, false, null),
('Mateo Alonso Hernández Inostroza', null, '20 sep 2006', 'Varón', null, null, 'mateoahernandez13@gmail.com', 'Parcela 65
SAN ANTONIO', null, null, 'Marco Antonio Hernandez Ruiz — Varón
Marisol Andrea de Hernandez Ruiz — Mujer
Mateo Alonso Hernández Inostroza — Varón
Milena Paz Andrea Hernandez Inostroza — Mujer (12)
Luciano Rafael Antonio Hernandez Inostroza — Varón (9)', null, null, 'Mateo Alonso Hernández Inostroza.png', false, false, false, false, null),
('Matías Reinaldo Montecinos Montecinos', null, '1 dic 2006', 'Varón', null, '75127433', null, 'La vertiente 119, San Antonio
2663528 San Antonio
ARAUCANÍA', null, null, 'Matías Reinaldo Montecinos Montecinos — Varón', null, null, null, false, false, false, false, null),
('Matilde Josefina Chourio de Bracho', null, '13 mar 1957', 'Mujer', null, '9 5528 6222', 'Brachomarielin@gmail.com', 'Larraín Gandarillas 539
san antonio
VALPARAÍSO', null, null, 'Matilde Josefina Chourio de Bracho — Mujer', null, null, null, false, false, false, false, null),
('Mauricio Fernando Flores Rojas', null, '6 ene 1973', 'Varón', null, '9 8295 1847', 'maurflores@gmail.com', 'Miguel Hernández 837
San Antonio
VALPARAÍSO', null, null, 'Mauricio Fernando Flores Rojas — Varón
Maritza Viviana Martinez de Flores — Mujer
Agustin Facundo Flores Martinez — Varón (12)
Carlos Horacio Flores Martínez — Varón (10)
Flores Martinez Consuelo Rosario — Mujer (8)', null, null, null, false, false, false, false, null),
('Maximiliano Antonio Berridos Arancibia', null, '26 mayo 2014', 'Varón', null, '9 2166 9697', null, 'CALLE LOS ALCES 1561
SAN ANTONIO
VALPARAÍSO', null, null, 'Pascal Noemi Tobar Arancibia — Mujer (13)
Maximiliano Antonio Berridos Arancibia — Varón (12)', null, null, null, false, false, false, false, null),
('Mayte Belen Carrasco Felix', null, '23 sep 1996', 'Mujer', null, '9 8530 6208', 'maytecarrascofelix@gmail.com', 'Los Lingues 1122, torre 8, dpto 303
0520000 San Antonio
VALPARAÍSO', null, null, 'Ivan Marcelo Carrasco Carrasco — Varón
Catherine Estrella de Carrasco Felix — Mujer
Mayte Belen Carrasco Felix — Mujer
Ivan Lev-Aaron Carrasco Felix — Varón', null, null, null, false, false, false, false, null),
('Melanie Soledad Coral Om Gutierrez Peso', null, '7 jul 2000', 'Mujer', null, null, null, null, null, null, 'Luisa del Carmen Peso Huenchuan — Mujer
Melanie Soledad Coral Gutierrez Peso — Mujer', null, null, null, false, false, false, false, null),
('Melissa Andrea Maripangui Vidal', null, '11 mayo 1984', 'Mujer', null, '9 8696 3235', null, 'Las Vertientes, Pasaje El Sauce 04
San Antonio
VALPARAÍSO', null, null, 'Melissa Andrea Maripangui Vidal — Mujer
Maria Enriqueta Vidal Diaz — Mujer
Dafnhe Monserrat Echaniz Maripangui — Mujer
Yhanela Danaee Echaniz Maripangui — Mujer
Ian Aaron Cobarrubia Maripangui — Varón (14)
Yeiko Leon Cobarrubia Maripangui — Varón (12)', null, null, null, false, false, false, false, null),
('Michel Andreina Colmenarez Chirinos', null, '9 mar 2000', 'Mujer', null, '9 6425 9945', 'chirinosandreina052@gmail.com', 'Arz Juan González 535
San Antonio
VALPARAÍSO', null, null, 'Michel Andreina Colmenarez Chirinos — Mujer', null, null, null, false, false, false, false, null),
('Milena Paz Andrea Om Hernandez Inostroza', null, '5 dic 2013', 'Mujer', null, '96495706', 'Milena.hernandez@cphp.cl', 'Parcela 65
SAN ANTONIO', null, null, 'Marco Antonio Hernandez Ruiz — Varón
Marisol Andrea de Hernandez Ruiz — Mujer
Mateo Alonso Hernández Inostroza — Varón
Milena Paz Andrea Hernandez Inostroza — Mujer (12)
Luciano Rafael Antonio Hernandez Inostroza — Varón (9)', null, null, null, false, false, false, false, null),
('Monica Alejandra de Orozco Frias', null, '15 jul 1961', 'Mujer', null, '62375684', null, 'Los Maitenes 2
La Araucaria 9
Santo domingo', null, null, 'Monica Alejandra de Orozco Frias — Mujer', null, null, null, false, false, false, false, null),
('Monica Elena Luna Belmar', null, '18 nov 1954', 'Mujer', null, '9 7810 3132', 'fer.mezas@alumnos.duoc.cl', 'LOS HALCONES 1738
SAN ANTONIO
VALPARAÍSO', null, null, 'Monica Elena Luna Belmar — Mujer', null, null, null, false, false, false, false, null),
('Nahomi Maira Pañailillo Meza', null, '8 abr 1989', 'Mujer', null, '9 5334 3291', 'penailillo.nahomi@gmail.com', 'CALLE ALCALDE DOCTOR OLEGARIO HENRÍQUEZ
ESCALANTE 695
SAN ANTONIO
VALPARAÍSO', null, null, 'Veronica Elizabeth de Peñailillo Meza — Mujer
Nahomi Maira Pañailillo Meza — Mujer
Leon Baltazar Maureira Peñailillo — Varón (10)', null, null, 'Nahomi Maira Pañailillo Meza.png', false, false, false, false, null),
('Nancy de Lourdes de Acevedo Rojas', null, '19 ago 1957', 'Mujer', null, '9 7632 5132', null, 'Los Alces 1405
San Antonio
VALPARAÍSO', null, null, 'Victor Orlando Acevedo Nacaratte — Varón
Nancy de Lourdes de Acevedo Rojas — Mujer
Yasna Karen Hernandez Rojas — Mujer
Constanza Antonia Astorga Hernandez — Mujer (17)', null, null, 'Nancy de Lourdes de Acevedo Rojas.png', false, false, false, false, null),
('Nicolás Aaron Miranda Acevedo', null, '23 ago 2021', 'Varón', null, '9 6141 6040', 'cesarsud@hotmail.com', 'Av. Cristo Rey 1012
San Antonio
VALPARAÍSO', null, null, 'Cesar Aaron Miranda Cabello — Varón
Laura Elizabeth de Miranda Acevedo — Mujer
Ignacio Aaron Miranda Acevedo — Varón (15)
Diego Aaron Miranda Acevedo — Varón (11)
Gonzalo Aaron Miranda Acevedo — Varón (7)
Nicolás Aaron Miranda Acevedo — Varón (4)', null, null, 'Nicolás Aarón Miranda Acevedo.jpeg', false, false, false, false, null),
('Nicolas Rodrigo Fajardo Lara', null, '18 jul 1996', 'Varón', null, null, null, 'VALPARAÍSO', null, null, 'Teresita del Carmen de Fajardo Lara — Mujer
Nicolas Rodrigo Fajardo Lara — Varón
Carla Belen Fajardo Lara — Mujer', null, null, null, false, false, false, false, null),
('Nicolas Rodrigo Soto Soto', null, '24 feb 2001', 'Varón', null, '035585409', null, 'El Sauce 1384
San Antonio
VALPARAÍSO', null, null, 'Marcelina del Carmen de Soto Soto — Mujer
Romina Ester Soto Soto — Mujer
Nicolas Rodrigo Soto Soto — Varón', null, null, null, false, false, false, false, null),
('Nicole Emilia Contreras Berrios', null, '26 dic 1991', 'Mujer', null, '9 8459 1278', null, 'a pedido del secretario
San Antonio
VALPARAÍSO', null, null, 'Nicole Emilia Contreras Berrios — Mujer', null, null, null, false, false, false, false, null),
('Nora Angelica Martinez Riquelme', null, '17 ene 1971', 'Mujer', null, '9 7852 8784', null, 'CRISTO REY 1006
SAN ANTONIO
VALPARAÍSO', null, null, 'Nora Angelica Martinez Riquelme — Mujer', null, null, null, false, false, false, false, null),
('Nora del Carmen Riquelme Inostroza', null, '2 jul 1939', 'Mujer', null, '9 7852 8784', null, 'AV CRISTO REY 1006
Llolleo
SAN ANTONIO', null, null, 'Juan Carlos Taborga Navia — Varón
Nora del Carmen Riquelme Inostroza — Mujer', null, null, null, false, false, false, false, null),
('Olga Luisa Pardo Millares', null, '21 sep 1970', 'Mujer', null, '(35) 228 5210', 'olguitaprima@gmail.com', 'el convento
san antonio
VALPARAÍSO', null, null, 'Luz Angelica de Pardo Millares — Mujer
Olga Luisa Pardo Millares — Mujer
Margarita Alejandra Pardo Perez — Mujer
Paula Andrea Pardo Perez — Mujer', null, null, null, false, false, false, false, null),
('Oscar Ignacio Soto Soto', null, '30 jul 1992', 'Varón', null, '035585409', 'oscar.igss2092@gmail.com', 'El Sauce 1384
San Antonio
VALPARAÍSO', null, null, 'Oscar Ignacio Soto Soto — Varón
Maria Jose Velasquez Contreras — Mujer
Julieta Ignacia Soto Velásquez — Mujer (8)', null, null, null, false, false, false, false, null),
('Oscar Ricardo Faris Bustos', null, '20 nov 1987', 'Varón', null, '9 7389 3200', null, 'AVENIDA CAUPOLICÁN 696
SAN ANTONIO
VALPARAÍSO', null, null, 'Sofia de los Angeles Bustos Opitz — Mujer
Oscar Ricardo Faris Bustos — Varón', null, null, null, false, false, false, false, null),
('Paola Andrea de Castillo Silva', null, '27 ene 1972', 'Mujer', null, '9 4273 8087', 'andreasilva38@gmail.com', 'santo domingo
0520000 San Antonio
VALPARAÍSO', null, null, 'Eduardo Alberto Castillo Fuentes — Varón
Paola Andrea de Castillo Silva — Mujer
Pilar Catherine Castillo Silva — Mujer (17)
Amanda Carolina Castillo Silva — Mujer (14)
Andrea Eloísa Castillo Silva — Mujer (12)', null, null, 'Paola Andrea de Castillo Silva.jpeg', false, false, false, false, null),
('Pascal Noemi Tobar Arancibia', null, '4 feb 2013', 'Mujer', null, '9 2166 9697', null, 'CALLE LOS ALCES 1561
SAN ANTONIO
VALPARAÍSO', null, null, 'Pascal Noemi Tobar Arancibia — Mujer (13)
Maximiliano Antonio Tobar Arancibia — Varón (12)', null, null, null, false, false, false, false, null),
('Patricia Elsa Maria de Cornejo Zablach', null, '27 nov 1958', 'Mujer', null, '9 8592 7893', 'itzel_patty@hotmail.com', 'Las Bandurrias 67
Sector I-23
2660000 Santo Domingo', null, null, 'Luis Alberto Cornejo Mancilla — Varón
Patricia Elsa Maria de Cornejo Zablach — Mujer', null, null, null, false, false, false, false, null),
('Patricio Alejandro Delgado Atenas', null, '3 jun 1982', 'Varón', null, '9 9413 8562', 'pato.delgado.a@gmail.com', 'Larraín Gandarillas 1147
Llo Lleo
San Antonio', null, null, 'Lucresia del Carmen de Delgado Atenas — Mujer
Patricio Alejandro Delgado Atenas — Varón', null, null, null, false, false, false, false, null),
('Paula Andrea Pardo Perez', null, '26 jul 2000', 'Mujer', null, '(35) 228 5210', null, 'el convento
san antonio
VALPARAÍSO', null, null, 'Luz Angelica de Pardo Millares — Mujer
Olga Luisa Pardo Millares — Mujer
Margarita Alejandra Pardo Perez — Mujer
Paula Andrea Pardo Perez — Mujer', null, null, null, false, false, false, false, null),
('Paulina de los Angeles Berrios Meza', null, '4 jun 1987', 'Mujer', null, null, null, 'calle el sauce , san antonio
san antonio
VALPARAÍSO', null, null, 'Paulina de los Angeles Berrios Meza — Mujer
Agustin Javier Ignacio Berrios Berrios — Varón (18)', null, null, null, false, false, false, false, null),
('Pedro Mauricio Hernández González', null, '1 mayo 1972', 'Varón', null, '9 7726 2737', null, '764 Lidia Gonzále
san antonio
VALPARAÍSO', null, null, 'Pedro Mauricio Hernández González — Varón', null, null, null, false, false, false, false, null),
('Pilar Catherine Castillo Silva', null, '9 oct 2008', 'Mujer', null, '9 9820 2164', null, 'santo domingo
0520000 San Antonio
VALPARAÍSO', null, null, 'Eduardo Alberto Castillo Fuentes — Varón
Paola Andrea de Castillo Silva — Mujer
Pilar Catherine Castillo Silva — Mujer (17)
Amanda Carolina Castillo Silva — Mujer (14)
Andrea Eloísa Castillo Silva — Mujer (12)', null, null, null, false, false, false, false, null),
('Rachel Jasmin Vidal Martinez', null, '25 nov 1981', 'Mujer', null, '35288069', null, 'Los Alces 1533
San Antonio
VALPARAÍSO', null, null, 'Rachel Jasmin Vidal Martinez — Mujer
Raul Alfredo Vidal Martinez — Varón
RODRIGO SEBASTIAN VIDAL MARTINEZ — Varón', null, null, null, false, false, false, false, null),
('Rafael Leopoldo Mercedes de Vera Flores', null, '6 ene 1949', 'Varón', null, null, 'leoveraatenas@yahoo.es', 'AV SAN JUAN 4690
SAN ANTONIO
VALPARAÍSO', null, null, 'Rafael Leopoldo Vera Flores — Varón
Leonardo Gerardo Vera Atenas — Varón
Vanessa Esmeralda Vera Atenas — Mujer', null, null, null, false, false, false, false, null),
('Raul Alfredo Vidal Martinez', null, '5 jun 1987', 'Varón', null, '35288069', null, 'Los Alces 1533
San Antonio
VALPARAÍSO', null, null, 'Rachel Jasmin Vidal Martinez — Mujer
Raul Alfredo Vidal Martinez — Varón
RODRIGO SEBASTIAN VIDAL MARTINEZ — Varón', null, null, null, false, false, false, false, null),
('Raúl Antonio Arce Huerta', null, '23 sep 1969', 'Varón', null, '9 9241 3505', 'raulantonioarce@gmail.com', 'Camino la Media Luna
Lote 3 , Parcela 10
Santo Domingo', null, null, 'Raúl Antonio Arce Huerta — Varón', null, null, 'Raúl Antonio Arce Huerta.png', false, false, false, false, null),
('Rene Alberto Gana Gatica', null, '10 ene 1962', 'Varón', null, null, 'ragg62@gmail.com', 'Los Romeros 1832
San Antonio
VALPARAÍSO', null, null, 'Rene Alberto Gana Gatica — Varón
Silvana del Carmen de Gana Luna — Mujer
Rene Axel Gana Luna — Varón
Catalina Belen Gana Luna — Mujer
Gustavo Adolfo Gana Luna — Varón', null, null, null, false, false, false, false, null),
('Rene Axel Gana Luna', null, '23 ago 1985', 'Varón', null, '67288639', 're.gana@hotmail.com', 'Los Romeros 1832
San Antonio
VALPARAÍSO', null, null, 'Rene Alberto Gana Gatica — Varón
Silvana del Carmen de Gana Luna — Mujer
Rene Axel Gana Luna — Varón
Catalina Belen Gana Luna — Mujer
Gustavo Adolfo Gana Luna — Varón', null, null, null, false, false, false, false, null),
('Rita Esperanza Estrella Om Marsa Miranda', null, '8 jul 2005', 'Mujer', null, '092900684', null, 'cuncumen casa 32
San Antonio
VALPARAÍSO', null, null, 'Valeska del Carmen Miranda Loyola — Mujer
Rita Esperanza Estrella Marsa Miranda — Mujer', null, null, null, false, false, false, false, null),
('Rocio Rubio Luna', null, '16 oct 1993', 'Mujer', null, '9 7537 4437', null, 'Socoroma 1875
san antonio
VALPARAÍSO', null, null, 'Rocio Rubio Luna — Mujer', null, null, null, false, false, false, false, null),
('Rodrigo Andres Martinez Manosalva', null, '1 feb 1981', 'Varón', null, null, null, 'san juan sin numero
parcela 20 al costado condominio puertas
san antonio', null, null, 'Rodrigo Andres Martinez Manosalva — Varón', null, null, null, false, false, false, false, null),
('Rodrigo Sebastian Vidal Martinez', null, '11 jun 1995', 'Varón', null, '35288069', null, 'Los Alces 1533
San Antonio
VALPARAÍSO', null, null, 'Rachel Jasmin Vidal Martinez — Mujer
Raul Alfredo Vidal Martinez — Varón
RODRIGO SEBASTIAN VIDAL MARTINEZ — Varón', null, null, null, false, false, false, false, null),
('Romina Ester Soto Soto', null, '19 sep 1987', 'Mujer', null, '035585409', null, 'El Sauce 1384
San Antonio
VALPARAÍSO', null, null, 'Marcelina del Carmen de Soto Soto — Mujer
Romina Ester Soto Soto — Mujer
Nicolas Rodrigo Soto Soto — Varón', null, null, null, false, false, false, false, null),
('Romina Rubio Luna', null, '14 ago 1985', 'Mujer', null, '9 6534 5058', 'Educadora.rominarubio@gmail.co', 'Socoroma 1875, viuda 10
San Antonio
VALPARAÍSO', null, null, 'Alvaro Alejandro Claudio Da Viá Campbell — Varón
Romina Rubio Luna — Mujer
Francesco Alejandro Da-Via Rubio — Varón (4)
Da Via Rubio Lucas Maximiliano — Varón (3)', null, null, 'Romina Rubio Luna.jpeg', false, false, false, false, null),
('Rosa Natividad Herrera Ancain', null, '11 ene 1965', 'Mujer', null, '9 9393 9529', 'nauvoomapu@gmail.com', 'Parcelación El Gran Eucaliptus, parcela
El Convento, Santo Domingo
San Antonio', null, null, 'Rosa Natividad Herrera Ancain — Mujer', null, null, null, false, false, false, false, null),
('Rossana del Pilar de Robinson Tilleria', null, '16 abr 1963', 'Mujer', null, null, null, 'PASA JE LOS ALMENDROS 1870
SAN ANTONIO
VALPARAÍSO', null, null, 'Rossana del Pilar de Robinson Tilleria — Mujer', null, null, null, false, false, false, false, null),
('Roxanna Soledad Meza Morales', null, '30 oct 1990', 'Mujer', null, '9 4279 3823', 'rmezamorales@gmail.com', 'Las Torcazas N°576
Llolleo
San Antonio', null, null, 'Roxanna Soledad Meza Morales — Mujer
Luz Eliana Paillamil Meza — Mujer
Laura Agustina de Jesus Parraguez Meza — Mujer (15)
José Ignacio Cartagena Meza — Varón (5)', null, null, null, false, false, false, false, null),
('Sandra Jazmine de Vera Campos', null, '5 oct 1970', 'Mujer', null, null, null, 'san juan
san antonio
VALPARAÍSO', null, null, 'Veronica Paola Vera Campos — Mujer
Sandra Jazmine de Vera Campos — Mujer', null, null, null, false, false, false, false, null),
('Sandy Marion Ramirez Roa', null, '10 jul 1972', 'Mujer', null, '9 4800 0834', 'Sandymarionroa@gmail.com', 'Eucaliptus 090 Santo Domingo
San Antonio
VALPARAÍSO', null, null, 'Sandy Marion Ramirez Roa — Mujer', null, null, null, false, false, false, false, null),
('Santiago Solanille Clavero', null, '11 sep 1967', 'Varón', null, '9 8691 3353', 'santiago@solanille.com', 'ruta G-906 Km 1.7
parcela F-12
San Antonio', null, null, 'Santiago Solanille Clavero — Varón', null, null, 'Santiago Solanille Clavero.png', false, false, false, false, null),
('Sarah Nazaret Lassaube Lopez', null, '9 oct 1988', 'Mujer', null, null, null, 'Llolleo
San antonio', null, null, 'Felipe Osvaldo Cortez Vera — Varón
Sarah Nazaret Lassaube Lopez — Mujer
Sebastian Antonio Mori Lassaube — Varón
Luis Martin Lassaube Lassaube — Varón', null, null, null, false, false, false, false, null),
('Sebastian Andres de Jesus Hinojosa Cerda', null, '13 dic 1969', 'Varón', null, '62131703', 'sebastianhc13@gmail.com', 'Inmaculada Concepcion 689
Llolleo
San Antonio', null, 'Segundo consejero del obispado', 'Sebastian Andres de Jesus Hinojosa Cerda — Varón', null, null, null, false, true, false, false, '2.do consejero'),
('Sebastian Antonio Mori Lassaube', null, '3 jun 2003', 'Varón', null, null, 'Sebamorilassaube@gmail.com', 'Llolleo
San antonio', null, null, 'Felipe Osvaldo Cortez Vera — Varón
Sarah Nazaret Lassaube Lopez — Mujer
Sebastian Antonio Mori Lassaube — Varón
Luis Martin Lassaube Lassaube — Varón', null, null, null, false, false, false, false, null),
('Sebastian Ignacio Miranda Cabello', null, '4 sep 1997', 'Varón', null, '9 7226 3522', 'shebistiann@gmail.com', 'Ginebra 1511
Llo-lleo
VALPARAÍSO', null, null, 'Teresa Sandra Cabello Torres — Mujer
Sebastian Ignacio Miranda Cabello — Varón', null, null, null, false, false, false, false, null),
('Segundo Andres Naranjo Alvarez', null, '11 ene 1948', 'Varón', null, null, null, 'LAS PERDISES 1775
SAN ANTONIO
VALPARAÍSO', null, null, 'Segundo Andres Naranjo Alvarez — Varón
Gloria Virginia de Naranjo Gallardo — Mujer
Angelica de las Nieves Naranjo Gallardo — Mujer', null, null, null, false, false, false, false, null),
('Sergio Enrique Pineda Soto', null, '18 oct 1962', 'Varón', null, null, null, 'a pedido del secretario del barrio
San Antonio
VALPARAÍSO', null, null, 'Sergio Enrique Pineda Soto — Varón
Emma Maritza de Pineda Urra — Mujer', null, null, null, false, false, false, false, null),
('Silvana del Carmen de Gana Luna', null, '1 mayo 1961', 'Mujer', null, '9 7511 3538', 'silvygan@gmail.com', 'Los Romeros 1832
San Antonio
VALPARAÍSO', null, '2ª consejera de la Sociedad de Socorro', 'Rene Alberto Gana Gatica — Varón
Silvana del Carmen de Gana Luna — Mujer
Rene Axel Gana Luna — Varón
Catalina Belen Gana Luna — Mujer
Gustavo Adolfo Gana Luna — Varón', null, null, null, false, false, true, false, '2.ª consejera SS'),
('Silvia Georgina Olivera Delgado', null, '24 ago 1981', 'Mujer', null, null, null, 'San Antonio
VALPARAÍSO', null, null, 'Silvia Georgina Olivera Delgado — Mujer
Ignacio Juan Caceres Olivera — Varón
Felipe Octavio Caceres Olivera — Varón (11)', null, null, null, false, false, false, false, null),
('Smith las Mercedes Saint Julien', null, '15 sep 1980', 'Varón', null, null, null, 'El Sauce 599
VALPARAÍSO', null, null, 'Smith Saint Julien — Varón', null, null, null, false, false, false, false, null),
('Sofia de los Angeles Bustos Opitz', null, '17 jun 1965', 'Mujer', null, '9 7389 3200', null, 'AVENIDA CAUPOLICÁN 696
SAN ANTONIO
VALPARAÍSO', null, null, 'Sofia de los Angeles Bustos Opitz — Mujer
Oscar Ricardo Faris Bustos — Varón', null, null, null, false, false, false, false, null),
('Teresa Sandra Cabello Torres', null, '14 mar 1956', 'Mujer', null, '9 8541 1660', 'teresacabello2017@gmail.com', 'Ginebra 1511
Llo-lleo
VALPARAÍSO', null, '1ª consejera de la Sociedad de Socorro', 'Teresa Sandra Cabello Torres — Mujer
Sebastian Ignacio Miranda Cabello — Varón', null, null, null, false, false, true, false, '1.ª consejera SS'),
('Teresita del Carmen de Fajardo Lara', null, '18 ene 1978', 'Mujer', null, null, null, 'VALPARAÍSO', null, null, 'Teresita del Carmen de Fajardo Lara — Mujer
Nicolas Rodrigo Fajardo Lara — Varón
Carla Belen Fajardo Lara — Mujer', null, null, null, false, false, false, false, null),
('Thiago Cárdenas Zenteno', null, '1 mar 1998', 'Mujer', null, null, null, 'Camino Las Salinas
Parcelación 58, Lote 67
Santo Domingo', null, null, 'Carlos Ivan Cárdenas Sanchez — Varón
Bernarda de Lourdes Cárdenas Sanchez — Mujer
Ana Maria Vicencio Munita — Mujer
Thiago Cárdenas Zenteno — Mujer', null, null, null, false, false, false, false, null),
('Treacy Scarlett Oroz Ravanal', null, '27 ene 2001', 'Mujer', null, '63137902', 'jenravanalecheverria@gmail.com', 'Camino rapel kilometro 4
Parcela 3 el convento
Santo domingo', null, null, 'Jennifer Odette Ravanal Echeverria — Mujer
Treacy Scarlett Oroz Ravanal — Mujer', null, null, null, false, false, false, false, null),
('Ulises Gonzalo Cerda Paredes', null, '28 nov 1978', 'Varón', null, null, null, 'Santa Elba 26
Poblacion Rafael Moreno
1 Santo Domingo', null, null, 'Ulises Gonzalo Cerda Paredes — Varón
Fernando Antonio Cerda Paredes — Varón', null, null, null, false, false, false, false, null),
('Valeska del Carmen Miranda Loyola', null, '11 mayo 1970', 'Mujer', null, '092900684', null, 'cuncumen casa 32
San Antonio
VALPARAÍSO', null, null, 'Valeska del Carmen Miranda Loyola — Mujer
Rita Esperanza Estrella Marsa Miranda — Mujer', null, null, null, false, false, false, false, null),
('Vanessa Esmeralda Vera Atenas', null, '23 mayo 1989', 'Mujer', null, null, null, 'AV SAN JUAN 4690
SAN ANTONIO
VALPARAÍSO', null, null, 'Rafael Leopoldo Vera Flores — Varón
Leonardo Gerardo Vera Atenas — Varón
Vanessa Esmeralda Vera Atenas — Mujer', null, null, null, false, false, false, false, null),
('Vasquez Soto Renata Antonio', null, '10 dic 2014', 'Mujer', null, '098754294', null, 'El Sauce 1375
Llo-lleo
VALPARAÍSO', null, null, 'Manuel Antonio Vasquez Jerez — Varón
Marisol del Carmen de Vasquez Soto — Mujer
Vasquez Soto Renata Antonio — Mujer (11)', null, null, null, false, false, false, false, null),
('Veronica del Carmen Guardera Maldonado', null, '2 jul 1977', 'Mujer', null, null, null, '102
Santo Domingo', null, null, 'Veronica del Carmen Guardera Maldonado — Mujer', null, null, null, false, false, false, false, null),
('Veronica Elizabeth de Peñailillo Meza', null, '22 dic 1962', 'Mujer', null, '9 5334 3291', 'veronica.e.m.f.19@gmail.com', 'CALLE ALCALDE DOCTOR OLEGARIO HENRÍQUEZ
ESCALANTE 695
SAN ANTONIO
VALPARAÍSO', null, 'Secretaria de Sociedad de Socorro', 'Veronica Elizabeth de Peñailillo Meza — Mujer
Nahomi Maira Pañailillo Meza — Mujer
Leon Baltazar Maureira Peñailillo — Varón (10)', null, null, null, false, false, true, false, 'Secretaria SS'),
('Veronica Paola Vera Campos', null, '17 dic 1992', 'Mujer', null, null, 'familiavera74@hotmail.com', 'san juan
san antonio
VALPARAÍSO', null, null, 'Veronica Paola Vera Campos — Mujer
Sandra Jazmine de Vera Campos — Mujer', null, null, 'Verónica Elizabeth de Peñailillo Meza.png', false, false, false, false, null),
('Victor Alejandro Acevedo Rojas', null, '15 dic 1990', 'Varón', null, '9 7562 9326', null, 'Los Alces 1405
Llolleo
0 San Antonio', null, null, 'Victor Alejandro Acevedo Rojas — Varón
Isabella Selenne Acevedo Labrin — Mujer (9)', null, null, null, false, false, false, false, null),
('Victor Manuel Roman Jimenez', null, '13 abr 1981', 'Varón', null, '9 5778 0272', 'victorroman81@gmail.com', 'Medea 787 Llo Lleo
Llo Lleo
San Antonio', null, null, 'Victor Manuel Roman Jimenez — Varón', null, null, 'Víctor Manuel Román Jiménez.png', false, false, false, false, null),
('Victor Orlando Acevedo Nacaratte', null, '1 oct 1959', 'Varón', null, '9 7632 5132', 'orlandociclista59@hotmail.es', 'Los Alces 1405
San Antonio
VALPARAÍSO', null, null, 'Victor Orlando Acevedo Nacaratte — Varón
Nancy de Lourdes de Acevedo Rojas — Mujer
Yasna Karen Hernandez Rojas — Mujer
Constanza Antonia Astorga Hernandez — Mujer (17)', null, null, 'Víctor Orlando Acevedo Nacaratte.png', false, false, false, false, null),
('Viviana Jacqueline Martinez Castillo', null, '25 jun 1969', 'Mujer', null, '9 3558 4384', 'vivianamartinez.sud@gmail.com', 'Los Alces 1568
Viuda 9
VALPARAÍSO', null, null, 'Viviana Jacqueline Martinez Castillo — Mujer
Marcela Antonia Pardo Martinez — Mujer', null, null, null, false, false, false, false, null),
('Wilhermina Francisca de Molina Zuñiga', null, '28 ago 1941', 'Mujer', null, '2114181', null, 'Los Limites 1262
Llo Lleo
2660000 San Antonio', null, null, 'Wilhermina Francisca de Molina Zuñiga — Mujer
Andrea Francisca de Fuentes Molina — Mujer', null, null, null, false, false, false, false, null),
('Yasna Karen Hernandez Rojas', null, '10 sep 1982', 'Mujer', null, '9 7632 5132', null, 'Los Alces 1405
San Antonio
VALPARAÍSO', null, null, 'Victor Orlando Acevedo Nacaratte — Varón
Nancy de Lourdes de Acevedo Rojas — Mujer
Yasna Karen Hernandez Rojas — Mujer
Constanza Antonia Astorga Hernandez — Mujer (17)', null, null, null, false, false, false, false, null),
('Yeiko Leon Cobarrubia Maripangui', null, '9 sep 2013', 'Varón', null, '9 8696 3235', null, 'Las Vertientes, Pasaje El Sauce 04
San Antonio
VALPARAÍSO', null, null, 'Melissa Andrea Maripangui Vidal — Mujer
Maria Enriqueta Vidal Diaz — Mujer
Dafnhe Monserrat Echaniz Maripangui — Mujer
Yhanela Danaee Echaniz Maripangui — Mujer
Ian Aaron Cobarrubia Maripangui — Varón (14)
Yeiko Leon Cobarrubia Maripangui — Varón (12)', null, null, null, false, false, false, false, null),
('Yhanela Danaee Echaniz Maripangui', null, '15 nov 2007', 'Mujer', null, '9 8696 3235', 'yhanela21@gmail.com', 'Las Vertientes, Pasaje El Sauce 04
San Antonio
VALPARAÍSO', null, null, 'Melissa Andrea Maripangui Vidal — Mujer
Maria Enriqueta Vidal Diaz — Mujer
Dafnhe Monserrat Echaniz Maripangui — Mujer
Yhanela Danaee Echaniz Maripangui — Mujer
Ian Aaron Cobarrubia Maripangui — Varón (14)
Yeiko Leon Cobarrubia Maripangui — Varón (12)', null, null, null, false, false, false, false, null);
