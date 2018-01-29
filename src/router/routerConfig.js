const _import = require('./_import_' + process.env.NODE_ENV)

/* layout */
import Index from '@/views/user/Index'

const constantRouterMap = [
  {
    path: '/',
    component: _import('login/Login')
  },
  {
    path: '/login',
    component: _import('login/Login')
  },
  {
    path: '/register',
    component: _import('register/Register')
  },
  {
    path: '/user',
    component: Index,
    children: [
      { path: '/index', component: _import('user/Home'), name: '会员列表' },
      { path: '/userList', component: _import('user/UserList'), name: '列表' },
      { path: '/userInfo', component: _import('user/UserInfo'), name: '信息' }
    ]
  },
  {
    path: '/numberInfo/:uid',
    component: _import('user/NumberInfo'),
    name: '用户信息'
  }
]

export default constantRouterMap
