import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import Cart from "@/pages/Cart";

// Admin Components
import Index from "@/pages/admin/Index";
import New from "@/pages/admin/New";
import Products from "@/pages/admin/Products";
import Edit from "@/pages/admin/Edit";
import Detail from "@/pages/Detail";
import Manufacturers from '@/pages/admin/Manufacturers.vue';
import NewManufacturers from '@/pages/admin/NewManufacturers.vue';
import EditManufacturers from '@/pages/admin/EditManufacturers.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/admin",
      name: "Admin",
      component: Index,
      children: [
        {
          path: "new",
          name: "New",
          component: New
        },
        {
          path: "",
          name: "Products",
          component: Products
        },
        {
          path: "edit/:id",
          name: "Edit",
          component: Edit
        },
        {
          path: "manufacturers",
          name: "Manufacturers",
          component : Manufacturers
        },
        {
          path:"manufacturers/new",
          name:"NewManufacturers",
          component:NewManufacturers
        },
        {
          path:"manufacturers/edit/:id",
          name:"EditManufacturers",
          component:EditManufacturers
        }
      ]
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path:"/detail/:id",
      name:"Detail",
      component : Detail,
    }
  ]
});
