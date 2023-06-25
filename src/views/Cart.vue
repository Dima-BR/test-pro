<template>
    <section class="h-100 h-custom min-h-content">
        <Cart ref="cartMove" />
    </section>
</template>
    <script>
    import Cart from '../Components/Cart.vue';
    
    export default{
    components :{
         Cart},
    methods:{
        removeItem(item){
            this.$store.commit('addRemoveCart',{product:item,toAdd:false})
        },
    },
    computed: {
        bagItemscount() {
          return this.$store.getters.itemsNumber
        }
      },
    }
    </script>