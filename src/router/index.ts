import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
/*
import BlogHome from '@/components/BlogHome';
import BlogPost from '@/components/BlogPost';
*/

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( "../views/About.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () =>
      import( "../views/Services.vue"),
  },
  {
    path: '/portfolio/',
    name: 'Portfolio',
    component: () =>
    import( "../views/Portfolio.vue"),
  },
  {
    path: '/blog/',
    name: 'Blog',
    component: () =>
    import( "../views/Blog.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import( "../views/Contact.vue"),
  },
  /*
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: BlogPost
  },
  */
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
