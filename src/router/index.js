import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";
import store from "../store";
import SignIn from "../views/sessions/SignIn.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../layout/index.vue"),
    redirect: "/dashboards/dashboard",
    meta: {
      title: "Home",
    },

    children: [
      {
        path: "/dashboards",
        name: "Dashboards",
        component: () => import("../views/dashboards/index.vue"),
        meta: {
          title: "Dashboard",
        },
        children: [
          {
            path: "dashboard",
            name: "dashboard",
            component: () => import("../views/dashboards/Dashboards.vue"),
          },
        ],
      },
      {
        path: "/management",
        name: "management",
        component: () => import("../views/management/index.vue"),
        meta: {
          title: "Management",
        },
        children: [
          {
            path: "publisher",
            name: "publisher",
            component: () =>
              import("../views/management/publisher/publisher.vue"),
            meta: {
              title: "Publisher Management",
            },
          },
          {
            path: "newPublisher",
            name: "new publisher",
            component: () =>
              import("../views/management/publisher/AddPublisher.vue"),
            meta: {
              title: "New Publisher",
            },
          },

          {
            path: "visitor",
            name: "visitor",
            component: () => import("../views/management/visitor/visitor.vue"),
            meta: {
              title: "Visitor Management",
            },
          },
          {
            path: "newVisitor",
            name: "new visitor",
            component: () =>
              import("../views/management/visitor/AddVisitor.vue"),
            meta: {
              title: "New Visitor",
            },
          },

          {
            path: "editor",
            name: "editor",
            component: () => import("../views/management/editor/editor.vue"),
            meta: {
              title: "Editor Management",
            },
          },
          {
            path: "newEditor",
            name: "new editor",
            component: () => import("../views/management/editor/AddEditor.vue"),
            meta: {
              title: "New Editor",
            },
          },
        ],
      },

      {
        path: "/profile",
        name: "profile",
        component: () => import("../views/profile/index.vue"),
        meta: {
          title: "Profile",
        },
        children: [
          {
            path: "adminProfile",
            name: "Profile",
            component: () => import("../views/profile/Profile.vue"),
          },
        ],
      },

      {
        path: "/advertisements",
        name: "advertisements",
        component: () => import("../views/advertisement/index.vue"),
        meta: {
          title: "Advertisements",
        },
        children: [
          {
            path: "list",
            name: "ads list",
            component: () => import("../views/advertisement/advertisement.vue"),
            meta: {
              title: "Advertisements",
            },
          },

          {
            path: "newAd",
            name: "new advertisement",
            component: () =>
              import("../views/advertisement/options/AddAdvertisement.vue"),
            meta: {
              title: "New Advertisement",
            },
          },
        ],
      },
    ],
  },

  {
    path: "/signIn",
    name: "signIn",
    component: SignIn,
    meta: { title: "signin" },
  },

  { path: "/:path(.*)", component: NotFound, meta: { title: "Error" } },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "signIn" && !localStorage.getItem('token')) next({ name: "signIn" });
  else 
  document.title = `${to.meta.title}`;
  next();
 
});

router.afterEach(() => {
  if (window.innerWidth <= 1200) {
    const sidenav =
      store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen;

    store.commit("largeSidebar/toggleSidebarProperties");
  }
});

export default router;
