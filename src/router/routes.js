const routes = [
  {
    path: "/",
    name: "Welcom",
    component: () => import("pages/welcome/WelcomIndex.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("layouts/MainLayout.vue"),
    // component: () => import("pages/dashboard/IndexPage.vue")
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("pages/dashboard/IndexPage.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
