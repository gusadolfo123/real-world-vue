import Vue from "vue";
import Router from "vue-router";
import EventCreate from "./views/EventCreate.vue";
import EventList from "./views/EventList.vue";
import EventShow from "./views/EventShow.vue";
import User from "./views/User.vue";

Vue.use(Router);

export default new Router({
  // quita el # de la url y hace que cuando se cambien valores por URL se refresque toda la pagina
  mode: "history",
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList,
      alias: "home"
    },
    {
      path: "/event/:id",
      name: "event-show",
      component: EventShow,
      props: true
    },
    {
      path: "/event-create",
      name: "event-create",
      component: EventCreate
    },
    {
      path: "/user/:userName",
      name: "user",
      component: User,
      props: true
    }
  ]
});
