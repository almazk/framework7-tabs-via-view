<template>
   <f7-segmented v-if="Tab().count() >1"
                 style="width: 300px">
      <f7-button @click="Tab().prev()"
                 tooltip="previous tab"
                 :disabled="!$root.Tab().hasNavigation()"
                 small fill color="green">
         &lt; пред
      </f7-button>
      <f7-button @click="Tab().close()"
                 tooltip="close this tab"
                 :disabled="$root.activeTab.index===0 || !$root.Tab().hasNavigation()"
                 small fill color="orange">
         закрыть x
      </f7-button>
      <f7-button @click="Tab().next()"
                 tooltip="next tab"
                 :disabled="!$root.Tab().hasNavigation()"
                 small fill color="green">
         след &gt;
      </f7-button>
   </f7-segmented>
</template>

<script>
   export default {
      name: 'tabs-navigation',
      methods: {


         Tab() {
            return this.$root.Tab();
         }
      },
   }
</script>
