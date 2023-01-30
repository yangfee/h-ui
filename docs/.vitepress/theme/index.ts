
import DefaultTheme from 'vitepress/theme'
import HUI from '../../../src/entry'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(HUI)
    ctx.app.component('Demo', Demo)
    ctx.app.component('DemoBlock', DemoBlock)
  }
}