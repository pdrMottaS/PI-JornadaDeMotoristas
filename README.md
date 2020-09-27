![fatecsjc_400x192](https://user-images.githubusercontent.com/58821700/94355628-07a24b80-005c-11eb-8a48-0d5b5ff3583f.png)
# Projeto Integrador-Jornada de Motoristas

## Objetivo

construir uma plataforma para o controle da jornada de trabalho de caminhoneiros, respeitando as normas de cada sindicato de cada região

## Grupo

* Guilherme Perfeito (PO)
* Pedro Motta (Master SCRUM)
* Nicholas Roque (DEV Team)
* Vitor Alexandre Vargas dos Santos (DEV Team)
* Wagner Kenji (DEV Team)
* João Vitor Sales (DEV Team)
* Lucas Lima Chaves (DEV Team)
* Levi Motta (DEV Team)

## Story Cards

![Card 1](https://user-images.githubusercontent.com/58821700/94357549-23afe800-0070-11eb-945e-5814d8d82ebe.png)

![Card 1(1)](https://user-images.githubusercontent.com/58821700/94359277-827b5e80-007c-11eb-814a-07e8219312c7.png)

![Card 1(2)](https://user-images.githubusercontent.com/58821700/94359279-83ac8b80-007c-11eb-8eec-c0f22f5486f1.png)

![Card 1(3)](https://user-images.githubusercontent.com/58821700/94359281-84ddb880-007c-11eb-9cc0-f47a2801c029.png)

## Execução
### CRUD Motorista

-Create

![create_motorista](https://user-images.githubusercontent.com/58821700/94357261-bb600700-006d-11eb-89b2-9633dc007a4b.gif)

-Index

![index_motorista](https://user-images.githubusercontent.com/58821700/94357285-f6fad100-006d-11eb-95a8-f9b7687be261.gif)

-Profile

![profile_motorista](https://user-images.githubusercontent.com/58821700/94357292-0bd76480-006e-11eb-97a2-c77a2ba8b5af.gif)

-Update

![update_mototrista](https://user-images.githubusercontent.com/58821700/94357300-26a9d900-006e-11eb-9b9c-df728127ba96.gif)

-Delete

![delete_mototrista](https://user-images.githubusercontent.com/58821700/94357309-34f7f500-006e-11eb-8b12-4cbb49e17d01.gif)

-Search

![search_motorista](https://user-images.githubusercontent.com/58821700/94357318-44773e00-006e-11eb-97d3-5f92c689e7c2.gif)

-Listar Veículos

![list_veiculos_by_mototrista](https://user-images.githubusercontent.com/58821700/94357330-62dd3980-006e-11eb-835d-4fd4b5e6c23b.gif)

### CRUD Veiculo

-Create

![create_veiculo](https://user-images.githubusercontent.com/58821700/94357770-0b40cd00-0072-11eb-9940-a7a787c0d352.gif)

-Index

![index_veiculo](https://user-images.githubusercontent.com/58821700/94357778-17c52580-0072-11eb-9f80-ba40cbcc2619.gif)

-Profile

![profile_veiculo](https://user-images.githubusercontent.com/58821700/94357784-227fba80-0072-11eb-864f-3c79f02991fa.gif)

-Update

![update_veiculo](https://user-images.githubusercontent.com/58821700/94357791-30cdd680-0072-11eb-9e5b-172129a24523.gif)

-Delete

![delete_veiculo](https://user-images.githubusercontent.com/58821700/94357800-3deac580-0072-11eb-94e3-aa2a0c149c1e.gif)

-Search

![search_veiculo](https://user-images.githubusercontent.com/58821700/94357802-4a6f1e00-0072-11eb-907e-ec971af999f2.gif)

### Login

![login](https://user-images.githubusercontent.com/58821700/94357919-44c60800-0073-11eb-9522-805280d06df3.gif)

## Telas

-Home

![Screenshot_2020-09-27 Figma(4)](https://user-images.githubusercontent.com/58821700/94359958-637ecb80-0080-11eb-9b12-4469e18ba3fc.png)

-Login

![Screenshot_2020-09-27 Figma(2)](https://user-images.githubusercontent.com/58821700/94358648-eac84100-0078-11eb-8a42-8fa644d4e4b1.png)

-Cadastro Motorista

![Screenshot_2020-09-27 Figma](https://user-images.githubusercontent.com/58821700/94358654-f61b6c80-0078-11eb-9004-2c3c9b8b7b82.png)

-Cadastro de veículos

![Screenshot_2020-09-27 Figma(1)](https://user-images.githubusercontent.com/58821700/94358657-ffa4d480-0078-11eb-9d40-66d968191564.png)

-Tela principal do perfil administrativo e listagem de colaboradores

![Screenshot_2020-09-27 Figma(3)](https://user-images.githubusercontent.com/58821700/94358666-19deb280-0079-11eb-943a-db52ada11e60.png)

-Tela principal do motorista

![Screenshot_2020-09-27 Figma(5)](https://user-images.githubusercontent.com/58821700/94359919-42b67600-0080-11eb-8eb5-b13f97db9ba1.png)

-Tela principal do setor financeiro

![Screenshot_2020-09-27 Figma(6)](https://user-images.githubusercontent.com/58821700/94359944-55c94600-0080-11eb-8a89-00bd291aa4db.png)

## Modelo de Dados

### Modelo Conceitual

### Modelo Lógico

### Modelo Físico

-- Sql ANSI 2003 - brModelo.



CREATE TABLE Motorista (
Nome completo VARCHAR(10),
CPF VARCHAR(10),
ID do veiculo VARCHAR(10),
RNTRC VARCHAR(10) PRIMARY KEY,
Email VARCHAR(10),
Telefone VARCHAR(10),
IsGerente VARCHAR(10),
ID VARCHAR(10),
-- Erro: nome do campo duplicado nesta tabela!
ID VARCHAR(10)
)

CREATE TABLE Escala (
Turno VARCHAR(10),
Dias de trabalho VARCHAR(10),
Carga Horária diaria VARCHAR(10),
Folga VARCHAR(10)
)

CREATE TABLE Veiculo (
ID do rastreador VARCHAR(10),
Versão VARCHAR(10),
Rastreador VARCHAR(10),
Placa VARCHAR(10) PRIMARY KEY,
Disponibilidade VARCHAR(10)
)

CREATE TABLE Alertas (
Ocorrencia VARCHAR(10),
Sigla VARCHAR(10),
Icone VARCHAR(10),
regra/parametro VARCHAR(10),
Descrição(nomenclatura) VARCHAR(10) PRIMARY KEY,
RNTRC VARCHAR(10),
FOREIGN KEY(RNTRC) REFERENCES Motorista (RNTRC)
)

CREATE TABLE Status (
Inicio de jornada VARCHAR(10),
fim de jornada VARCHAR(10)
)

CREATE TABLE Plano de negocios (
ID do plano VARCHAR(10) PRIMARY KEY,
Descrição VARCHAR(10),
Contratante VARCHAR(10)
)

CREATE TABLE Jornada (
tempo de trabalho VARCHAR(10),
tempo de refeição VARCHAR(10),
tempo de descanso VARCHAR(10),
tempo de espera VARCHAR(10),
ID do plano VARCHAR(10),
FOREIGN KEY(ID do plano) REFERENCES Plano de negocios (ID do plano)
)

CREATE TABLE Administrativo (
Matricula VARCHAR(10) PRIMARY KEY,
Nome completo VARCHAR(10),
CPF VARCHAR(10),
Telefone VARCHAR(10),
Email VARCHAR(10),
ID VARCHAR(10),
-- Erro: nome do campo duplicado nesta tabela!
ID VARCHAR(10)
)

CREATE TABLE Login (
ID VARCHAR(10) PRIMARY KEY,
Senha VARCHAR(10),
Nivel VARCHAR(10),
Login VARCHAR(10)
)

CREATE TABLE Financeiro (
CPF VARCHAR(10),
Matricula VARCHAR(10) PRIMARY KEY,
Telefone VARCHAR(10),
Email VARCHAR(10),
Nome_completo VARCHAR(10),
ID VARCHAR(10),
FOREIGN KEY(ID) REFERENCES Login (ID)
)

CREATE TABLE Salário (
Proximo pagamento VARCHAR(10),
Ultimo pagamento VARCHAR(10),
ID VARCHAR(10) PRIMARY KEY
)

CREATE TABLE Possui (
RNTRC VARCHAR(10),
Placa VARCHAR(10),
FOREIGN KEY(RNTRC) REFERENCES Motorista (RNTRC),
FOREIGN KEY(Placa) REFERENCES Veiculo (Placa)
)

CREATE TABLE Opera (
Matricula VARCHAR(10),
FOREIGN KEY(Matricula) REFERENCES Administrativo (Matricula)
)

CREATE TABLE Gerencia (
ID VARCHAR(10),
Matricula VARCHAR(10),
FOREIGN KEY(ID) REFERENCES Salário (ID),
FOREIGN KEY(Matricula) REFERENCES Financeiro (Matricula)
)

ALTER TABLE Motorista ADD FOREIGN KEY(ID) REFERENCES Login (ID)
ALTER TABLE Motorista ADD FOREIGN KEY(ID) REFERENCES Salário (ID)
ALTER TABLE Administrativo ADD FOREIGN KEY(ID) REFERENCES Login (ID)
ALTER TABLE Administrativo ADD FOREIGN KEY(ID) REFERENCES Salário (ID)

## Requisitos para funcionamento

- JDK 11
- IDE NODEJS 10.19.0 ou superior
- Gerenciador de pacotes NPM
