![fatecsjc_400x192](https://user-images.githubusercontent.com/58821700/94355628-07a24b80-005c-11eb-8a48-0d5b5ff3583f.png)
# Projeto Integrador-Jornada de Motoristas

## Objetivo

construir uma plataforma para o controle da jornada de trabalho de caminhoneiros, respeitando as normas de cada sindicato de cada região

## Grupo

#### Guilherme Perfeito (PO)
* https://github.com/GuilhermePerfeito​
* https://www.linkedin.com/in/guilherme-perfeito-a76729168/

#### Pedro Motta (Master SCRUM)
* https://github.com/pdrMottaS​
* https://www.linkedin.com/in/pedro-motta-7471021a9/

#### Nicholas Roque (DEV Team)
* https://github.com/NicholasRoque​
* https://www.linkedin.com/in/nicholas-gabriel-dos-santos-roque-9113511b2/

#### Vitor Alexandre Vargas dos Santos (DEV Team)
* https://github.com/Vitoglok
* https://www.linkedin.com/in/vitor-alexandre-0b63771b2/

#### Wagner Kenji (DEV Team)
* https://github.com/UmCaraDaNet​
* https://www.linkedin.com/in/wagner-kenji-franco-kamoei-6883791b2/

#### João Vitor Sales (DEV Team)
* https://github.com/joao-sales1405​
* https://www.linkedin.com/in/jo%C3%A3o-sales-86a37a1b2

#### Lucas Lima Chaves (DEV Team)
* https://github.com/Lucas-Chaves​
* https://www.linkedin.com/in/lucas-chaves-24312391

#### Levi Motta (DEV Team)
* https://github.com/levizoca
* https://www.linkedin.com/in/levi-motta-5001a2173/

## Story Cards

![Card da sprint 1](https://user-images.githubusercontent.com/67328620/96372933-c9221d00-113f-11eb-9cb3-695424aa4d81.png)

![Card da sprint 2](https://user-images.githubusercontent.com/67328620/96373097-ab08ec80-1140-11eb-8580-b779855b9765.png)

![Card da sprint 3](https://user-images.githubusercontent.com/67328620/96373658-62533280-1144-11eb-8262-a5f84017802b.png)

![Card da sprint 4](https://user-images.githubusercontent.com/67328620/96373657-61ba9c00-1144-11eb-87c0-78842effe629.png)

## Telas no React

-Home

![Screenshot_2020-09-27 Figma(4)](https://user-images.githubusercontent.com/58821700/94359958-637ecb80-0080-11eb-9b12-4469e18ba3fc.png)

-Login

![Screenshot_2020-09-27 Figma(2)](https://user-images.githubusercontent.com/58821700/94358648-eac84100-0078-11eb-8a42-8fa644d4e4b1.png)

-Cadastro Motorista

![Tela de Cadastro do Motorista](https://user-images.githubusercontent.com/67328620/94373585-b38b7b80-00dc-11eb-94a7-cc6174178da5.png)

-Cadastro Financeiro

![Tela de Cadastro do Financeiro](https://user-images.githubusercontent.com/67328620/94373584-b38b7b80-00dc-11eb-8275-2d2d72bed5bd.png)

-Cadastro Administrativo

![Tela de Cadastro do Administrativo](https://user-images.githubusercontent.com/67328620/94373583-b25a4e80-00dc-11eb-97db-672925c923dd.png)

-Cadastro de veículos

![Tela de Cadastro do veiculo](https://user-images.githubusercontent.com/67328620/94374045-e3884e00-00df-11eb-9495-2b849dc76b2c.png)


-Tela principal do perfil administrativo e listagem de colaboradores

![Área de trabalho do administrativo)](https://user-images.githubusercontent.com/67328620/96355395-a51af900-10b7-11eb-84c2-85198b288890.jpg)

- Tela principal do gerente

![Área de trabalho do gerente](https://user-images.githubusercontent.com/67328620/96355568-3b9bea00-10b9-11eb-9e09-1888cc8ad1d9.jpg)

-Tela principal do motorista

![Screenshot_2020-09-27 Figma(5)](https://user-images.githubusercontent.com/58821700/94359919-42b67600-0080-11eb-8eb5-b13f97db9ba1.png)

-Tela principal do setor financeiro

![Área de trabalho financeiro](https://user-images.githubusercontent.com/67328620/96355244-d2ff3e00-10b5-11eb-9937-2dcf2c0250f3.jpg)

## Funcionalidades

Nessa Sprint foi implementado o frontend ligado a API RESTFUL feita com Spring.

### Rotas Públicas

-Rotas Publicas: é posssível navegar por rotas publicas sem estar autenticado

![publicRoutes-2020-10-18-194508](https://user-images.githubusercontent.com/58821700/96388425-11146480-117f-11eb-96cc-bf1f1054432e.gif)

-Login pelo Frontend: é possível realizar o login pelo frontend como um usuário do tipo Administrador

![Login-2020-10-18-194656](https://user-images.githubusercontent.com/58821700/96388471-5f296800-117f-11eb-960b-3769e0fbea95.gif)

-Login: é possível fazer login de usuários de qualquer tipo

![loginanyUser-2020-10-18-200459](https://user-images.githubusercontent.com/58821700/96388490-86803500-117f-11eb-9379-cea719094a7e.gif)

### Rotas privadas (necessário autenticação)

-Página inicial com listagem de colaboradores e viagens: é possível  que o usuário autenticado do tipo Administrador acesse essa página

![HomeADM-2020-10-18-194807](https://user-images.githubusercontent.com/58821700/96388573-276ef000-1180-11eb-9b3d-4fb0cd9ab359.gif)

-Criar Usuário pelo frontend: é possível criar usuários do tipo Motorista

![createUser-2020-10-18-194840](https://user-images.githubusercontent.com/58821700/96388534-e1199100-117f-11eb-8784-6941ea7b6092.gif)

-Criar Usuário: é possível criar usuários de qualquer tipo

![createanyUser-2020-10-18-200337](https://user-images.githubusercontent.com/58821700/96388550-f55d8e00-117f-11eb-805c-fea459a22c8e.gif)

-Cadastrar veículo

![createVeiculo-2020-10-18-194938](https://user-images.githubusercontent.com/58821700/96388623-7ddc2e80-1180-11eb-854c-069963570811.gif)

-Editar usuários

![editUser-2020-10-18-195025](https://user-images.githubusercontent.com/58821700/96388584-3b1a5680-1180-11eb-8821-c32fdb9cb4b7.gif)

-Deletar usuários

![deleteUser-2020-10-18-195100](https://user-images.githubusercontent.com/58821700/96388590-4a010900-1180-11eb-93e0-b4a4b38ad4a3.gif)

-Agendar Jornada de trabalho

![addJornada-2020-10-18-201112](https://user-images.githubusercontent.com/58821700/96388601-5b4a1580-1180-11eb-9157-b5e8881bf6c2.gif)

-Fazer logout: uma vez que o usuário faça logout do sistema, ele não tem permissão de acessar rotas autenticadas até que faça login novamente

![logout-2020-10-18-195146](https://user-images.githubusercontent.com/58821700/96388648-9fd5b100-1180-11eb-9288-655c46281d82.gif)

## Modelo de Dados

### Modelo Conceitual

![conceito PI](https://user-images.githubusercontent.com/67328620/94372431-bafa5700-00d3-11eb-8215-fd64f7a7b94f.png)

### Modelo Lógico

![logico  PI](https://user-images.githubusercontent.com/67328620/94372430-b9c92a00-00d3-11eb-89ea-517a9357647f.png)

Os tipos de dados da imagem acima são meramente ilustrativos.

### Modelo Físico

O Modelo Físico foi feito utilizando o brModelo

CREATE TABLE Motorista (  
Nome completo VARCHAR(60),  
CPF VARCHAR(15),  
ID do veiculo VARCHAR(10),  
RNTRC VARCHAR(15) PRIMARY KEY,  
Email VARCHAR(40),  
Telefone VARCHAR(10),  
IsGerente boolean,  
ID VARCHAR(10)  
)  

CREATE TABLE Escala (  
Turno VARCHAR(10),  
Dias de trabalho VARCHAR(10),  
Carga Horária diaria VARCHAR(20),  
Folga VARCHAR(10)  
)  

CREATE TABLE Veiculo (  
ID do rastreador VARCHAR(10),  
Versão VARCHAR(10),  
Rastreador VARCHAR(10),  
Placa VARCHAR(10) PRIMARY KEY,  
Disponibilidade boolean  
)  

CREATE TABLE Alertas (  
Ocorrencia VARCHAR(10),  
Sigla VARCHAR(10),  
Icone VARCHAR(10),  
regra/parametro VARCHAR(30),  
Descrição(nomenclatura) VARCHAR(100) PRIMARY KEY,  
RNTRC VARCHAR(15),  
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
Nome completo VARCHAR(60),  
CPF VARCHAR(15),  
Telefone VARCHAR(10),  
Email VARCHAR(40),  
ID VARCHAR(10)  
)  

CREATE TABLE Login (  
ID VARCHAR(10) PRIMARY KEY,  
Senha VARCHAR(20),  
Nivel VARCHAR(10),  
Login VARCHAR(40)  
)  

CREATE TABLE Financeiro (  
CPF VARCHAR(15),  
Matricula VARCHAR(10) PRIMARY KEY,  
Telefone VARCHAR(15),  
Email VARCHAR(40),  
Nome_completo VARCHAR(60),  
ID VARCHAR(10),  
FOREIGN KEY(ID) REFERENCES Login (ID)  
)  

CREATE TABLE Salário (  
Proximo pagamento VARCHAR(10),  
Ultimo pagamento VARCHAR(10),  
ID VARCHAR(10) PRIMARY KEY  
)  

CREATE TABLE Possui (  
RNTRC VARCHAR(15),  
Placa VARCHAR(12),  
FOREIGN KEY(RNTRC) REFERENCES Motorista (RNTRC).  
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

ALTER TABLE Possui ADD FOREIGN KEY(RNTRC) REFERENCES Motorista (RNTRC)  
ALTER TABLE Motorista ADD FOREIGN KEY(ID) REFERENCES Login (ID)  
ALTER TABLE Motorista ADD FOREIGN KEY(ID) REFERENCES Salário (ID)  
ALTER TABLE Gerencia ADD FOREIGN KEY(ID) REFERENCES Salário (ID)  
ALTER TABLE Gerencia ADD FOREIGN KEY(Matricula) REFERENCES Financeiro (Matricula)  
ALTER TABLE Jornada ADD FOREIGN KEY(ID do plano) REFERENCES Plano de negocios (ID do plano)  
ALTER TABLE Administrativo ADD FOREIGN KEY(ID) REFERENCES Login (ID)  
ALTER TABLE Administrativo ADD FOREIGN KEY(ID) REFERENCES Salário (ID)  
ALTER TABLE Financeiro ADD FOREIGN KEY(ID) REFERENCES Login (ID)  

## Requisitos para funcionamento

- JDK 11
- IDE NODEJS 10.19.0 ou superior
- Gerenciador de pacotes NPM
