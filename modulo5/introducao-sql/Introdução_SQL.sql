USE `Hopper-4313997-joao-silva`;

CREATE TABLE Quadro_De_Funcionarios(
	id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(38),
    email VARCHAR(100) NOT NULL UNIQUE,
    PRIMARY KEY (id)
);