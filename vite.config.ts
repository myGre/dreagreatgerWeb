import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";
// 配置elementUi
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  // const viteEnv = wrapperEnv(env)
  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // ...
          },
          transformAssetUrls: {
            // ...
          }
        }
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
        // "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.d.ts']
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variable.scss";`
        }
      }
    },
    server: {
      // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
      host: "0.0.0.0",
      port: 5051,
      // open: ,
      cors: true,
      // 代理跨域（mock 不需要配置跨域，直接能访问，这里只是个示例）
      proxy: {
        "/api": {
          target: " https://mock.mengxuegu.com/mock/6317f3d14944d71a56f25fbe/api", // easymock
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, "")
        }
      }
    },
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV
    }
  }
})
