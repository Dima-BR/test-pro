<template >
  <div class="container py-5" style="padding-top:70px;">

    <!-- <Info :translations="translations" /> -->
    <!-- <InfoBreadcrumb :information="information"/> -->
    <InfoBox :information="information"/>
    <tabs />

  </div>
</template>

<script>
// import InfoBreadcrumb from '@/Components/InfoPage/InfoBreadcrumb.vue'
import InfoBox from '@/Components/InfoBox.vue'
import tabs from '@/Components/tabs.vue'
import Card from '../organizim/Card.vue'


export default {
  name:'Info',
  components: {
    // InfoBreadcrumb,
     InfoBox, tabs, Card
  },
  data() {
    return {
      information: [],
      relatedItems: [],
      currentLanguage: 'en',
    }
  },
  created(){
    this.information = this.infO
    this.relatedItems = this.bringItems
    },
  computed: {
    infO() {
      return this.$store.getters.infoLength
    },
    bringItems() {
      return this.$store.state.items
    },
    sliceRelatedItems(){
      return this.relatedItems.slice(0 ,3)
    }
  },
  methods: {
    sendInfo(it, id) {
     this.$store.commit('addtoInfo', it, id)
    },
    handleLanguageSwitch(language) {
      if (language === 'en') {
        this.currentLanguage = 'en';
        this.translations = require('@/locales/en.json');
        document.documentElement.dir = 'ltr'; // Set the document direction to LTR for English
      } else if (language === 'ar') {
        this.currentLanguage = 'ar';
        this.translations = require('@/locales/ar.json');
        document.documentElement.dir = 'rtl'; // Set the document direction to RTL for Arabic
    }
    
  },
  }
}
</script>

<style scoped>
hr {
width: 50px;
border-bottom: 1px solid black;
}
.related-item{
  padding-left: 8rem;
  padding-right: 8rem;
  height: auto;
  text-align: center;
}
</style>
