<template>
  <q-page class="q-pa-sm" padding>
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <ToolCard title="App资源研发" headColor="#66d1a1">
          <Carousel></Carousel>
        </ToolCard>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <ToolCard title="小优识字" headColor="#66d1a1">
          <CarouselVideo></CarouselVideo>
        </ToolCard>
      </div>
    </div>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="indigo" />
    </q-page-scroller>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import ToolCard from "../../components/toolcard";
import Carousel from "./components/Carousel.vue";
import CarouselVideo from "./components/CarouselVideo.vue";
export default defineComponent({
  name: "IndexPage",
  components: { Carousel, CarouselVideo, ToolCard },
  setup() {
    function refreshTable() {
      //
    }
    onMounted(() => {});
    return {};
  }
});
</script>
