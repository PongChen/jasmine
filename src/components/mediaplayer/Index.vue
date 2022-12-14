<template>
  <q-card :style="cardstyle">
    <q-card-section class="q-pa-none">
      <q-media-player type="video" :sources="src" />
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import "@quasar/quasar-ui-qmediaplayer/src/index.sass";
export default defineComponent({
  name: "mediaPlayer",
  components: {},
  props: {
    data: {
      type: Array,
      default: () => []
    },
    src: {
      type: String,
      default: () => ""
    }
  },
  setup(props) {
    const $q = useQuasar();
    onMounted(() => {});
    return {};
  }
});
</script>
