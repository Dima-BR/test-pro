<template>
  <div>
    <div>
    <!-- <h1>{{ $t('greeting') }}</h1>
    <p>{{ $t('welcome') }}</p> -->
  </div>
    <hero-image/>
    <!-- <Carousel /> -->
  </div>
</template>

<script>
// import Carousel from '@/Components/Carousel.vue'
import HeroImage from '../Components/HeroImage.vue'

export default {
  components: {
    // Carousel,
    HeroImage
  }
}

</script>
