<template>
   <f7-page name="home"
            :page-content="false">

      <f7-popup ref="popupGlobal">
         <f7-view>
            <f7-page>
               <f7-navbar title="Global Popup">
                  <div class="navbar-bg bg-color-green"/>
                  <f7-nav-right>
                     <f7-link popup-close>Close</f7-link>
                  </f7-nav-right>
               </f7-navbar>
               <f7-block>
                  <p>Global Popup content goes here.</p>
                  <tabs-navigation/>
               </f7-block>
            </f7-page>
         </f7-view>
      </f7-popup>

      <f7-popup ref="popupLocal">
         <f7-view>
            <f7-page>
               <f7-navbar title="Local Popup">
                  <div class="navbar-bg bg-color-orange"/>
                  <f7-nav-right>
                     <f7-link popup-close>Close</f7-link>
                  </f7-nav-right>
               </f7-navbar>
               <f7-block>
                  <p>Local Popup content goes here.</p>
                  <tabs-navigation/>
               </f7-block>
            </f7-page>
         </f7-view>
      </f7-popup>

      <f7-page-content>
         <!-- Page content-->
         <f7-row>
            <f7-col>
               <f7-block-title>Pages as tabs</f7-block-title>
               <f7-list>
                  <f7-list-item v-for="(Link, Index) in links"
                                :key="Index"
                                class="text-color-pink"
                                :link="Link.url">
                     {{Link.title}}
                  </f7-list-item>
               </f7-list>
            </f7-col>
            <f7-col>
               <f7-block-title>
                  Modals
               </f7-block-title>
               <f7-block strong>
                  <f7-segmented>
                     <f7-button small
                                fill color="green" raised @click="$refs.popupGlobal.open()">
                        #1 Popup global, visible anywhere
                     </f7-button>
                     <f7-button small
                                fill color="orange" raised @click="$refs.popupLocal.open()">
                        #2 Popup related to tab(view)
                     </f7-button>
                  </f7-segmented>
               </f7-block>
               <f7-block-title>
                  Panels
               </f7-block-title>
               <f7-block>
                  <f7-button panel-open="right"
                             fill color="teal">
                     Global Right Panel
                  </f7-button>
               </f7-block>
            </f7-col>
         </f7-row>

         <f7-button @click="Test" small raised
                    fill class="margin-horizontal">
            START TESTs
         </f7-button>

      </f7-page-content>
   </f7-page>
</template>


<script>
   import RootData from "../components/root-data";
   import TabsNavigation from "../components/tabs-navigation";

   export default {
      name: 'page-home',
      components: {TabsNavigation, RootData},
      data() {
         return {
            links: [
               {title: 'Catalog of products', url: '/catalog'},
               {title: 'Product #1', url: '/product/1'},
               {title: 'Settings', url: '/Settings'},
               {title: 'NoneExistingPage', url: '/noneExistingPage?paramName=paramValue'}
            ]
         }
      },
      methods: {
         Test() {
            window.App.Test().init();
         }
      },
   }
</script>
