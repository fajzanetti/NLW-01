
<p align="center">
  <a href="https://github.com/fajzanetti">
        <img src="https://img.shields.io/badge/GitHub-fajzanetti-7159C1?logo=GitHub"/>
    </a>
    <a href="https://www.linkedin.com/in/felipezanetti/">
        <img src="https://img.shields.io/badge/Linkedin-felipezanetti-7159C1?logo=linkedin"/>
    </a>
</p>

# Como instalar as dependências

## dependencies

```npm
npm install express
npm install knex
npm install sqlite3
```

## devDependencies

```npm
npm install @types/express -D
npm install typescript -D
npm install ts-node -D
npm install ts-node-dev -D
```

## TypeScript config

```npm
npx typescript --init
```

# Anotações

## Rotas e Recursos

- **Rotas**: Endereço completo da requisição
    > Ex: `http://localhost:3333/users`

- **Recurso**: Qual entidade estamos acessando do sistema
    > `/users`

## Métodos HTTP

- GET: Buscar uma ou mais informações do back-end
    >`GET http://localhost:3333/users = Listar usuários`
    >
    > `GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5`
- POST: Criar uma nova informação no back-end
    > `POST http://localhost:3333/users = Criar um usuário`
- PUT: Atualizar uma informação existente no back-end
- DELETE: Remover uma informação do back-end

## Parâmetros

- Request Param: Parâmetros que vem na própria rota que identifica um recurso
    > Ex: `http://localhost:3333/users/5`
- Query Param: Parâmetros que vem na prórpia rota geralmente opcionais para filtros, paginação
    > Ex: `http://localhost:3333/users?search=on`
- Request Body: Parâmetros para criação/atualização de informação

<p align="center">
  <a href="http://knexjs.org/">
    <img src="https://knexjs.org/assets/images/knex.png" alt="knex" style="width:100px"/>
  </a>
</p>

```SQL
SELECT * FROM users WHERE name = 'Diego'
```
```js
knex('users').where('name', 'Diego').select('*')
```