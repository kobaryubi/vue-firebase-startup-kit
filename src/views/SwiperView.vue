<template>
  <div class="container">
    <div class="slides">
      <Swiper
        :slides-per-view="3"
        :space-between="16"
        @slide-change="handleChangeSlide"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>


<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const handleChangeSlide = () => {
  console.log('slide change');
};
</script>

<style scoped lang="scss">
@use '@/assets/base';

.container {
  max-width: base.$container-max-width;
  background-color: base.$container-background-color;
}
</style>