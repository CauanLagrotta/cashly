# Projeto de um Ajudante financeiro

## Feito usado reactTS



## Como rodar o projeto:
- Clone o projeto
```sh
git clone https://github.com/CauanLagrotta/cashly.git
```

- Instale as dependências
```sh
yarn install
```


estrutura do projeto:
```
└── 📁cashly
    └── 📁public
        └── favicon.png
        └── index.html
    └── 📁src
        └── App.tsx
        └── 📁assets
            └── close.svg
            └── income.svg
            └── logo.svg
            └── outcome.svg
            └── total.svg
        └── 📁components
            └── 📁Dashboard
                └── index.tsx
                └── styles.ts
            └── 📁Header
                └── index.tsx
                └── styles.ts
            └── 📁NewTransactionModal
                └── index.tsx
                └── styles.ts
            └── 📁Summary
                └── index.tsx
                └── styles.ts
            └── 📁TransactionsTable
                └── index.tsx
                └── styles.ts
        └── 📁hooks
            └── useTransactions.tsx
        └── index.tsx
        └── react-app-env.d.ts
        └── 📁services
            └── api.ts
        └── 📁styles
            └── global.ts
    └── .gitignore
    └── custom.d.ts
    └── package-lock.json
    └── package.json
    └── tsconfig.json
    └── yarn.lock
```
