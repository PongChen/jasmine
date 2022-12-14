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
      :height="height"
    >
      <q-carousel-slide
        v-for="(s, index) in src"
        :key="index"
        :name="index"
        :img-src="s"
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
  props: {
    height: {
      type: String,
      default: () => "400px"
    },
    src: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const slide = ref(0);
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
