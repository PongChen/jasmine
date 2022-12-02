<template>
  <div class="q-pa-md q-gutter-sm">
    <q-carousel animated v-model="slide" infinite>
      <q-carousel-slide name="yun">
        <q-video
          class="absolute-full"
          src="http://store.giser.org.cn/jasminefiles/video/appvideo.mp4"
        />
      </q-carousel-slide>

      <q-carousel-slide name="Rihanna">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/kOkQ4T5WO9E"
        />
      </q-carousel-slide>

      <q-carousel-slide name="ibiza">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/p87miJIYEEk"
        />
      </q-carousel-slide>
    </q-carousel>

    <!-- <div class="row justify-center">
      <q-btn-toggle
        v-model="slide"
        :options="[
          { label: '小优识字', value: 'yun' },
          { label: 'youtube', value: 'Rihanna' },
          { label: 'youtube', value: 'ibiza' }
        ]"
      />
    </div> -->
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "IndexPage",
  components: {},
  setup() {
    const slide = ref("yun");
    const autoplay = ref(true);
    function refreshTable() {
      //
    }
    onMounted(() => {});
    return { slide, autoplay };
  }
});
</script>
