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

## Knex.js

* Exemplo do SQL para KNEX

```SQL
SELECT * FROM users WHERE name = 'Diego'
knex('users').where('name', 'Diego').select('*')
```

#### Migrations

As migrações permitem que você defina conjuntos de alterações de esquema, portanto é fácil atualizar um banco de dados.

> Histórico do banco de dados

* Comandos para executar as migrates
```
npx knex migrate:latest --knexfile knexfile.ts
```

#### Seeds

Os arquivos de `seeds` permitem preencher seu banco de dados com dados de teste ou propagação independentes dos arquivos de migração.

* Comandos para executar as seeds
```
npx knex seed:run --knexfile knexfile.ts
```

## Entidades e Relacionamentos da aplicação

- ✔️ points (pontos de coleta)
    - image
    - name
    - email
    - whatsapp
    - latitude
    - longitude
    - city
    - uf
    
- ✔️ items (itens para coleta)
    - title
    - image
- ✔️ point-items (N-N, relacionamento dos itens que um ponto coleta)
    - point_id
    - item_id

## Funcionalidades

#### WEB

- Listar os itens de coleta

#### MOBILE

- Listar pontos (filtro por estado/cidade/itens)
- Listarum ponto de coleta específico

## Comandos utilizados no projeto

#### Create

```npm 
npm init -y
```

#### dependencies

```
npm install express
npm install knex
npm install sqlite3
npm install cors
```

#### devDependencies

```
npm install @types/express -D
npm install typescript -D
npm install ts-node -D
npm install ts-node-dev -D
npm install @types/cors -D
```

#### TypeScript config

```
npx typescript --init
```