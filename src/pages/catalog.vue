<template>
   <f7-page name="catalog" class="padding-halfDD no-margin-top no-padding-top">
      <f7-panel right cover swipe ref="localRightPanel">
         <f7-view>
            <f7-page class="margin-top padding-top">
               <f7-block class="bg-color-pink text-color-white">
                  Local Right Panel of Catalog
               </f7-block>
            </f7-page>
         </f7-view>
      </f7-panel>

      <f7-row>
         <f7-col width="50">
            <f7-list media-list>
               <f7-list-item v-for="(Product, Index) in this.$f7.data.products"
                             :key="Index"
                             :link="'/product/' + Product.id">
                  <div slot="title">
                     {{Product.title}}
                  </div>
                  <div slot="text">
                     {{Product.description}}
                  </div>
               </f7-list-item>
            </f7-list>
         </f7-col>
         <f7-col width="50">
            <f7-block-title>
               Panels
            </f7-block-title>
            <f7-block>
               <f7-button @click="$refs.localRightPanel.open()"
                          fill color="red">
                  Local Right Panel
               </f7-button>
            </f7-block>
            <f7-block-footer class="text-color-pink">
               Clicking button - Ok.
               Try to swipe right panel - it changes on release.
            </f7-block-footer>
         </f7-col>
      </f7-row>
   </f7-page>
</template>

<script>
   export default {
      name: 'page-catalog'
   }
</script>
