![Atividade Avaliativa](https://img.shields.io/badge/atividade%20avaliativa-node.js-blueviolet)

# 🧩 Gerenciador de Projetos - API REST (Node.js)

Este projeto foi desenvolvido como parte da **Atividade Avaliativa 1** da disciplina de backend, com o objetivo de consolidar os aprendizados sobre **Node.js**, **arquitetura MVC** e **construção de APIs REST** com armazenamento em memória (arrays).

## 🧠 Objetivo

Criar uma API para o gerenciamento de:
- **Usuários**
- **Projetos**
- **Tarefas**

A proposta envolvia simular o funcionamento de um sistema básico para uma empresa fictícia, relacionando usuários e tarefas a projetos.

## 📦 Estrutura do Projeto

project/ │-- src/ │ ├── controllers/ │ │ ├── userController.js │ │ ├── projectController.js │ │ ├── taskController.js │ ├── models/ │ │ ├── user.js │ │ ├── project.js │ │ ├── task.js │ ├── server.js │-- package.json

## 🔗 Relacionamentos

![MER](https://raw.githubusercontent.com/ATalDaAiume/Aulinha-Jackson-Prova-1/main/thumbnail.png)

- Um **usuário** pode estar vinculado a várias tarefas.
- Um **projeto** pode conter várias tarefas.
- Cada **tarefa** pertence a **um projeto** e é atribuída a **um único usuário**.

## 🎯 Endpoints

### Usuários `/api/users`
- `POST` Criar usuário
- `GET` Listar usuários
- `PUT` Atualizar nome do usuário
- `DELETE` Remover usuário

### Projetos `/api/projects`
- `POST` Criar projeto
- `GET` Listar projetos
- `PUT` Atualizar nome e descrição
- `DELETE` Remover projeto

### Tarefas `/api/tasks`
- `POST` Criar tarefa (vinculada a projeto e usuário)
- `GET` Listar tarefas
- `PUT` Atualizar título ou status
- `DELETE` Remover tarefa

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **JavaScript**
- **Arquitetura MVC**

## 📝 Observações

Este projeto não utiliza banco de dados — os dados são armazenados em arrays apenas para fins didáticos. A estrutura do código e os endpoints seguem boas práticas REST e foram desenvolvidos com foco em **organização, clareza e aprendizado prático**.
