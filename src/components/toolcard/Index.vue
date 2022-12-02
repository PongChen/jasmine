<template>
  <q-card :style="cardstyle">
    <!-- class="q-ma-xs" -->
    <q-card-section class="q-pa-none" v-bind:style="{ background: headColor }">
      <!-- <div class="box box-success"> -->
      <div class="box-header with-border">
        <h3 class="box-title">{{ title }}</h3>
        <div class="box-tools pull-right4">
          <slot name="custom3"></slot>
        </div>
        <div class="box-tools pull-right4">
          <slot name="custom2"></slot>
        </div>
        <div class="box-tools pull-right3">
          <slot name="custom"></slot>
        </div>
        <div v-if="maxbox" class="box-tools pull-right">
          <q-btn
            round
            dense
            flat
            color="white"
            :icon="isfullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreentoggle"
            ><q-tooltip content-class="bg-darck">全屏</q-tooltip></q-btn
          >
        </div>
        <div v-else class="box-tools pull-right">
          <q-btn round dense flat color="white" icon="local_florist"
            ><q-tooltip content-class="bg-darck"
              >jasmine小姐爱茉莉</q-tooltip
            ></q-btn
          >
        </div>
      </div>
    </q-card-section>
    <q-card-section
      class="q-pa-none"
      :style="{ background: bodyColor, height: bodyheight }"
    >
      <slot name="top"></slot>
      <slot></slot>
      <slot name="buttom"></slot>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import "./toolcard.scss";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "ToolCardComponent",
  components: {},
  props: {
    data: {
      type: Array,
      default: () => []
    },
    bodyheight: {
      type: String,
      default: () => "calc(100% - 42px)"
    },
    cardstyle: {
      type: String,
      default: () => ""
    },
    headColor: {
      type: String,
      default: () => ""
    },
    bodyColor: {
      type: String,
      default: () => ""
    },
    title: {
      type: String,
      default: () => ""
    },
    maxbox: {
      type: Boolean,
      default: false
    },
    refreshbox: {
      type: Boolean,
      default: false
    },
    collapsebox: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const $q = useQuasar();
    const isfullscreen = ref(false);
    function refreshTable() {
      //
    }
    function fullscreentoggle(e) {
      const target =
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode
          .parentNode;

      $q.fullscreen
        .toggle(target)
        .then(() => {
          // success!
          isfullscreen.value = !isfullscreen.value;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    onMounted(() => {});
    return { isfullscreen, fullscreentoggle };
  }
});
</script>
