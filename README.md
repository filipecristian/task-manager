
# Task Manager 📝

Aplicação simples de gerenciamento de tarefas desenvolvida em Node.js com Express.

## 📦 Funcionalidades

- Criar tarefas
- Listar todas as tarefas
- Atualizar tarefas existentes
- Deletar tarefas
- API RESTful com endpoints bem definidos
- Testes de integração

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/) (para testes)
- [Nodemon](https://nodemon.io/) (para desenvolvimento)

## 📁 Estrutura do Projeto

```
task-manager/
├── node_modules/
├── src/
│   ├── routes/
│   ├── controllers/
│   └── models/
├── tests/
│   └── integration/
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## 🔧 Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/filipecristian/task-manager.git
   cd task-manager
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm run dev
   ```

4. Acesse a API em `http://localhost:3000`

## 🧪 Executando os testes

```bash
npm test
```

## 📌 Endpoints da API (exemplo)

| Método | Rota            | Descrição              |
|--------|------------------|------------------------|
| GET    | `/tasks`         | Lista todas as tarefas |
| POST   | `/tasks`         | Cria uma nova tarefa   |
| PUT    | `/tasks/:id`     | Atualiza uma tarefa    |
| DELETE | `/tasks/:id`     | Remove uma tarefa      |

## 🧑‍💻 Autor

Desenvolvido por [@filipecristian](https://github.com/filipecristian)
