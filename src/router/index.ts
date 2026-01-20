import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'

// 定义路由组件
const DeepseekPage = () => import('@/pages/DeepseekPage.vue')
const QwenPage = () => import('@/pages/QwenPage.vue')
const GLMPage = () => import('@/pages/GLMPage.vue')
const KimiPage = () => import('@/pages/KimiPage.vue')
const VolcenginePage = () => import('@/pages/VolcenginePage.vue')

const routes = [
  {
    path: '/',
    // component: Main,
    children: [
      {
        path: 'deepseek',
        component: DeepseekPage,
        name: 'Deepseek'
      },
      {
        path: 'qwen',
        component: QwenPage,
        name: 'Qwen'
      },
      {
        path: 'glm',
        component: GLMPage,
        name: 'GLM'
      },
      {
        path: 'kimi',
        component: KimiPage,
        name: 'Kimi'
      },
      {
        path: 'volcengine',
        component: VolcenginePage,
        name: 'Volcengine'
      },
      // 默认重定向到第一个页面
      {
        path: '',
        redirect: 'deepseek'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router