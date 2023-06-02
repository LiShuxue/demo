import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

const plugins = [];

// 打包生产环境才引入的插件
if (process.env.NODE_ENV === 'production') {
  plugins.push(
    // 打包依赖分析
    visualizer({
      open: true,
      gzipSize: true,
    })
  );

  plugins.push(
    // gzip压缩
    viteCompression({
      threshold: 5 * 1024,
    })
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 支持react
    react(),
    ...plugins,
  ],
  server: {
    port: 8002,
    proxy: {
      '/blog-api': {
        target: 'http://localhost:4000',
        // pathRewrite: { '^/blog-api': '' },
        secure: false,
        changeOrigin: true,
        xfwd: true, // 添加x-forward headers
      },
      '/adminupload': {
        target: 'http://localhost:5555',
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
