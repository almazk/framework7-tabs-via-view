<template>
   <f7-page name="settings">
      <f7-row>
         <f7-col>
            <f7-list no-hairlines-md>
               <f7-list-input
                       label="Gender"
                       type="select">
                  <option>Male</option>
                  <option>Female</option>
               </f7-list-input>

               <f7-list-input
                       label="Birth date"
                       type="date"
                       placeholder="Birth day"
                       defaultValue="2014-04-30"/>
               <f7-list-item
                       title="Toggle">
                  <f7-toggle slot="after"></f7-toggle>
               </f7-list-item>

               <f7-list-input
                       label="Range"
                       :input="false">
                  <f7-range slot="input" :value="50" :min="0" :max="100" :step="1"></f7-range>
               </f7-list-input>
            </f7-list>
         </f7-col>

         <f7-col>
            <f7-block-title>Checkbox group</f7-block-title>
            <f7-list>
               <f7-list-item
                       checkbox
                       name="my-checkbox"
                       value="Books"
                       title="Books"/>
               <f7-list-item
                       checkbox
                       name="my-checkbox"
                       value="Movies"
                       title="Movies"/>
               <f7-list-item
                       checkbox
                       name="my-checkbox"
                       value="Food"
                       title="Food"/>
            </f7-list>
            <f7-block-title>Radio buttons group</f7-block-title>
            <f7-list>
               <f7-list-item
                       radio
                       name="radio"
                       value="Books"
                       title="Books"/>
               <f7-list-item
                       radio
                       name="radio"
                       value="Movies"
                       title="Movies"/>
               <f7-list-item
                       radio
                       name="radio"
                       value="Food"
                       title="Food"/>
            </f7-list>
         </f7-col>
      </f7-row>


   </f7-page>
</template>

<script>
   export default {
      name: 'page-settings'
   }
</script>
