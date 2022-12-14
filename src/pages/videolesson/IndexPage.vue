<template>
  <q-page class="q-pa-sm" padding>
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <ToolCard title="The Class Trip" headColor="#66d1a1">
          <q-media-player
            type="video"
            :sources="src1"
            :poster="poster1"
            content-height="520px"
            style="height: 520px"
          />
        </ToolCard>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <ToolCard title="The King's Yu Player" headColor="#66d1a1">
          <q-media-player
            type="video"
            :sources="src2"
            :poster="poster2"
            content-height="520px"
            style="height: 520px"
          />
        </ToolCard>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import ToolCard from "../../components/toolcard";
export default defineComponent({
  name: "IndexPage",
  components: { ToolCard },
  setup() {
    function refreshTable() {
      //
    }
    const src1 = [
      {
        src: "http://store.giser.org.cn/jasminefiles/video/TheClassTrip.mp4",
        type: "video/mp4"
      }
    ];
    const src2 = [
      {
        src: "http://store.giser.org.cn/jasminefiles/video/TheKing'sYuPlayer.mp4",
        type: "video/mp4"
      }
    ];
    const poster1 = "http://store.giser.org.cn/jasminefiles/img/trip.png";
    const poster2 = "http://store.giser.org.cn/jasminefiles/img/king.png";
    onMounted(() => {});
    return { src1, src2, poster1, poster2 };
  }
});
</script>
