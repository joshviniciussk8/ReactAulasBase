<div align="center">
  <h1>🚀 React Base</h1>
  <p>
    <strong>Projeto básico de React com TypeScript e Vite</strong>
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </p>
</div>

---

## 📋 Sobre o Projeto

Este é um projeto base de React configurado com as melhores práticas e ferramentas modernas para desenvolvimento web. Ideal para iniciar novos projetos ou aprender os fundamentos do React.

### ✨ Características

- ⚡ **Vite** - Build tool extremamente rápida com Hot Module Replacement (HMR)
- ⚛️ **React 19.2** - Biblioteca JavaScript para construção de interfaces
- 🔷 **TypeScript** - Tipagem estática para maior segurança e produtividade
- 🎨 **ESLint** - Linter configurado para manter a qualidade do código
- 📦 **Yarn** - Gerenciador de pacotes eficiente

---

## 🛠️ Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [ESLint](https://eslint.org/)

---

## 🚀 Como Executar

### Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

### Instalação

```bash
# Clone este repositório
git clone <url-do-repositorio>

# Acesse a pasta do projeto
cd react-base

# Instale as dependências
yarn
# ou
npm install
```

### Executando o Projeto

```bash
# Inicie o servidor de desenvolvimento
yarn dev
# ou
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Outros Comandos

```bash
# Build para produção
yarn build

# Preview do build de produção
yarn preview

# Executar o linter
yarn lint
```

---

## 📁 Estrutura do Projeto

```
react-base/
├── public/          # Arquivos públicos estáticos
├── src/
│   ├── assets/      # Imagens, fontes e outros assets
│   ├── App.tsx      # Componente principal
│   ├── App.css      # Estilos do App
│   ├── main.tsx     # Ponto de entrada da aplicação
│   └── index.css    # Estilos globais
├── eslint.config.js # Configuração do ESLint
├── index.html       # HTML principal
├── package.json     # Dependências e scripts
├── tsconfig.json    # Configuração do TypeScript
└── vite.config.ts   # Configuração do Vite
```

---

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Fork este repositório
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

<div align="center">
  
</div
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
