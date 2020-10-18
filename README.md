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

![Card da sprint 2](https://user-images.githubusercontent.com/67328620/96373097-ab08ec80-1140-11eb-8580-b779855b9765.png)

## Sprint 2

## Telas no React
  Da sprint anterior para essa passamos as telas que anteriormente estavam no figma para o react.  
Durante a passagem modificamos o design dos formulários das telas da área de tarbalho do administrativo e financeiro e adicionamos a tela da área de trabalho do gerente.

-Tela principal do perfil administrativo e listagem de colaboradores

![Área de trabalho do administrativo)](https://user-images.githubusercontent.com/67328620/96355395-a51af900-10b7-11eb-84c2-85198b288890.jpg)
@@ -108,10 +63,6 @@ Da sprint anterior para essa modificamos o design dos formulários das telas da

![Área de trabalho do gerente](https://user-images.githubusercontent.com/67328620/96355568-3b9bea00-10b9-11eb-9e09-1888cc8ad1d9.jpg)

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

O modelo de dados não sofreu nenhuma alteração da sprint anterior para essa. 

## Requisitos para funcionamento

- JDK 11
- IDE NODEJS 10.19.0 ou superior
- Gerenciador de pacotes NPM
