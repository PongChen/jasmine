<template>
  <q-page class="q-pa-sm" padding>
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <ToolCard
          :title="$q.platform.is.mobile ? '藏宝图' : '藏宝图'"
          headColor="#66d1a1"
          cardstyle="height:800px !important;background: rgb(3 67 121)"
        >
          <q-pdfviewer
            :type="$q.platform.is.mobile ? 'html5' : 'html5'"
            :src="pdf1"
          />
        </ToolCard>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <ToolCard
          :title="$q.platform.is.mobile ? '失灵的旅行机' : '失灵的旅行机'"
          headColor="#66d1a1"
          cardstyle="height:800px !important;background: rgb(3 67 121)"
        >
          <q-pdfviewer :type="html5" :src="pdf" />
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
import pdfviewer from "../../components/pdfviewer";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "IndexPage",
  components: { ToolCard },
  setup() {
    function refreshTable() {
      //
    }

    const $q = useQuasar();
    onMounted(() => {});
    return {
      visible: ref(true),
      pdf: "http://store.giser.org.cn/jasminefiles/pdf/travel.pdf",
      pdf1: "http://store.giser.org.cn/jasminefiles/pdf/cangbao.pdf"
    };
  }
});
</script>
