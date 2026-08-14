# Sistema de Gerenciamento de Frota

Aplicação web para gestão da frota de veículos da Prefeitura Municipal de Pelotas, desenvolvida na **Hut8 — Empresa Júnior de Computação da UFPel** a partir de requisitos levantados com o cliente.

Este repositório contém a primeira fase do projeto, focada na construção da interface e dos componentes reutilizáveis do sistema.

---

## Sobre o projeto

O sistema centraliza o controle de manutenção da frota municipal, substituindo processos que antes eram feitos manualmente. As principais telas cobrem:

- **Veículos** — cadastro, consulta por placa e detalhamento por secretaria responsável
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
- Acompanhamento das entregas em squad, com líder técnico e prazos definidos pelo cliente

---

## Autores

- [Enzo Giacomini](https://github.com/EnzoGiacomini)
- [Pedro Bortoli](https://github.com/PedroMBortoli)

Desenvolvido na Hut8 — Empresa Júnior de Computação, Universidade Federal de Pelotas.
