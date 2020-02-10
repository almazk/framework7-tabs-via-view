import TabRouting from '../js/tabs.routes';

import HomePage from '../pages/home.vue';
import CatalogPage from '../pages/catalog.vue';
import ProductPage from '../pages/product.vue';
import SettingsPage from '../pages/settings.vue';

import NotFoundPage from '../pages/404.vue';


let routes = [
   {
      path: '/',
      component: HomePage,
   },
   {
      path: '/catalog',
      async: TabRouting,
      options: {
         context: {
            component: CatalogPage
         }
      }
   },
   {
      name: 'main',
      path: '/product/:id',
      async: TabRouting,
      options: {
         context: {
            component: ProductPage
         }
      }
   },
   {
      name: 'main',
      path: '/settings',
      async: TabRouting,
      options: {
         transition: 'f7-cover-v',
         context: {
            component: SettingsPage
         }
      }
   },
   {
      name: 'main',
      path: '(.*)',
      async: TabRouting,
      options: {
         context: {
            title: ($RouteTo) => {
               return '404 ' + $RouteTo.url;
            },
            component: NotFoundPage,
         }
      }
   },
];

export default routes;
