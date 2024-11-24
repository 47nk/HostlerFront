# Dashboard Application

## Folder Structure

The project follows a **clean and scalable folder structure.**

```bash
.github/                 # GitHub-specific files (e.g., workflows)
.husky/                  # Git hooks for pre-commit checks
.vscode/                 # Editor configuration files
dist/                    # Production build output
node_modules/            # Installed dependencies
public/                  # Static assets (e.g., favicon, index.html)
src/                     # Main source code
├── assets/              # Static assets (images, fonts, etc.)
├── components/          # Reusable UI components
├── layouts/             # Layout components (e.g., Header, Footer)
├── mockupData/          # Mock JSON data for development
├── pages/               # Page-level components
├── router/              # React Router configuration
├── theme/               # MUI theme customization files
├── App.css              # Global CSS for the app
├── index.css            # Application entry point CSS
├── main.tsx             # Entry point for the React app
└── vite-env.d.ts        # TypeScript type declaration for Vite
.eslintrc.js             # ESLint configuration
.prettier.config.js      # Prettier configuration
stylelint.config.js      # Stylelint configuration
tsconfig.json            # TypeScript configuration
vite.config.ts           # Vite configuration
```

---

## Getting Started

Follow these steps to set up the project locally:

---

### **Installation**

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:

   ```bash
   cd dashboard-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

---

### **Development**

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5317`.
//the port can be configure in vite config

---

### **Production Build**

To create an optimized production build:

```bash
npm run build
```

The build will be located in the `dist/` directory.
