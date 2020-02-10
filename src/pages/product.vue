<template>
   <f7-page name="product">
      <f7-block-title>
         About {{product.title}}
         <div class="float-right">
            <f7-link href="/catalog">Back to Catalog</f7-link>
         </div>
      </f7-block-title>

      <f7-block strong>
         {{$f7route.params}}
         <hr/>
         {{product.description}}
      </f7-block>
      <pre><root-data/></pre>
   </f7-page>
</template>
<script>
   import RootData from "../components/root-data";

   export default {
      name: 'page-product',
      components: {RootData},
      data: function () {
         let productId = this.$f7route.params.id;
         let currentProduct;
         this.$f7.data.products.forEach(function (product) {
            if (product.id === productId) {
               currentProduct = product;
            }
         });
         return {
            product: currentProduct,
         };
      }
   };
</script>
