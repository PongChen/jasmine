<template>
  <q-card class="no-shadow no-border">
    <q-card-section class="q-pa-none">
      <div class="row q-col-gutter-x-sm">
        <div class="col-md-3 col-sm-12 col-xs-12">
          <q-card>
            <q-item style="background-color: rgb(208 180 41)" class="q-pa-none">
              <q-item-section class="q-pa-md q-ml-none text-white">
                <q-item-label
                  class="text-h6 text-center text-weight-bolder"
                  style="color: #ce7302"
                  >999</q-item-label
                >
                <q-item-label class="text-center" style="color: #ce7302"
                  >少林寺</q-item-label
                >
              </q-item-section>
              <q-item-section side class="q-mr-md text-white">
                <img src="img/jx3/shaolin.png" width="64" height="64" />
                <!-- <q-icon name="train" color="white" size="44px"></q-icon> -->
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12">
          <q-card>
            <q-item
              style="background-color: rgb(241 165 211)"
              class="q-pa-none"
            >
              <q-item-section class="q-pa-md q-ml-none text-white">
                <q-item-label
                  class="text-h6 text-center text-weight-bolder"
                  style="color: #f3667d"
                  >99</q-item-label
                >
                <q-item-label class="text-center" style="color: #f3667d"
                  >七秀坊</q-item-label
                >
              </q-item-section>
              <q-item-section side class="q-mr-md text-white">
                <img src="img/jx3/qixiu.png" width="64" height="64" />
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12">
          <q-card>
            <q-item style="background-color: rgb(169 87 221)" class="q-pa-none">
              <q-item-section class="q-pa-md q-ml-none text-white">
                <q-item-label
                  class="text-h6 text-center text-weight-bolder"
                  style="color: #1b0f38"
                  >33</q-item-label
                >
                <q-item-label
                  class="text-center text-purple-10"
                  style="color: #1b0f38"
                  >五仙教</q-item-label
                >
              </q-item-section>
              <q-item-section side class="q-mr-md text-white">
                <img src="img/jx3/wudu.png" width="64" height="64" />
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12">
          <q-card>
            <q-item style="background-color: rgb(130 82 145)" class="q-pa-none">
              <q-item-section class="q-pa-md q-ml-none text-white">
                <q-item-label
                  class="text-h6 text-center text-weight-bolder"
                  style="color: #4a0843"
                  >22</q-item-label
                >
                <q-item-label class="text-center" style="color: #4a0843"
                  >万花谷</q-item-label
                >
              </q-item-section>
              <q-item-section side class="q-mr-md text-white">
                <img src="img/jx3/wanhua.png" width="64" height="64" />
              </q-item-section>
            </q-item>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "IndexPage",
  components: {},
  setup() {
    function refreshTable() {
      //
    }
    onMounted(() => {});
    return {};
  }
});
</script>
