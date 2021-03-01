import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import Partinfo from '../parts/Partinfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

const routes = [{
  path: '/',
  name: 'Home',
  components: {
    default: HomePage,
    sidebar: SidebarStandard,
  },
}, {
  path: '/build',
  name: 'Build',
  components: {
    default: RobotBuilder,
    sidebar: SidebarBuild,
  },
}, {
  path: '/parts/browse',
  name: 'BrowseParts',
  component: BrowseParts,
  children: [{
    name: 'BrowseHeads',
    path: 'heads',
    component: RobotHeads,
  },
  {
    name: 'BrowseArms',
    path: 'arms',
    component: RobotArms,
  },
  {
    name: 'BrowseTorsos',
    path: 'torsos',
    component: RobotTorsos,
  },
  {
    name: 'BrowseBases',
    path: 'Bases',
    component: RobotBases,
  }],
}, {
  path: '/parts/:partType/:id',
  name: 'Parts',
  component: Partinfo,
  props: true,
  beforeEnter(to, from, next) {
    const isValid = Number.isInteger(Number(to.params.id));
    next(isValid);
  },
}, {
  path: '/cart',
  name: 'Cart',
  component: ShoppingCart,
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
