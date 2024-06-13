CREATE DATABASE vinos;
USE vinos;

CREATE TABLE vinos (
id int auto_increment primary key,
nombre varchar (45) not null,
tipo varchar (45) not null,
denominacion_origen varchar (100) not null,
bodega varchar (100) not null,
nota_cata int not null
);

INSERT INTO vinos (nombre, tipo, denominacion_origen, bodega, nota_cata)
VALUES ('Prado Rey', 'Tinto', 'Ribera del Duero', 'Pradorey', 90 );

INSERT INTO vinos (nombre, tipo, denominacion_origen, bodega, nota_cata)
VALUES ('Ramón Bilbao Crianza', 'Tinto', 'Rioja', 'Ramón Bilbao', 91 );

INSERT INTO vinos (nombre, tipo, denominacion_origen, bodega, nota_cata)
VALUES ('Protos Roble', 'Tinto', 'Ribera del Duero', 'Protos', 91 );

INSERT INTO vinos (nombre, tipo, denominacion_origen, bodega, nota_cata)
VALUES ('Sommos Varietales', 'Blanco', 'Somontano', 'Sommos', 90 );

INSERT INTO vinos (nombre, tipo, denominacion_origen, bodega, nota_cata)
VALUES ('El vino de las nieves', 'Blanco', 'Somontano', 'Bal Minuta', 90 );

INSERT INTO vinos (nombre, tipo, denominacion_origen, bodega, nota_cata)
VALUES ('Santiago Ruiz Rosal', 'Blanco', 'Rías Baixas', 'LAN', 91 );



