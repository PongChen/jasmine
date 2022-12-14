<template>
  <q-item
    clickable
    v-ripple="{ color: 'yellow' }"
    :to="path"
    active-class="q-item-no-link-highlighting text-indigo-11 bg-cyan-13"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="'img:img/' + icon + '.png'" />

      <!-- <q-avatar size="36px">
        <img :src="'img/' + icon + '.png'" />
      </q-avatar> -->
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <!-- <q-item-label caption>{{ path }}</q-item-label> -->
    </q-item-section>
  </q-item>
  <q-separator />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      default: ""
    },

    name: {
      type: String,
      default: "#"
    },

    path: {
      type: String,
      default: ""
    }
  }
});
</script>
