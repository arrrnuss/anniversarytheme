const routes = [
  // {
  //   path: '/aaa',
  //   name: 'aaa',
  //   component: () => import('../components/aaa/aaa.vue'),
  // },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/login/login.vue"),
  },
  {
    path: "/aaa",
    name: "aaa",
    component: () => import("../components/aaa/aaa.vue"),
  },
  {
    path: "/ppp",
    name: "ppp",
    component: () => import("../components/ppp/ppp.vue"),
  },
  {
    path: "/lll",
    name: "lll",
    component: () => import("../components/lll/lll.vue"),
  },
  {
    path: "/",
    component: () => import("../components/qqq/qqq.vue"),
    // children: [
    //   {
    //     path: '/aaa',
    //     name: 'aaa',

    //   }
    // ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
