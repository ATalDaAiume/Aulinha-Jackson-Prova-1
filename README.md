![Atividade Avaliativa](https://img.shields.io/badge/atividade%20avaliativa-node.js-blueviolet)

# 🧩 Gerenciador de Projetos - API REST (Node.js)
> Atividade Avaliativa – Backend | 3º Semestre ADS

Repositório referente à primeira **Atividade Avaliativa** da disciplina de backend da faculdade, com o objetivo de consolidar os aprendizados sobre **Node.js**, **arquitetura MVC** e **construção de APIs REST** com armazenamento em memória (arrays).

Essa atividade foi essencial para entender a separação de responsabilidades, estrutura de um projeto real e a manipulação de dados por meio de rotas organizadas.

## 🧠 Objetivo

Criar uma API para o gerenciamento de:
- **Usuários**
- **Projetos**
- **Tarefas**

Foi proposta uma API para gerenciamento de projetos, tarefas e usuários, com as seguintes entidades:

- 👤 **Usuário**  
  `id`, `nome`, `email`, `senha`

- 📁 **Projeto**  
  `id`, `nome`, `descrição`

- ✅ **Tarefa**  
  `id`, `título`, `status`, `id do projeto`, `id do usuário responsável`

## 📦 Estrutura do Projeto

```
📁 project
├── 📂 src
│   ├── 📂 controllers
│   │   ├── 👤 userController.js
│   │   ├── 📁 projectController.js
│   │   └── ✅ taskController.js
│   ├── 📂 models
│   │   ├── 👤 user.js
│   │   ├── 📁 project.js
│   │   └── ✅ task.js
│   └── 🚀 server.js
├── 📦 package.json
```

## 🔗 Relacionamentos

![MER](https://i.postimg.cc/JhTyjFbV/thumbnail.png)

- Um **usuário** pode estar vinculado a várias tarefas.
- Um **projeto** pode conter várias tarefas.
- Cada **tarefa** pertence a **um projeto** e é atribuída a **um único usuário**.

## 🚀 Funcionalidades da API

- **Usuários (/api/users)**  
  ➕ Criar, 🔍 Listar, ✏️ Atualizar nome, ❌ Remover

- **Projetos (/api/projects)**  
  ➕ Criar, 🔍 Listar, ✏️ Atualizar nome/descrição, ❌ Remover

- **Tarefas (/api/tasks)**  
  ➕ Criar (com relação a projeto e usuário), 🔍 Listar, ✏️ Atualizar título/status, ❌ Remover

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **JavaScript**
- **Arquitetura MVC**

## 📝 Observações

Este projeto não utiliza banco de dados — os dados são armazenados em arrays apenas para fins didáticos. A estrutura do código e os endpoints seguem boas práticas REST e foram desenvolvidos com foco em **organização, clareza e aprendizado prático**.
