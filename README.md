# CRUD-PROVA -> BACK-END

## O que é?

Projeto que consiste em uma API REST que serve para um sistema de provas, podendo ser provas ONLINES :computer: ou OFFLINE :book:

## Como funciona?
### O projeto apresenta principalmente 4 funcionalidades:
- Um CRUD para as provas (CREATE, READ, UPDATE, DELETE), aonde é possível fazer as operações nas provas;
- Um CRUD para as questões (CREATE, READ, UPDATE, DELETE), aonde é possível fazer as operações nas questões das provas;
- Algumas operações também nas alternativas das questões;
- Para dificultar as possíveis colas dos alunos, também foi implementado no código um formato para embaralhar as alternativas de cada questão;

## Quais foram as tecnologias utilizadas no projeto?
- [Typescript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
