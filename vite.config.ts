import { defineConfig, loadEnv, UserConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import * as path from 'path'
import Eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log('env: ', env)

  const config: UserConfig = {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          addtionalData: `@use "@/style/mixins.scss" as *;`,
        },
      },
    },
    plugins: [uni(), Eslint()],
  }
  if (command === 'serve') {
    return config
  } else {
    return config
  }
})
