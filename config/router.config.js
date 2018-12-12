export default [
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      { path: '/', redirect: '/exception/404' },
      {
        path: '/exception',
        routes: [
          {
            path: '/exception/404',
            name: 'not-found',
            component: './Exception/404',
          },
        ],
      },
    ],
  },
];
