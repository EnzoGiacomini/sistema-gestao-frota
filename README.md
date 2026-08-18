# Sistema de Gerenciamento de Frota

Aplicação web para gestão e controle de manutenção de uma frota de veículos, desenvolvida em dupla a partir de uma necessidade real de organização de processos que antes eram feitos manualmente.

Este repositório contém a primeira fase do projeto, focada na construção da interface e dos componentes reutilizáveis do sistema.

> **Dados de demonstração.** Toda a aplicação roda com dados fictícios (usuários, veículos, fornecedores e ordens de serviço são mocks). O repositório não contém dados, identidade visual ou informações de nenhum cliente.

---

## Sobre o projeto

O sistema centraliza o controle da frota e das manutenções realizadas. As principais telas cobrem:

- **Veículos** — cadastro, consulta por placa e detalhamento por setor responsável
- **Ordens de serviço** — registro de itens do veículo, observações e resumo da manutenção
- **Fornecedores** — cadastro e gestão dos prestadores de serviço
- **Usuários** — controle de acesso ao sistema
- **Relatórios** — geração de relatórios com filtros de pesquisa

Toda a interface foi construída de forma responsiva e com componentes reutilizáveis.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js (App Router) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS |
| Ícones | lucide-react |
| Qualidade | ESLint |
| Integração | Consumo de API REST |

---

## Telas

| Rota | Descrição |
|---|---|
| `/` | Login |
| `/admin` | Painel inicial com atalhos por módulo |
| `/admin/services` | Ordens de serviço com filtros e paginação |
| `/admin/vehicles` | Frota: consulta por placa, detalhamento e observações |
| `/admin/report` | Relatórios com filtros combinados |
| `/admin/users` | Usuários internos e fornecedores |
| `/supplier` | Portal do fornecedor para orçamentos |

---

## Como executar

```bash
# Instalar dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

---

## Organização do trabalho

O projeto foi desenvolvido em dupla, seguindo um fluxo de trabalho baseado em Git:

- **Branches por feature** — cada funcionalidade em sua própria branch (`feat/vehiclesPage`, `feat/reportFilter`, `refactor/change-text-area-vehicle-items`)
- **Pull requests com revisão** — toda alteração passava por PR e aprovação do outro desenvolvedor antes do merge na `main`
- **Conventional Commits** — mensagens padronizadas com `feat:`, `fix:`, `style:` e `refactor:`

---

## Continuidade

Esta é a fase inicial do sistema. O projeto foi posteriormente doado à **Hut8 — Empresa Júnior de Computação da UFPel**, onde evoluiu para uma versão com back-end próprio (API REST em Fastify + PostgreSQL), autenticação com JWT, controle de acesso por papel e board Kanban de ordens de serviço — em repositório privado da empresa júnior.

---

## Autores

- [Enzo Giacomini](https://github.com/EnzoGiacomini)
- [Pedro Bortoli](https://github.com/PedroMBortoli)
