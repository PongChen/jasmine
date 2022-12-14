<template>
  <q-page class="q-pa-sm" padding>
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <ToolCard title="自拼二级-外教chant-U1L1 a ap at" headColor="#66d1a1">
          <q-media-player
            type="video"
            :sources="src1"
            content-height="520"
            style="
              --big-play-button-color: #fbc02d;
              --big-play-button-background: #d32f2f;
              --big-play-button-border: #ffff00;
              --big-play-button-hover-color: #d32f2f;
              --big-play-button-hover-background: #fbc02d;
              --big-play-button-border: #fbc02d 2px solid;
              --big-play-button-border-hover: #d32f2f 2px solid;
              --big-play-button-color-dark: #fbc02d;
              --big-play-button-background-dark: #d32f2f;
              --big-play-button-border-dark: #ffff00;
              --big-play-button-hover-color-dark: #d32f2f;
              --big-play-button-hover-background-dark: #fbc02d;
              --big-play-button-border-dark: #fbc02d 2px solid;
              --big-play-button-border-hover-dark: #d32f2f 2px solid;
              height: 520px;
            "
          />
        </ToolCard>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <ToolCard title="自拼四级-外教chant-U1L1 bl cl" headColor="#66d1a1">
          <q-media-player
            type="video"
            :sources="src2"
            :content-height="520"
            style="
              --big-play-button-color: #fbc02d;
              --big-play-button-background: #d32f2f;
              --big-play-button-border: #ffff00;
              --big-play-button-hover-color: #d32f2f;
              --big-play-button-hover-background: #fbc02d;
              --big-play-button-border: #fbc02d 2px solid;
              --big-play-button-border-hover: #d32f2f 2px solid;
              --big-play-button-color-dark: #fbc02d;
              --big-play-button-background-dark: #d32f2f;
              --big-play-button-border-dark: #ffff00;
              --big-play-button-hover-color-dark: #d32f2f;
              --big-play-button-hover-background-dark: #fbc02d;
              --big-play-button-border-dark: #fbc02d 2px solid;
              --big-play-button-border-hover-dark: #d32f2f 2px solid;
              height: 520px;
            "
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
        src: "http://store.giser.org.cn/jasminefiles/video/pindu2.mp4",
        type: "video/mp4"
      }
    ];
    const src2 = [
      {
        src: "http://store.giser.org.cn/jasminefiles/video/pindu4.mp4",
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
