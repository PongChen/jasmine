<template>
  <div class="q-pa-md q-gutter-sm">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      v-model:fullscreen="fullscreen"
      :autoplay="autoplay"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        :name="1"
        img-src="http://store.giser.org.cn/jasminefiles/img/img1.png"
      />
      <q-carousel-slide
        :name="2"
        img-src="http://store.giser.org.cn/jasminefiles/img/img2.png"
      />
      <q-carousel-slide
        :name="3"
        img-src="http://store.giser.org.cn/jasminefiles/img/img3.png"
      />
      <q-carousel-slide
        :name="4"
        img-src="http://store.giser.org.cn/jasminefiles/img/img4.png"
      />
      <q-carousel-slide
        :name="5"
        img-src="http://store.giser.org.cn/jasminefiles/img/img5.png"
      />
      <template v-slot:control>
        <q-carousel-control position="bottom-right" :offset="[18, 18]">
          <q-btn
            push
            round
            dense
            color="white"
            text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "IndexPage",
  components: {},
  setup() {
    const slide = ref(1);
    const autoplay = ref(true);
    const fullscreen = ref(false);
    function refreshTable() {
      //
    }
    onMounted(() => {});
    return { slide, autoplay, fullscreen };
  }
});
</script>
