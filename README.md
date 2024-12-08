# React + TypeScript + Vite Media Application

This application is a media management interface built with React, TypeScript, and Vite. It allows users to browse and filter media items, with features including pagination and API key authentication.

## Features

- Media item listing and filtering
- Pagination support
- API key authentication modal
- Responsive design
- TypeScript support
- SCSS modules for styling

## Prerequisites

- Node.js (version 14 or higher)
- Yarn package manager

## Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
cd [project-directory]
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Build for production:

```bash
yarn build
```

5. Preview production build:

```bash
yarn preview
```

The application will be available at `http://localhost:5173` by default.

## Project Structure

```
src/
├── components/          # Reusable components
├── interfaces/         # TypeScript interfaces
├── pages/             # Page components
├── styles/            # Global styles and variables
└── main.tsx           # Application entry point
```

## Technical Stack

- React 18
- TypeScript
- Vite
- SCSS Modules
- ESLint

## ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config as shown in the ESLint section.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
