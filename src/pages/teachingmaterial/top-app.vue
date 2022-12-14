<template>
  <q-card class="no-shadow no-border">
    <q-card-section class="q-pa-none">
      <div class="row q-col-gutter-x-sm">
        <div class="col-md-4 col-sm-12 col-xs-12">
          <q-card>
            <q-item
              style="background-color: rgb(227 225 213)"
              class="q-pa-none"
            >
              <q-item-section class="q-pa-md q-ml-none text-white">
                <q-item-label
                  class="text-h6 text-center text-weight-bolder"
                  style="color: #ce7302; font-size: 24px"
                  >小班</q-item-label
                >
                <q-item-label class="text-center" style="color: #ce7302"
                  >让孩子快速融入小班的学习和生活</q-item-label
                >
              </q-item-section>
              <q-item-section side class="q-mr-md text-white">
                <q-btn
                  round
                  @click="
                    openpng('http://store.giser.org.cn/jasminefiles/img/ss.jpg')
                  "
                >
                  <q-avatar size="42px">
                    <img src="img/view.png" />
                  </q-avatar>
                  <q-tooltip>预览</q-tooltip>
                </q-btn>
                <!-- <q-icon name="train" color="white" size="44px"></q-icon> -->
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12">
          <q-card>
            <q-item
              style="background-color: rgb(225 217 222)"
              class="q-pa-none"
            >
              <q-item-section class="q-pa-md q-ml-none text-white">
                <q-item-label
                  class="text-h6 text-center text-weight-bolder"
                  style="color: #f3667d; font-size: 24px"
                  >中班</q-item-label
                >
                <q-item-label class="text-center" style="color: #f3667d"
                  >激发孩子的主动性和探索欲</q-item-label
                >
              </q-item-section>
              <q-item-section side class="q-mr-md text-white">
                <q-btn
                  round
                  @click="
                    openpng('http://store.giser.org.cn/jasminefiles/img/mm.jpg')
                  "
                >
                  <q-avatar size="42px">
                    <img src="img/view.png" />
                  </q-avatar>
                  <q-tooltip>预览</q-tooltip>
                </q-btn>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12">
          <q-card>
            <q-item
              style="background-color: rgb(190 186 192)"
              class="q-pa-none"
            >
              <q-item-section class="q-pa-md q-ml-none text-white">
                <q-item-label
                  class="text-h6 text-center text-weight-bolder"
                  style="color: #1b0f38; font-size: 24px"
                  >大班</q-item-label
                >
                <q-item-label
                  class="text-center text-purple-10"
                  style="color: #1b0f38"
                  >全方位帮助孩子做好学前准备</q-item-label
                >
              </q-item-section>
              <q-item-section side class="q-mr-md text-white">
                <q-btn
                  round
                  @click="
                    openpng('http://store.giser.org.cn/jasminefiles/img/ll.jpg')
                  "
                >
                  <q-avatar size="42px">
                    <img src="img/view.png" />
                  </q-avatar>
                  <q-tooltip>预览</q-tooltip>
                </q-btn>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>

  <q-dialog v-model="dialogVisible" full-height>
    <q-card style="width: 800px; max-width: 90vw">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">预览</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section style="height: 90vh">
        <q-img :src="url"></q-img>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "IndexPage",
  components: {},
  setup() {
    function openpng(v) {
      url.value = v;
      dialogVisible.value = true;
      //
    }
    const url = ref("");
    const dialogVisible = ref(false);
    onMounted(() => {});
    return { openpng, dialogVisible, url };
  }
});
</script>
