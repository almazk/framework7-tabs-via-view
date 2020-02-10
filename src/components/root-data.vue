<template>
   <f7-block strong>
      $root.data:
      <pre style="font-size:10px">{{RootData}}</pre>
   </f7-block>
</template>

<script>
   export default {
      name: 'root-data',
      computed: {
         RootData() {
            let {tabs, activeTab} = this.$root;
            return {
               tabs, activeTab
            };
         }
      },
   }
</script>
