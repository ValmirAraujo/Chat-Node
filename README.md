# Chat usando Websocket e Node 

Este projeto foi configurado com o yarn, para rodar o projeto basta executar o comando abaixo
    `yarn dev`

## Migrations

O controle de versão do banco de dados é feito utilizando migrations.

Execute `yarn typeorm migration:create -n CreateConnections` para criar uma nova migrations. Nesse caso está sendo criada a migration de nome "CreateConnections". Depois do "-n" no comando vem o nome da migration.

Execute `yarn typeorm migration:run` para executar as migrations depois que as tabelas e demais funcionalidades forem criadas dentro dos métodos das migrations.

## Banco de Dados

O Banco de dados utilizado nessa aplicação foi o SqLite. Abaixo temos o diagrama entidade relacionamento do projeto do banco de dados utilizado.

![Diagrama Entidade Relacionamento](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/96ec6a24-63db-4396-b0e1-072aceba6934/chat.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210428T011816Z&X-Amz-Expires=86400&X-Amz-Signature=caa57a046e5f0d172b60598cbe4bb0f2d3c2f085d9ee5ae3f12d1e748eef19a3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22chat.png%22)

## Adição de nova dependência

Execute `yarn install` para instalar todas as dependências do projeto. Executar somente `yarn` com nenhum comando adicional irá executar o `yarn install`.

Execute `yarn add nome_da_dependencia` para adicionar uma nova dependência