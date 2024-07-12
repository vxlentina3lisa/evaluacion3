CREATE DATABASE mascotas;

\c mascotas;
CREATE table usuario(
  id        SERIAL,
	nombre	varchar(50) 		NOT NULL,
  email     VARCHAR(50)   NOT NULL UNIQUE,
  pass      VARCHAR(50)   NOT NULL,
  PRIMARY KEY(id)
);

CREATE table gatos(
  id   SERIAL,
  nombre  varchar(50) NOT NULL,
  color  varchar(50) NOT NULL,
  edad  int NOT NULL,
  PRIMARY KEY(id)
);