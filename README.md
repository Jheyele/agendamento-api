# 📘 API com Prisma ORM – Exemplo de Aula

Este repositório contém um exemplo de API criado durante as aulas do **Bootcamp DFS 2025.1**.  
Foi utilizado como referência prática para a turma, com o objetivo de demonstrar o uso do **Node.js + Express + Prisma ORM** em uma aplicação real, conectada a um banco PostgreSQL.

## ⚙️ Pré-requisitos

- Node.js (versão 16+ recomendada)
- PostgreSQL
- npm (ou yarn)

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

- Renomeie o arquivo `.env.example` para `.env`:

- Edite o `.env` com os dados do seu banco PostgreSQL:

### 4. Rode as migrations existentes

```bash
npx prisma migrate dev
```

> Esse comando criará as tabelas conforme os modelos definidos no arquivo `schema.prisma`.

### 5. Inicie a aplicação

```bash
npm start
```

> A API ficará disponível em: `http://localhost:8080`

---

## 🧪 Testando a API

Use ferramentas como **Postman**, **Insomnia** ou até o navegador para testar os endpoints.


## 🧠 Sobre o projeto

Este projeto foi construído **ao vivo durante as aulas** como parte da formação prática do **Bootcamp DFS 2025.1**.  

---

Feito com 💻 para fins educacionais.