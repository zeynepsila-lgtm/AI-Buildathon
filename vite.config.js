import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const geminiKey =
    env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY || env.GOOGLE_API_KEY || '';

  return {
    root: '.',
    publicDir: 'public',
    define: {
      __GEMINI_SERVER_KEY_CONFIGURED__: JSON.stringify(Boolean(geminiKey.trim())),
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    server: {
      proxy: {
        '/gemini-api': {
          target: 'https://generativelanguage.googleapis.com',
          changeOrigin: true,
          rewrite: (path) => {
            const base = path.replace(/^\/gemini-api/, '');
            const sep = base.includes('?') ? '&' : '?';
            return `${base}${sep}key=${encodeURIComponent(geminiKey)}`;
          },
        },
      },
    },
  };
});
