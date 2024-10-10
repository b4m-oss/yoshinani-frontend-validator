import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    // 開発モード: index.htmlをエントリーポイントとして使用
    return {
      root: './app',
      build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
          input: './app/index.html',
        },
      },
    };
  } else {
    // ビルドモード: ライブラリモード
    return {
      build: {
        lib: {
          entry: path.resolve(__dirname, 'app/src/main.ts'),
          name: 'yoshinaniFormValidator',
          fileName: (format) => `yoshinaniFormValidator.${format}.js`,
        },
        rollupOptions: {
          // 外部化する依存関係
          external: [],
          output: {
            globals: {},
          },
        },
      },
    };
  }
});
