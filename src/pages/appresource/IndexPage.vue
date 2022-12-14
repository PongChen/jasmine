<template>
  <q-page class="q-pa-sm" padding>
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <ToolCard title="App资源研发概览" headColor="#ffeb3b">
          <Carousel :src="imgs1" :height="h"></Carousel>
        </ToolCard>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <ToolCard title="小优识字" headColor="#66d1a1">
          <CarouselVideo></CarouselVideo>
        </ToolCard>
      </div>
    </div>
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <!-- :cardstyle="'height:717px !important;background: rgb(3 67 121)'" -->
        <ToolCard title="识字" headColor="#ffeb3b">
          <Carousel :src="imgs2" :height="h"></Carousel>
        </ToolCard>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <ToolCard title="拼读与绘本" headColor="#ffeb3b">
          <Carousel :src="imgs3" :height="h"></Carousel>
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
import Carousel from "../../components/imagecarousel";
import CarouselVideo from "./components/CarouselVideo.vue";
export default defineComponent({
  name: "IndexPage",
  components: { Carousel, CarouselVideo, ToolCard },
  setup() {
    function refreshTable() {
      //
    }
    const imgs1 = [
      "http://store.giser.org.cn/jasminefiles/img/j1.png",
      "http://store.giser.org.cn/jasminefiles/img/j2.png",
      "http://store.giser.org.cn/jasminefiles/img/j3.png",
      "http://store.giser.org.cn/jasminefiles/img/j4.png",
      "http://store.giser.org.cn/jasminefiles/img/j5.png"
    ];
    const imgs2 = [
      "http://store.giser.org.cn/jasminefiles/img/img1.png",
      "http://store.giser.org.cn/jasminefiles/img/img2.png",
      "http://store.giser.org.cn/jasminefiles/img/img3.png",
      "http://store.giser.org.cn/jasminefiles/img/img4.png",
      "http://store.giser.org.cn/jasminefiles/img/img5.png",
      "http://store.giser.org.cn/jasminefiles/img/img6.png"
    ];
    const imgs3 = [
      "http://store.giser.org.cn/jasminefiles/img/c1.png",
      "http://store.giser.org.cn/jasminefiles/img/c2.png",
      "http://store.giser.org.cn/jasminefiles/img/c3.png",
      "http://store.giser.org.cn/jasminefiles/img/c4.png"
    ];
    onMounted(() => {});
    return { imgs1, imgs2, imgs3, h: "520px" };
  }
});
</script>
