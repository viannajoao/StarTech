USE comex;

CREATE TABLE pedidos(
id BIGINT AUTO_INCREMENT,
produto VARCHAR(255),
categoria VARCHAR(255),
preco DECIMAL(10,2),
quantidade INTEGER,
data_ano DATE,
cliente VARCHAR(60),
primary key(id)
);