export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        name: '首页',
        component: './homepage',
      },
      {
        path: '/contacts',
        name: '联系我们',
        component: './contacts',
      },
      {
        path: '*',
        component: './404',
      },
    ],
  },
  {
    path: '/user',
    routes: [
      {
        path: '/user',
        name: '用户页',
        component: './user',
      },
    ],
  },
];
