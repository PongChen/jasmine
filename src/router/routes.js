const routes = [
  {
    path: "/",
    name: "Welcom",
    component: () => import("pages/welcome/WelcomIndex.vue")
  },
  {
    path: "/painting",
    name: "Painting",
    component: () => import("layouts/MainLayout.vue"),
    // component: () => import("pages/dashboard/IndexPage.vue")
    children: [
      {
        path: "/painting",
        name: "Painting",
        component: () => import("pages/Painting/IndexPage.vue")
      }
    ]
  },
  {
    path: "/spelling",
    name: "Spelling",
    component: () => import("layouts/MainLayout.vue"),
    // component: () => import("pages/dashboard/IndexPage.vue")
    children: [
      {
        path: "/spelling",
        name: "Spelling",
        component: () => import("pages/Spelling/IndexPage.vue")
      }
    ]
  },
  {
    path: "/videolesson",
    name: "Videolesson",
    component: () => import("layouts/MainLayout.vue"),
    // component: () => import("pages/dashboard/IndexPage.vue")
    children: [
      {
        path: "/videolesson",
        name: "Videolesson",
        component: () => import("pages/Videolesson/IndexPage.vue")
      }
    ]
  },
  {
    path: "/appresource",
    name: "AppResource",
    component: () => import("layouts/MainLayout.vue"),
    // component: () => import("pages/dashboard/IndexPage.vue")
    children: [
      {
        path: "/appresource",
        name: "AppResource",
        component: () => import("pages/appresource/IndexPage.vue")
      }
    ]
  },
  {
    path: "/teachingmaterial",
    name: "TeachingMaterial",
    component: () => import("layouts/MainLayout.vue"),
    // component: () => import("pages/dashboard/IndexPage.vue")
    children: [
      {
        path: "/teachingmaterial",
        name: "TeachingMaterial",
        component: () => import("pages/teachingmaterial/IndexPage.vue")
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
