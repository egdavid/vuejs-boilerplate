import Vue from "vue";
import Router from "vue-router";
import Authenticator from "@/lib/Authenticator";

import Home from "@/views/Home.vue";
import Repository from "@/views/Repository.vue";
import Profile from "@/views/Profile.vue";
import Portal from "@/views/Portal.vue";

Vue.use(Router);
const auth = new Authenticator();

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: `Home page - ${process.env.VUE_APP_NAME}`,
        metaTags: [
          {
            name: "description",
            content: "The home page of our vuejs boilerplate."
          },
          {
            property: "og:description",
            content: "The home page of our vuejs boilerplate."
          }
        ]
      }
    },
    {
      path: "/repository",
      name: "repository",
      component: Repository,
      meta: {
        title: `Repository - ${process.env.VUE_APP_NAME}`,
        metaTags: [
          {
            name: "description",
            content: "The repository page of our vuejs boilerplate."
          },
          {
            property: "og:description",
            content: "The repository page of our vuejs boilerplate."
          }
        ]
      }
    },
    {
      path: "/portal",
      name: "portal",
      component: Portal,
      meta: {
        title: `Portal - ${process.env.VUE_APP_NAME}`,
        metaTags: [
          {
            name: "description",
            content: "Portal component demo, that's awesome, trust me!"
          },
          {
            property: "og:description",
            content: "Portal component demo, that's awesome, trust me!"
          }
        ]
      }
    },
    {
      path: "/profile",
      name: "profile",
      beforeEnter: auth.requireAuth,
      component: Profile,
      meta: {
        title: `Profile - ${process.env.VUE_APP_NAME}`,
        metaTags: [
          {
            name: "description",
            content: "User's profile page, requires to be loggedin!"
          },
          {
            property: "og:description",
            content: "User's profile page, requires to be loggedin!"
          }
        ]
      }
    }
  ]
});

// Called before every route change or page load
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    el => el.parentNode.removeChild(el)
  );

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })

    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
