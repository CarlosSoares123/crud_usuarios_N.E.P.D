# Projeto de Gerenciamento de Usuários

Este é um projeto de gerenciamento de usuários que oferece uma solução completa para adicionar, editar e listar informações de contatos. O projeto é dividido em duas partes principais: o backend e o frontend.

## Backend

O backend do projeto é construído com as seguintes tecnologias:

- Node.js
- Express.js
- MySQL
- Cors
- Nodemon (para desenvolvimento)
- dotenv

### Configuração do Backend

Para configurar e executar o backend, siga estas etapas:

1. Clone este repositório.

2. Navegue até a pasta do backend:
cd backend

3. Instale as dependências do projeto:
npm install cors express mysql nodemon dotenv

4. Configure as variáveis de ambiente no arquivo `.env` com as informações do seu banco de dados, como `DB_HOST`, `DB_USER`, `DB_PASSWORD` e `DB_NAME`.

5. Inicie o servidor backend:
npm start


O servidor estará em execução na porta 8000 por padrão, mas você pode alterar essa configuração no arquivo `server/index.js`.

### Rotas API do Backend

O backend fornece as seguintes rotas API para gerenciar usuários:

- `GET /api/users`: Obter a lista de usuários.
- `POST /api/users`: Adicionar um novo usuário.
- `PUT /api/users/:id`: Atualizar um usuário existente.
- `DELETE /api/users/:id`: Excluir um usuário.

## Frontend

O frontend do projeto é construído com as seguintes tecnologias:

- React
- Styled Components
- Axios
- React-Toastify

### Configuração do Frontend

Para configurar e executar o frontend, siga estas etapas:

1. Clone este repositório.

2. Navegue até a pasta do frontend:
cd frontend

3. Instale as dependências do projeto:
npm install

4. Inicie o servidor de desenvolvimento:
npm start


O aplicativo React estará disponível no navegador no endereço http://localhost:3000/.

### Funcionalidades do Frontend

O frontend oferece as seguintes funcionalidades:

- Adicionar, editar e excluir usuários.
- Visualizar a lista de usuários.
- Exibir notificações usando React-Toastify.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções de bugs para este p
