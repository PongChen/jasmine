<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-dark">
        <q-toolbar-title> 陈老师的教研园 </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="white"
            :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
            @click="$q.fullscreen.toggle()"
            v-if="$q.screen.gt.sm"
          >
            <!--            <q-tooltip>Messages</q-tooltip>-->
          </q-btn>
          <q-btn round dense flat color="white" icon="notifications">
            <q-badge v-if="fktotal > 0" color="red" text-color="white" floating>
              {{ fktotal }}
            </q-badge>
            <q-menu>
              <q-list style="min-width: 100px">
                <div>待定</div>
                <!-- <messages :messages="messages"></messages>
                <q-card class="text-center no-shadow no-border">
                  <q-btn v-if="fktotal>0" label="查看全部" style="max-width: 120px !important;" flat dense
                         class="text-indigo-8" @click="gotofklist"></q-btn>
                </q-card> -->
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn-dropdown round flat :no-caps="false">
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <q-icon left name="account_circle" />
              </div>
            </template>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">系统设置</div>
                <q-toggle
                  v-model="tog1"
                  :label="theme"
                  @update:model-value="themetoggle"
                />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="img/profile.png" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">{{ username }}</div>

                <q-btn
                  color="primary"
                  label="退出"
                  push
                  size="sm"
                  @click="loginout"
                  v-close-popup
                />
              </div>
            </div>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const $q = useQuasar();
    const username = ref("Jamine");
    const fktotal = ref(5);
    const theme = ref("深色主题");
    const tog1 = ref(false);

    const router = useRouter();
    function themetoggle(t) {
      if (t) {
        theme.value = "深色主题";
        // drawerclass = 'text-white'
      } else {
        theme.value = "浅色主题";
        // drawerclass = 'text-dark'
      }
      $q.dark.toggle();
    }
    function loginout() {
      router.push({ name: "Welcom" }).catch((e) => {
        console.log(e);
      });
    }
    return {
      fktotal,
      theme,
      tog1,
      username,
      $q,
      themetoggle,
      loginout
    };
  }
});
</script>
