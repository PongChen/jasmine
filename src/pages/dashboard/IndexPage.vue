<template>
  <q-page class="q-pa-sm">
    <div class="row">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <Carousel></Carousel>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <CarouselVideo></CarouselVideo>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import topAppVue from "./top-app.vue";
import Carousel from "./components/Carousel.vue";
import CarouselVideo from "./components/CarouselVideo.vue";
export default defineComponent({
  name: "IndexPage",
  components: { Carousel, CarouselVideo },
  setup() {
    function refreshTable() {
      //
    }
    onMounted(() => {});
    return {};
  }
});
</script>
