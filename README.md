
<h1 align="center"> Projeto CRUD-PROVA - Back-end </h1>

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)

## Sumário

* [O que é?](#o-que-é)
* [Como funciona?](#como-funciona)
* [Tecnologias](#quais-foram-as-tecnologias-utilizadas-no-projeto)
* [Conhecimentos absorvidos](#novos-conhecimentos-do-projeto)
* [Rodando o server](#como-executar-o-projeto)
* [Endpoints](#endpoints)
* [Redes Sociais](#redes-sociais)

## O que é?
Projeto que consiste em uma API REST que serve para um sistema de provas, podendo ser provas ONLINES :computer: ou OFFLINE :book:

## Como funciona?
### O projeto apresenta principalmente 4 funcionalidades:
:white_check_mark: `Funcionalidade 1` Um CRUD para as provas (CREATE, READ, UPDATE, DELETE), aonde é possível fazer as operações nas provas;

:white_check_mark: `Funcionalidade 2` Um CRUD para as questões (CREATE, READ, UPDATE, DELETE), aonde é possível fazer as operações nas questões das provas;

:white_check_mark: `Funcionalidade 3` Algumas operações também nas alternativas das questões;

:white_check_mark: `Funcionalidade 4` Para dificultar as possíveis colas dos alunos, também foi implementado no código um formato para embaralhar as alternativas de cada questão;

## Quais foram as tecnologias utilizadas no projeto?
- [Typescript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [WSL2](https://docs.microsoft.com/pt-br/windows/wsl/install)

## Novos conhecimentos do projeto?
Como foi um projeto realmente novo, onde eu precisei ir aprendendo durante o desenvolvimento do projeto, os principais conhecimento adquiridos foi do próprio Typescript e do NestJS.

## Como executar o projeto?
De início será necessário que já tenha no seu computador as seguintes ferramentas:
- Node.js
- Git
- Algum editor da sua preferência (No meu caso foi utilizado o [VSCode](https://code.visualstudio.com/))

### Colocando o server para rodar:
```bash
# Clonando o repositório
$ git clone https://github.com/arthurfurtunato/crud-prova.git

# Acesse pelo seu terminal
$ cd crud-prova

# Instale as dependências necessárias
## Foi utilizado por mim o npm
$ npm install

# Execute a aplicação no modo de desenvolvimento
npm run dev:start

# Após isso o servidor estará rodando localmente, pronto para ser utilizado na url http://localhost:3000
## Obs.: No meu caso a PORT usada foi a 3000, porém pode ser diferente de acordo com a sua configuração
```

## Endpoints

- [Prova](./readmes/crud-provas.md) :page_facing_up:
- [Questão](./readmes/crud-questions.md) :question:
- [Options](./readmes/options.md) :negative_squared_cross_mark:

## Redes sociais

- [Linkedin](https://www.linkedin.com/in/arthur-furtunato-4994a7208/)
- [Twitter](https://twitter.com/arthurv05)
- [Instagram](https://www.instagram.com/arthurv05/)

![Badge feito por](https://img.shields.io/badge/Feito%20por-Arthur%20Furtunato-red)
