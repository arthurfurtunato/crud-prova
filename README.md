
<h1 align="center"> Projeto CRUD-PROVA - Back-end </h1>

<p align="center">
  <img src="https://uab.ufsc.br/administracao/files/2020/06/provas.jpg" />
</p>

![npm version](https://img.shields.io/badge/npm-6.14.16-blue)
![node version](https://img.shields.io/badge/node-v12.22.10-green)
![nest version](https://img.shields.io/badge/nest-8.2.4-red)

## Sumário

- [Sumário](#sumário)
- [O que é?](#o-que-é)
- [Como funciona?](#como-funciona)
  - [O projeto apresenta principalmente 4 funcionalidades:](#o-projeto-apresenta-principalmente-4-funcionalidades)
- [Quais foram as tecnologias utilizadas no projeto?](#quais-foram-as-tecnologias-utilizadas-no-projeto)
- [Novos conhecimentos do projeto?](#novos-conhecimentos-do-projeto)
- [Como executar o projeto?](#como-executar-o-projeto)
  - [Colocando o server para rodar:](#colocando-o-server-para-rodar)
- [Endpoints](#endpoints)
- [Feito por](#feito-por)
- [Redes sociais](#redes-sociais)

## O que é?
Projeto que consiste em uma API REST que serve para um sistema de provas, podendo ser provas ONLINES :computer: ou OFFLINE :book:

## Como funciona?
### O projeto apresenta principalmente 4 funcionalidades:
:white_check_mark: `Funcionalidade 1` Um CRUD para as provas (CREATE, READ, UPDATE, DELETE), aonde é possível fazer as operações nas provas;

:white_check_mark: `Funcionalidade 2` Um CRUD para as questões (CREATE, READ, UPDATE, DELETE), aonde é possível fazer as operações nas questões das provas;

:white_check_mark: `Funcionalidade 3` Algumas operações também nas alternativas das questões;

:white_check_mark: `Funcionalidade 4` Para garantir melhor segurança na aplicação da prova, foi implementado no código um formato para embaralhar as alternativas de cada questão;

## Quais foram as tecnologias utilizadas no projeto?
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [WSL2](https://docs.microsoft.com/pt-br/windows/wsl/install)

## Novos conhecimentos do projeto?
Como foi um projeto em que eu tive o primeiro contato com algumas tecnologias que eu não conhecia como, por exemplo, Typescript e do NestJS, precisei estudá-las durante o desenvolvimento do projeto.

## Como executar o projeto?
De início será necessário que já tenha no seu computador as seguintes ferramentas:
- Docker e docker-compose
- Git
- Algum editor da sua preferência (No meu caso foi utilizado o [VSCode](https://code.visualstudio.com/))

### Colocando o server para rodar:
```bash
# Clonando o repositório
$ git clone https://github.com/arthurfurtunato/crud-prova.git

# Acesse a pasta do projeto no terminal/cmd
$ cd crud-prova

# Rode os containers
$ docker-compose up --build

## Obs.: Os containers iniciarão com o app escutando a porta de número 3000
## Após isso o serviço está pronto para ser utilizado na url http://localhost:3000
```

## Endpoints

- [Prova](./readme/crud-provas.md) :page_facing_up:
- [Questão](./readme/crud-questions.md) :question:
- [Options](./readme/options.md) :negative_squared_cross_mark:

## Feito por
<p align="center">
  <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFepBOXaqPO_Q/profile-displayphoto-shrink_800_800/0/1642861778954?e=1654128000&v=beta&t=KXO8g1AngeiB0VrDz-RiCynb6oN6Ee8aeP3k5YsIMR0" />
</p>

<h3 align="center">Arthur Furtunato - Desenvolvedor Back-end júnior</h3>
<h6 align="center">Entre em contato pelas redes sociais abaixo. :grin:</h3>

## Redes sociais

- [Linkedin](https://www.linkedin.com/in/arthur-furtunato-4994a7208/)
- [Twitter](https://twitter.com/arthurv05)
- [Instagram](https://www.instagram.com/arthurv05/)

![Badge feito por](https://img.shields.io/badge/Feito%20por-Arthur%20Furtunato-red)
