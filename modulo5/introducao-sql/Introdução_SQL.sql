USE `Hopper-4313997-joao-silva`;

CREATE TABLE Funcionarios(
	id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);


INSERT INTO Funcionarios(id, nome, email)
VALUES ("1","Luana","lua@lbn.com"),
       ("2","Vinicius","vini@lbn.com"), 
       ("3", "Laura", "lau@lbn.com");
       
       
SELECT * FROM Funcionarios;
