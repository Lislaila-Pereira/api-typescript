# API TypeScript com Prisma e Fastify

Esta é uma API construída com TypeScript, utilizando Prisma ORM para interação com um banco de dados MongoDB, e Fastify como framework de servidor web. A API permite criar, listar e deletar clientes no banco de dados.

## Estrutura do Projeto

- **Prisma ORM**: Utilizado para gerenciar o acesso ao banco de dados MongoDB.
- **Fastify**: Framework utilizado para criar o servidor e gerenciar as rotas da API.
- **MongoDB**: Banco de dados utilizado para armazenar informações dos clientes.
- **TypeScript**: Linguagem utilizada no desenvolvimento da aplicação.

## Funcionalidades

- **Criar Cliente**: Cria um novo cliente no banco de dados.
- **Listar Clientes**: Retorna a lista de clientes cadastrados.
- **Deletar Cliente**: Deleta um cliente do banco de dados pelo ID.

## Como Executar o Projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/usuario/api-typescript.git
   cd api-typescript
2. **Crie um banco de dados no MongoDB**

3. **Configurar .envexample**
   - Edite o arquivo .envexample. Mude o nome para .env e forneça suas próprias credenciais e informações necessárias.
   
4. **Instalar Dependências**
   ```bash
   npm install
4. **Gerar o Cliente Prisma**
   ```bash
   npx prisma generate
4. **Executar o Servidor**
   ```bash
   npm run dev
4. **Acessar a API**
  Após iniciar o servidor, você pode acessar as seguintes rotas:
  - **POST /customer**:  - Cria um novo cliente.
  - **GET /getcustomers**:  - Lista todos os clientes cadastrados.
  - **DELETE /customer?id=<id>**:  - Deleta um cliente pelo ID.
  
    A API estará disponível em http://localhost:3333
