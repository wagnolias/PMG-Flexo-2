import JSZip from 'jszip';

export async function downloadProjectZip() {
  const zip = new JSZip();

  // Glob all source files as raw text strings
  const sourceFiles = import.meta.glob(
    [
      '/src/**/*.tsx',
      '/src/**/*.ts',
      '/src/**/*.css',
      '/index.html',
      '/package.json',
      '/tsconfig.json',
      '/vite.config.ts',
      '/.env.example',
      '/metadata.json'
    ],
    { query: '?raw', import: 'default', eager: true }
  ) as Record<string, string>;

  // Add all files into the zip archive
  for (const [path, content] of Object.entries(sourceFiles)) {
    // clean up leading slash
    const relativePath = path.startsWith('/') ? path.slice(1) : path;
    zip.file(relativePath, content);
  }

  // Add .gitignore
  zip.file(
    '.gitignore',
    `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`
  );

  // Add a helpful README.md
  zip.file(
    'README.md',
    `# PMG Flexo - Website Institucional

Site institucional da PMG Flexo desenvolvido com React 19, Vite, Tailwind CSS e Lucide Icons.

## 🚀 Como Rodar Localmente no seu Computador

### Pré-requisitos
- Ter o **Node.js** instalado (versão 18 ou superior): https://nodejs.org/

### Passo a passo:
1. Abra a pasta do projeto no terminal ou VS Code.
2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Inicie o servidor de desenvolvimento:
\`\`\`bash
npm run dev
\`\`\`
O site estará disponível em \`http://localhost:3000\` ou \`http://localhost:5173\`.

---

## 📦 Como Gerar os Arquivos para Publicação (Hospedagem)

Para gerar os arquivos finais otimizados (HTML, CSS e JS) para colocar em qualquer servidor/hospedagem:

\`\`\`bash
npm run build
\`\`\`

Os arquivos finais serão gerados dentro da pasta \`dist/\`. Basta enviar o conteúdo dessa pasta para o seu servidor web (cPanel, Apache, Nginx, Vercel, Netlify, etc.).
`
  );

  // Generate ZIP Blob
  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'pmgflexo-site-completo.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
