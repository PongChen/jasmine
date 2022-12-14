<template>
  <q-card :style="cardstyle">
    <q-card-section v-if="hasloaded" class="q-pa-none">
      <q-pdfviewer type="html5" :src="src" />
    </q-card-section>
    <q-card-section v-else class="q-pa-none"> </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "pdfViewer",
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
    const hasloaded = ref(false);
    const percent = ref(0);
    onMounted(() => {});
    return { hasloaded, percent };
  }
});
</script>
