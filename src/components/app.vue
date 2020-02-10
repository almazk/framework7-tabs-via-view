<template>
   <f7-app :params="f7params">

      <f7-panel right cover swipe>
         <f7-view name="right">
            <f7-page class="margin-top padding-top">
               <f7-block-title class="bg-color-teal text-color-white">
                  Global Right Panel
               </f7-block-title>
               <f7-block>
                  $root.activeTab
                  <pre style="font-size: 11px">{{$root.activeTab}}</pre>
                  $root.tabs
                  <pre style="font-size: 11px">{{$root.tabs}}</pre>
               </f7-block>
            </f7-page>
         </f7-view>
      </f7-panel>

      <f7-appbar>
         <div class="left">
            Tabs
         </div>
         <div class="title">
            <tabs-navigation/>
         </div>
      </f7-appbar>

      <f7-views tabs class="safe-areas">
         <f7-toolbar tabbar labels top id="toolbar" class="app-tabs">
            <f7-link v-for="(TabInfo, Index) in Tabs"
                     :key="'toolbar-' + TabInfo.id"
                     :id="'toolbar-' + Index"
                     :tab-link="'#tab-' + Index"
                     :tab-link-active="$root.activeTab.index === Index"
                     :icon-aurora="TabInfo.icon"
                     :text="TabInfo.title"/>
         </f7-toolbar>
         <f7-view v-for="(TabInfo, Index) in Tabs"
                  :key="'tab-' + TabInfo.id"
                  @view:initDDD="$root.Tab().initView"
                  @tab:show="Tab().setActiveByID(TabInfo.id)"
                  :name="TabInfo.id"
                  :id="'tab-' + Index"
                  :main="TabInfo.main"
                  tab
                  class="padding-halfDD no-padding-top no-margin-top"
                  :tab-active="$root.activeTab.index === Index"
                  :url="TabInfo.url"/>
      </f7-views>
   </f7-app>
</template>
<script>

   import routes from '../js/routes.js';
   import TabsNavigation from "./tabs-navigation";

   export default {
      components: {TabsNavigation},
      data() {
         return {
            // Framework7 Parameters
            f7params: {
               name: 'F7-Vue-Tabs-View', // App name
               theme: 'aurora', // Automatic theme detection
               // App root data
               data: function () {
                  return {

                     // Demo products for Catalog section
                     products: [
                        {
                           id: '1',
                           title: 'Apple iPhone 8',
                           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
                        },
                        {
                           id: '2',
                           title: 'Apple iPhone 8 Plus',
                           description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
                        },
                        {
                           id: '3',
                           title: 'Apple iPhone X',
                           description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
                        },
                     ]
                  };
               },

               // App routes
               routes: routes,
            }
         }
      },
      computed: {
         Tabs() {
            return this.$root.tabs;
         }
      },
      methods: {
         Tab() {
            return this.$root.Tab();
         }
      },
      mounted() {
         this.$f7ready((f7) => {
            // Call F7 APIs here
         });
      }
   }
</script>


<style scoped>
   .app-tabs a.tab-link {
      /*width: 240px;*/
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
      cursor: default;
      height: calc(100% - 5px);
      align-self: flex-end;
      border-radius: 8px 8px 0 0;
      padding: 0 6px 0 10px !important;
      user-select: none;
   }

   .app-tabs a.tab-link:not(.tab-link-active):hover {
      background-color: rgba(255, 255, 255, 0.5);
   }

   .app-tabs a.tab-link-active {
      background-color: #56a7ff;
   }

   .app-tabs a.tab-link:first-child {
      margin-left: 5px;
   }

   .app-tabs .close-tab {
      margin-left: auto;
      display: flex;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      cursor: default;
   }

   .app-tabs .close-tab:hover {
      background: rgba(0, 0, 0, 0.05);
   }

   .app-tabs .close-tab i {
      font-size: 14px;
   }

   .app-tabs .label {
      flex-shrink: 10;
      min-width: 0;
      margin-right: 5px;
      overflow: hidden;
      position: relative;
      text-overflow: ellipsis;
   }

   .app-tabs .favicon {
      max-width: 16px;
      max-height: 16px;
      margin-right: 10px;
   }
</style>
